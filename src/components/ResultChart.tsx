import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { PersonalityType, personalityDescriptions } from '@/lib/testData';

interface ResultChartProps {
  scores: Record<PersonalityType, number>;
}

const ResultChart: React.FC<ResultChartProps> = ({ scores }) => {
  // 格式化数据用于雷达图
  const data = Object.entries(scores).map(([type, score]) => {
    const typeKey = type as PersonalityType;
    return {
      subject: personalityDescriptions[typeKey].shortTitle,
      score: score,
      fullMark: Math.max(...Object.values(scores)) * 1.1, // 稍微放大最大值作为满分
      type: typeKey
    };
  });

  // 根据人格类型获取颜色
  const getColorByType = (type: PersonalityType): string => {
    switch(type) {
      case PersonalityType.CHARISMATIC:
        return '#9333ea'; // 紫色
      case PersonalityType.INTELLECTUAL:
        return '#3b82f6'; // 蓝色
      case PersonalityType.KINDHEARTED:
        return '#22c55e'; // 绿色
      case PersonalityType.CREATIVE:
        return '#eab308'; // 黄色
      case PersonalityType.ADVENTUROUS:
        return '#f97316'; // 橙色
      case PersonalityType.STABLE:
        return '#6366f1'; // 靛蓝色
      default:
        return '#6b7280'; // 灰色
    }
  };

  // 为不同人格类型的点设置不同颜色
  const renderDot = (props: any) => {
    const { cx, cy, payload } = props;
    const type = payload.type as PersonalityType;
    const color = getColorByType(type);
    
    return (
      <circle cx={cx} cy={cy} r={5} fill={color} stroke="#fff" strokeWidth={2} />
    );
  };

  return (
    <div className="h-[350px] md:h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="75%" data={data}>
          <PolarGrid stroke="#e5e7eb" />
          <PolarAngleAxis 
            dataKey="subject" 
            tick={{ fill: '#6b7280', fontSize: 10, fillOpacity: 0.8 }} 
            axisLine={{ stroke: '#e5e7eb' }}
          />
          <PolarRadiusAxis angle={90} domain={[0, 'dataMax']} tick={false} axisLine={false} />
          <Radar
            name="您的得分"
            dataKey="score"
            stroke="#9333ea"
            fill="#9333ea"
            fillOpacity={0.3}
            dot={renderDot}
          />
          <Tooltip
            content={({ active, payload }) => {
              if (active && payload && payload.length) {
                const data = payload[0].payload as any;
                const type = data.type as PersonalityType;
                const color = getColorByType(type);
                
                return (
                  <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 text-sm">
                    <p className="font-semibold" style={{ color }}>{data.subject}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      得分: {data.score.toFixed(1)}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 line-clamp-2">
                      {personalityDescriptions[type].shortDescription}
                    </p>
                  </div>
                );
              }
              return null;
            }}
          />
          <Legend 
            formatter={(value) => <span className="text-xs md:text-sm text-gray-600 dark:text-gray-300">{value}</span>}
            verticalAlign="bottom"
            align="center"
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ResultChart;