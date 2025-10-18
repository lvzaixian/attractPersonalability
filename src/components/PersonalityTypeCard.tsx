import { motion } from 'framer-motion';
import { PersonalityType } from '@/lib/testData';

interface PersonalityTypeDescription {
  title: string;
  shortTitle: string;
  shortDescription: string;
  fullDescription: string;
  coreTraits: string[];
  improvementTips: string[];
  strengths: string[];
  potentialChallenges: string[];
  careerFit: string[];
  relationshipStyle: string;
}

interface PersonalityTypeCardProps {
  type: PersonalityType;
  description: PersonalityTypeDescription;
  isMainType: boolean;
}

const PersonalityTypeCard: React.FC<PersonalityTypeCardProps> = ({ 
  type, 
  description, 
  isMainType 
}) => {
  // 根据类型选择颜色
  let bgColorClass = '';
  let textColorClass = '';
  let badgeColorClass = '';
  let iconClass = '';
  
  switch(type) {
    case PersonalityType.CHARISMATIC:
      bgColorClass = 'bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/40 dark:to-purple-800/40';
      textColorClass = 'text-purple-800 dark:text-purple-200';
      badgeColorClass = 'bg-purple-500';
      iconClass = 'fa-microphone';
      break;
    case PersonalityType.INTELLECTUAL:
      bgColorClass = 'bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/40 dark:to-blue-800/40';
      textColorClass = 'text-blue-800 dark:text-blue-200';
      badgeColorClass = 'bg-blue-500';
      iconClass = 'fa-brain';
      break;
    case PersonalityType.KINDHEARTED:
      bgColorClass = 'bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/40 dark:to-green-800/40';
      textColorClass = 'text-green-800 dark:text-green-200';
      badgeColorClass = 'bg-green-500';
      iconClass = 'fa-heart';
      break;
    case PersonalityType.CREATIVE:
      bgColorClass = 'bg-gradient-to-r from-yellow-50 to-yellow-100 dark:from-yellow-900/40 dark:to-yellow-800/40';
      textColorClass = 'text-yellow-800 dark:text-yellow-200';
      badgeColorClass = 'bg-yellow-500';
      iconClass = 'fa-paint-brush';
      break;
    case PersonalityType.ADVENTUROUS:
      bgColorClass = 'bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/40 dark:to-orange-800/40';
      textColorClass = 'text-orange-800 dark:text-orange-200';
      badgeColorClass = 'bg-orange-500';
      iconClass = 'fa-mountain';
      break;
    case PersonalityType.STABLE:
      bgColorClass = 'bg-gradient-to-r from-indigo-50 to-indigo-100 dark:from-indigo-900/40 dark:to-indigo-800/40';
      textColorClass = 'text-indigo-800 dark:text-indigo-200';
      badgeColorClass = 'bg-indigo-500';
      iconClass = 'fa-shield-alt';
      break;
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className={`rounded-2xl shadow-lg p-4 md:p-6 ${bgColorClass} ${textColorClass} relative overflow-hidden`}
    >
      {/* 装饰元素 */}
      <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white dark:bg-gray-700 opacity-10"></div>
      <div className="absolute -left-8 -bottom-8 w-32 h-32 rounded-full bg-white dark:bg-gray-700 opacity-10"></div>
      
      {/* 类型标签 */}
      <div className="flex items-center justify-between mb-4">
        <span className={`px-3 py-1 rounded-full text-xs font-medium text-white ${badgeColorClass}`}>
          {isMainType ? '主人格类型' : '副人格类型'}
        </span>
        
        {/* 类型图标 */}
        <div className="w-10 h-10 rounded-full bg-white dark:bg-gray-800 flex items-center justify-center shadow-md">
          <i className={`fas text-lg ${iconClass}`} style={{ color: badgeColorClass.replace('bg-', '') }}></i>
        </div>
      </div>
      
      {/* 类型标题和描述 */}
      <h2 className="text-xl md:text-2xl font-bold mb-3">{description.title}</h2>
      <p className="mb-4 text-sm md:text-base leading-relaxed">{description.shortDescription}</p>
      
      {/* 核心特质 */}
      <div className="bg-white/50 dark:bg-gray-800/50 p-3 rounded-xl mb-4">
        <h3 className="font-semibold text-sm mb-2">核心特质</h3>
        <div className="flex flex-wrap gap-2">
          {description.coreTraits.slice(0, 3).map((trait, index) => (
            <span 
              key={index} 
              className="px-3 py-1 bg-white dark:bg-gray-700 rounded-full text-xs font-medium truncate"
            >
              {trait}
            </span>
          ))}
        </div>
      </div>
      
      {/* 简短描述 */}
      <div className="text-sm md:text-base leading-relaxed">
        {description.fullDescription}
      </div>
    </motion.div>
  );
};

export default PersonalityTypeCard;