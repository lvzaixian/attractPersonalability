import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PersonalityType, personalityDescriptions, questions } from "@/lib/testData";
import ResultChart from "@/components/ResultChart";
import PersonalityTypeCard from "@/components/PersonalityTypeCard";

const TestResult = () => {
    const [result, setResult] = useState<{
        mainType: PersonalityType;
        secondaryType: PersonalityType;
        scores: Record<PersonalityType, number>;
        compatibility: Record<PersonalityType, string>;
    } | null>(null);

    const [isLoading, setIsLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const storedAnswers = localStorage.getItem("testAnswers");

        if (!storedAnswers) {
            navigate("/test");
            return;
        }

        const answers = JSON.parse(storedAnswers) as Record<number, PersonalityType>;

        const scores: Record<PersonalityType, number> = {
            [PersonalityType.CHARISMATIC]: 0,
            [PersonalityType.INTELLECTUAL]: 0,
            [PersonalityType.KINDHEARTED]: 0,
            [PersonalityType.CREATIVE]: 0,
            [PersonalityType.ADVENTUROUS]: 0,
            [PersonalityType.STABLE]: 0
        };

        Object.entries(answers).forEach(([questionIndex, type]) => {
            const weight = 1 + parseInt(questionIndex) / questions.length * 0.5;
            scores[type] += weight;
        });

        const sortedTypes = Object.entries(scores).sort((a, b) => b[1] - a[1]).map(entry => entry[0] as PersonalityType);
        const mainType = sortedTypes[0];
        const secondaryType = sortedTypes[1];
        const compatibility: Record<PersonalityType, string> = {};

        Object.values(PersonalityType).forEach(type => {
            if (type === mainType || type === secondaryType) {
                compatibility[type] = "极高";
            } else {
                const score = scores[type];
                const maxScore = Math.max(...Object.values(scores));
                const ratio = score / maxScore;

                if (ratio > 0.8)
                    compatibility[type] = "高";
                else if (ratio > 0.6)
                    compatibility[type] = "中等";
                else if (ratio > 0.4)
                    compatibility[type] = "低";
                else
                    compatibility[type] = "极低";
            }
        });

        setTimeout(() => {
            setResult({
                mainType,
                secondaryType,
                scores,
                compatibility
            });

            setIsLoading(false);
        }, 1000);
    }, [navigate]);

    const handleRetakeTest = () => {
        navigate("/test");
    };

    if (isLoading) {
        return (
            <div
                className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 p-4">
                <motion.div
                    animate={{
                        rotate: 360
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear"
                    }}
                    className="w-16 h-16 border-t-4 border-purple-500 border-solid rounded-full mb-4" />
                <p className="text-gray-600 dark:text-gray-300 text-center">正在生成您的个性化报告...</p>
            </div>
        );
    }

    if (!result) {
        return (
            <div className="flex flex-col items-center justify-center min-h-screen p-4">
                <p className="text-gray-600 dark:text-gray-300 text-center">无法加载测试结果</p>
                <button
                    onClick={handleRetakeTest}
                    className="mt-4 px-6 py-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors">重新测试
                            </button>
            </div>
        );
    }

    const mainDescription = personalityDescriptions[result.mainType];
    const secondaryDescription = personalityDescriptions[result.secondaryType];

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950">
            <div className="container mx-auto px-4 py-6 md:py-8 max-w-4xl">
                {}
                <motion.div
                    initial={{
                        y: -50,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    className="text-center mb-8">
                    <h1
                        className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">您的吸引力人格报告
                                  </h1>
                    <p className="mt-2 text-gray-600 dark:text-gray-300">深入了解您的独特魅力 🔮
                                  </p>
                </motion.div>
                {}
                <motion.div
                    initial={{
                        scale: 0.9,
                        opacity: 0
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.2
                    }}
                    className="mb-8">
                    <PersonalityTypeCard type={result.mainType} description={mainDescription} isMainType={true} />
                </motion.div>
                {}
                <motion.div
                    initial={{
                        scale: 0.9,
                        opacity: 0
                    }}
                    animate={{
                        scale: 1,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.4
                    }}
                    className="mb-8">
                    <PersonalityTypeCard
                        type={result.secondaryType}
                        description={secondaryDescription}
                        isMainType={false} />
                </motion.div>
                {}
                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.6
                    }}
                    className="mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 md:p-6">
                    <h2
                        className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">您的人格特质分布 📊
                                  </h2>
                    <ResultChart scores={result.scores} />
                </motion.div>
                {}
                <motion.div
                    initial={{
                        y: 50,
                        opacity: 0
                    }}
                    animate={{
                        y: 0,
                        opacity: 1
                    }}
                    transition={{
                        delay: 0.8
                    }}
                    className="mb-8 bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-4 md:p-6">
                    <h2
                        className="text-xl md:text-2xl font-bold mb-4 text-center text-gray-800 dark:text-gray-100">人格特质深度分析 🧠
                                  </h2>
                    <div className="space-y-5">
                        {}
                        <div className="bg-purple-50 dark:bg-gray-700 p-4 rounded-xl">
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 text-purple-700 dark:text-purple-300 flex items-center">
                                <i className="fas fa-trophy mr-2"></i>您的核心优势
                                              </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                {mainDescription.strengths.map((strength, index) => <li key={index} className="flex items-start">
                                    <span className="text-purple-500 mr-2 mt-1"><i className="fas fa-check-circle"></i></span>
                                    <span>{strength}</span>
                                </li>)}
                            </ul>
                        </div>
                        {}
                        <div className="bg-orange-50 dark:bg-gray-700 p-4 rounded-xl">
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 text-orange-700 dark:text-orange-300 flex items-center">
                                <i className="fas fa-exclamation-triangle mr-2"></i>潜在挑战
                                              </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                {mainDescription.potentialChallenges.map((challenge, index) => <li key={index} className="flex items-start">
                                    <span className="text-orange-500 mr-2 mt-1"><i className="fas fa-exclamation-circle"></i></span>
                                    <span>{challenge}</span>
                                </li>)}
                            </ul>
                        </div>
                        {}
                        <div className="bg-green-50 dark:bg-gray-700 p-4 rounded-xl">
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 text-green-700 dark:text-green-300 flex items-center">
                                <i className="fas fa-briefcase mr-2"></i>适合您的职业方向
                                              </h3>
                            <div className="flex flex-wrap gap-2">
                                {mainDescription.careerFit.map((career, index) => <span
                                    key={index}
                                    className="px-3 py-1.5 bg-white dark:bg-gray-600 rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 shadow-sm">
                                    {career}
                                </span>)}
                            </div>
                        </div>
                        {}
                        <div className="bg-red-50 dark:bg-gray-700 p-4 rounded-xl">
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 text-red-700 dark:text-red-300 flex items-center">
                                <i className="fas fa-heart mr-2"></i>恋爱与人际关系风格
                                              </h3>
                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                                {mainDescription.relationshipStyle}
                            </p>
                        </div>
                        {}
                        <div className="p-4 rounded-xl bg-blue-50 dark:bg-gray-700">
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 text-blue-700 dark:text-blue-300 flex items-center">
                                <i className="fas fa-handshake mr-2"></i>与其他人格类型的兼容性
                                              </h3>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {Object.entries(result.compatibility).map(([type, level]) => {
                                    const typeKey = type as PersonalityType;
                                    const typeName = personalityDescriptions[typeKey].shortTitle;
                                    let colorClass = "";
                                    let icon = "";

                                    switch (level) {
                                    case "极高":
                                        colorClass = "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100";
                                        icon = "fa-heart";
                                        break;
                                    case "高":
                                        colorClass = "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100";
                                        icon = "fa-smile";
                                        break;
                                    case "中等":
                                        colorClass = "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100";
                                        icon = "fa-meh";
                                        break;
                                    case "低":
                                        colorClass = "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100";
                                        icon = "fa-frown";
                                        break;
                                    case "极低":
                                        colorClass = "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100";
                                        icon = "fa-angry";
                                        break;
                                    }

                                    return (
                                        <div
                                            key={type}
                                            className={`${colorClass} px-3 py-2 rounded-lg text-center text-sm flex flex-col items-center`}>
                                            <i className={`fas ${icon} mb-1`}></i>
                                            <div className="font-medium">{typeName}</div>
                                            <div className="text-xs mt-1">{level}</div>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                        {}
                        <div className="bg-indigo-50 dark:bg-gray-700 p-4 rounded-xl">
                            <h3
                                className="text-lg md:text-xl font-semibold mb-3 text-indigo-700 dark:text-indigo-300 flex items-center">
                                <i className="fas fa-lightbulb mr-2"></i>提升个人魅力的建议
                                              </h3>
                            <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                                {mainDescription.improvementTips.map((tip, index) => <li key={index} className="flex items-start">
                                    <span className="text-indigo-500 mr-2 mt-1"><i className="fas fa-star"></i></span>
                                    <span>{tip}</span>
                                </li>)}
                            </ul>
                        </div>
                    </div>
                </motion.div>
                {}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <motion.button
                        initial={{
                            scale: 0.9,
                            opacity: 0
                        }}
                        animate={{
                            scale: 1,
                            opacity: 1
                        }}
                        transition={{
                            delay: 1
                        }}
                        whileHover={{
                            scale: 1.05
                        }}
                        whileTap={{
                            scale: 0.95
                        }}
                        onClick={handleRetakeTest}
                        className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-medium rounded-full shadow-lg hover:shadow-xl transition-all flex items-center justify-center">
                        <i className="fas fa-redo-alt mr-2"></i>重新测试
                                  </motion.button>
                    <></>
                </div>
            </div>
        </div>
    );
};

export default TestResult;