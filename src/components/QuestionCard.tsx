import { motion } from "framer-motion";
import { PersonalityType, Question } from "@/lib/testData";

interface QuestionCardProps {
    question: Question;
    onAnswerSelect: (type: PersonalityType) => void;
    onPreviousQuestion: () => void;
    questionNumber: number;
    totalQuestions: number;
    isFirstQuestion: boolean;
}

const QuestionCard: React.FC<QuestionCardProps> = (
    {
        question,
        onAnswerSelect,
        onPreviousQuestion,
        questionNumber,
        totalQuestions,
        isFirstQuestion
    }
) => {
    const getColorClasses = (type: PersonalityType) => {
        switch (type) {
        case PersonalityType.CHARISMATIC:
            return {
                bgColorClass: "bg-purple-50 dark:bg-purple-900/30",
                textColorClass: "text-purple-700 dark:text-purple-300",
                borderColorClass: "border-purple-200 dark:border-purple-700"
            };
        case PersonalityType.INTELLECTUAL:
            return {
                bgColorClass: "bg-blue-50 dark:bg-blue-900/30",
                textColorClass: "text-blue-700 dark:text-blue-300",
                borderColorClass: "border-blue-200 dark:border-blue-700"
            };
        case PersonalityType.KINDHEARTED:
            return {
                bgColorClass: "bg-green-50 dark:bg-green-900/30",
                textColorClass: "text-green-700 dark:text-green-300",
                borderColorClass: "border-green-200 dark:border-green-700"
            };
        case PersonalityType.CREATIVE:
            return {
                bgColorClass: "bg-yellow-50 dark:bg-yellow-900/30",
                textColorClass: "text-yellow-700 dark:text-yellow-300",
                borderColorClass: "border-yellow-200 dark:border-yellow-700"
            };
        case PersonalityType.ADVENTUROUS:
            return {
                bgColorClass: "bg-orange-50 dark:bg-orange-900/30",
                textColorClass: "text-orange-700 dark:text-orange-300",
                borderColorClass: "border-orange-200 dark:border-orange-700"
            };
        case PersonalityType.STABLE:
            return {
                bgColorClass: "bg-indigo-50 dark:bg-indigo-900/30",
                textColorClass: "text-indigo-700 dark:text-indigo-300",
                borderColorClass: "border-indigo-200 dark:border-indigo-700"
            };
        default:
            return {
                bgColorClass: "bg-gray-50 dark:bg-gray-800/50",
                textColorClass: "text-gray-700 dark:text-gray-300",
                borderColorClass: "border-gray-200 dark:border-gray-700"
            };
        }
    };

    return (
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 mb-6">
            <div className="text-center mb-6">
                <span
                    className="inline-block bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 text-purple-700 dark:text-purple-300 px-4 py-1 rounded-full text-sm font-medium">问题 {questionNumber}/{totalQuestions}
                </span>
            </div>
            
            <motion.h2
                initial={{
                    opacity: 0,
                    y: 20
                }}
                animate={{
                    opacity: 1,
                    y: 0
                }}
                className="text-2xl font-bold mb-8 text-center text-gray-800 dark:text-gray-100">
                {question.text}
            </motion.h2>
            
            <div className="space-y-4">
                {question.options.map((option, index) => {
                    const {
                        bgColorClass,
                        textColorClass,
                        borderColorClass
                    } = getColorClasses(option.type);

                    return (
                        <motion.button
                            key={option.type}
                            initial={{
                                opacity: 0,
                                y: 20
                            }}
                            animate={{
                                opacity: 1,
                                y: 0
                            }}
                            transition={{
                                delay: index * 0.1
                            }}
                            whileHover={{
                                scale: 1.02
                            }}
                            whileTap={{
                                scale: 0.98
                            }}
                            onClick={() => onAnswerSelect(option.type)}
                            className={`w-full text-left p-4 rounded-xl border-2 transition-all ${bgColorClass} ${textColorClass} ${borderColorClass} hover:shadow-md`}>
                            <div className="flex items-start">
                                <div
                                    className="flex-shrink-0 w-8 h-8 rounded-full bg-white dark:bg-gray-700 flex items-center justify-center font-bold mr-4">
                                    {index + 1}
                                </div>
                                <div>
                                    <h3 className="font-semibold mb-1">{option.text}</h3>
                                    <p className="text-sm opacity-80">{option.description}</p>
                                </div>
                            </div>
                        </motion.button>
                    );
                })}
            </div>
             
            <div className="flex items-center justify-between mt-8">
                {/* 上一题按钮 */}
                {!isFirstQuestion && (
                    <motion.button
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={onPreviousQuestion}
                        className="px-4 py-2 bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 rounded-full flex items-center text-sm font-medium hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
                    >
                        <i className="fas fa-arrow-left mr-2"></i> 上一题
                    </motion.button>
                )}
                
                {/* 提示文本 */}
                <div className="text-center text-sm text-gray-500 dark:text-gray-400 flex-grow">
                    <p
                        style={{
                            fontFamily: "\"Noto Serif SC\", serif",
                            fontSize: "16px"
                        }}>请相信你的第一选择。<br />
                        它不是冲动，而是你灵魂最自然的表达。🌿</p>
                </div>
                
                {/* 占位元素，保持布局平衡 */}
                {!isFirstQuestion && (
                    <div className="w-28"></div>
                )}
            </div>
        </div>
    );
};

export default QuestionCard;