import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { PersonalityType, personalityDescriptions } from "@/lib/testData";

export default function Home() {
    const navigate = useNavigate();

    const handleStartTest = () => {
        navigate("/test");
    };

    const personalityTypes = Object.values(PersonalityType);

    return (
        <div
            className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 dark:from-gray-900 dark:to-indigo-950 overflow-hidden">
            {}
            <div
                className="absolute top-0 right-0 w-1/2 h-1/2 bg-purple-200 dark:bg-purple-900/20 rounded-full filter blur-3xl -z-10 opacity-50"></div>
            <div
                className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-blue-200 dark:bg-blue-900/20 rounded-full filter blur-3xl -z-10 opacity-50"></div>
            <div className="container mx-auto px-4 py-16 max-w-5xl relative z-10">
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
                    transition={{
                        duration: 0.8
                    }}
                    className="text-center mb-16">
                    <h1
                        className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent dark:from-purple-400 dark:to-blue-400">吸引力人格测试
                                                                                                          </h1>
                    <p
                        className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
                        style={{
                            fontFamily: "\"Noto Serif SC\", serif"
                        }}>探索你的独特魅力，了解真实的自己，发现你吸引他人的独特特质
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
                        delay: 0.3,
                        duration: 0.5
                    }}
                    className="flex justify-center mb-20">
                    <></>
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
                        delay: 0.6,
                        duration: 0.8
                    }}
                    className="mb-16">
                    <></>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {personalityTypes.map((type, index) => {
                            const description = personalityDescriptions[type];
                            let bgColorClass = "";
                            let textColorClass = "";

                            switch (type) {
                            case PersonalityType.CHARISMATIC:
                                bgColorClass = "bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/30 dark:to-purple-800/30";
                                textColorClass = "text-purple-800 dark:text-purple-200";
                                break;
                            case PersonalityType.INTELLECTUAL:
                                bgColorClass = "bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/30 dark:to-blue-800/30";
                                textColorClass = "text-blue-800 dark:text-blue-200";
                                break;
                            case PersonalityType.KINDHEARTED:
                                bgColorClass = "bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/30 dark:to-green-800/30";
                                textColorClass = "text-green-800 dark:text-green-200";
                                break;
                            case PersonalityType.CREATIVE:
                                bgColorClass = "bg-gradient-to-br from-yellow-50 to-yellow-100 dark:from-yellow-900/30 dark:to-yellow-800/30";
                                textColorClass = "text-yellow-800 dark:text-yellow-200";
                                break;
                            case PersonalityType.ADVENTUROUS:
                                bgColorClass = "bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/30 dark:to-orange-800/30";
                                textColorClass = "text-orange-800 dark:text-orange-200";
                                break;
                            case PersonalityType.STABLE:
                                bgColorClass = "bg-gradient-to-br from-indigo-50 to-indigo-100 dark:from-indigo-900/30 dark:to-indigo-800/30";
                                textColorClass = "text-indigo-800 dark:text-indigo-200";
                                break;
                            }

                            return <></>;
                        })}
                    </div>
                </motion.div>
                {}
                <motion.div
                    initial={{
                        opacity: 0
                    }}
                    animate={{
                        opacity: 1
                    }}
                    transition={{
                        delay: 1.2,
                        duration: 0.8
                    }}
                    className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 mb-16"
                    style={{
                        boxShadow: "rgba(0, 0, 0, 0.15) 0px 0px 30px 0px"
                    }}>
                    <h2
                        className="text-2xl font-bold mb-6 text-center text-gray-800 dark:text-gray-100">为什么要做这个测试？
                                                                                                          </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center text-purple-600 dark:text-purple-400 mr-4">
                                <i className="fas fa-user-gear text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">了解自己</h3>
                                <p className="text-gray-600 dark:text-gray-300">通过测试，你可以更深入地了解自己的性格特点和吸引力来源，发现自己的独特魅力。
                                                                                                                                                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/50 flex items-center justify-center text-blue-600 dark:text-blue-400 mr-4">
                                <i className="fas fa-users text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">改善人际关系</h3>
                                <p className="text-gray-600 dark:text-gray-300">了解自己的人格类型可以帮助你更好地理解他人，提升沟通能力，建立更和谐的人际关系。
                                                                                                                                                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/50 flex items-center justify-center text-green-600 dark:text-green-400 mr-4">
                                <i className="fas fa-heart text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">提升吸引力</h3>
                                <p className="text-gray-600 dark:text-gray-300">测试结果将提供个性化建议，帮助你发挥优势，提升个人魅力，成为更有吸引力的人。
                                                                                                                                                                </p>
                            </div>
                        </div>
                        <div className="flex">
                            <div
                                className="flex-shrink-0 w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/50 flex items-center justify-center text-yellow-600 dark:text-yellow-400 mr-4">
                                <i className="fas fa-lightbulb text-xl"></i>
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-gray-100">获得新视角</h3>
                                <p className="text-gray-600 dark:text-gray-300">测试将从全新的角度分析你的性格特点，帮助你发现自己未曾意识到的潜力和优势。
                                                                                                                                                                </p>
                            </div>
                        </div>
                    </div>
                </motion.div>
                {}
                <motion.div
                    initial={{
                        opacity: 0,
                        y: 20
                    }}
                    animate={{
                        opacity: 1,
                        y: 0
                    }}
                    transition={{
                        delay: 1.5,
                        duration: 0.8
                    }}
                    className="text-center">
                    <h2
                        className="text-2xl font-bold mb-6 text-gray-800 dark:text-gray-100"
                        style={{
                            fontFamily: "\"Noto Sans SC\", sans-serif"
                        }}>准备好发现你的吸引力人格了吗？
                                                                                                          </h2>
                    <button
                        onClick={handleStartTest}
                        className="px-10 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-lg font-bold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        style={{
                            fontSize: "36px"
                        }}>立即开始测试
                                                                                                          </button>
                    <p
                        className="mt-4 text-sm text-gray-500 dark:text-gray-400"
                        style={{
                            fontFamily: "\"Noto Serif SC\", serif"
                        }}>只需回答22个问题，大约需要5分钟
                                                                                                          </p>
                </motion.div>
            </div>
        </div>
    );
}