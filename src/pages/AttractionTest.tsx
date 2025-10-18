import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { questions, PersonalityType } from '@/lib/testData';
import QuestionCard from '@/components/QuestionCard';

const AttractionTest = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, PersonalityType>>({});
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];

  const handleAnswerSelect = (selectedType: PersonalityType) => {
    if (currentQuestionIndex < questions.length - 1) {
      setAnswers({
        ...answers,
        [currentQuestionIndex]: selectedType
      });
      
      // 添加平滑过渡动画
      setTimeout(() => {
        setCurrentQuestionIndex(currentQuestionIndex + 1);
      }, 300);
    } else {
      // 最后一题，计算结果
      const finalAnswers = {
        ...answers,
        [currentQuestionIndex]: selectedType
      };
      
      setIsLoading(true);
      
      // 模拟结果计算延迟
      setTimeout(() => {
        // 保存结果到localStorage
        localStorage.setItem('testAnswers', JSON.stringify(finalAnswers));
        navigate('/result');
      }, 1500);
    }
  };

  // 键盘导航支持
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '1' && e.key <= '6') {
        const typeIndex = parseInt(e.key) - 1;
        // 从当前问题的选项中获取对应的人格类型
        const currentOption = currentQuestion.options[typeIndex];
        if (currentOption) {
          handleAnswerSelect(currentOption.type);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentQuestionIndex, currentQuestion]);

  // 进度百分比
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-3xl font-bold text-purple-600 dark:text-purple-400"
        >
          正在分析您的吸引力人格...
        </motion.div>
        <motion.div 
          className="w-64 h-3 bg-gray-200 dark:bg-gray-700 rounded-full mt-8 overflow-hidden"
          initial={{ width: 0 }}
          animate={{ width: 256 }}
        >
          <motion.div 
            className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 1.2 }}
          />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* 测试标题 */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">
            吸引力人格测试
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            发现你的独特魅力类型
          </p>
        </motion.div>

        {/* 进度条 */}
        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 mb-8">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-blue-500"
            initial={{ width: 0 }}
            animate={{ width: `${progressPercentage}%` }}
            transition={{ duration: 0.5 }}
          />
        </div>

        {/* 问题卡片 */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestionIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <QuestionCard
              question={currentQuestion}
              onAnswerSelect={handleAnswerSelect}
              questionNumber={currentQuestionIndex + 1}
              totalQuestions={questions.length}
            />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default AttractionTest;