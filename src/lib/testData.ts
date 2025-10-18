// 人格类型枚举
export enum PersonalityType {
  CHARISMATIC = 'CHARISMATIC', // 魅力型
  INTELLECTUAL = 'INTELLECTUAL', // 智慧型
  KINDHEARTED = 'KINDHEARTED', // 善良型
  CREATIVE = 'CREATIVE', // 创造型
  ADVENTUROUS = 'ADVENTUROUS', // 冒险型
  STABLE = 'STABLE' // 稳重型
}

// 人格类型描述
export interface PersonalityDescription {
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

export const personalityDescriptions: Record<PersonalityType, PersonalityDescription> = {
  [PersonalityType.CHARISMATIC]: {
    title: "魅力四射的社交达人",
    shortTitle: "魅力型",
    shortDescription: "充满自信，善于与人交往，天生具有领导气质 ✨",
    fullDescription: "你是天生的社交明星，走到哪里都能成为焦点 🌟。你的自信和热情极具感染力，能够轻松赢得他人的好感和信任 ❤️。你善于言辞，有出色的说服力和领导能力，在团队中往往扮演核心角色 🎯。你的魅力不仅来自外表，更源于你的内在自信和人际交往能力 💫。无论是在聚会上还是工作场合，你都能自然地吸引他人的注意，成为众人关注的中心 👑。",
    coreTraits: [
      "极具感染力的热情 🥰",
      "出色的沟通与表达能力 💬",
      "自信且富有领导力 👑",
      "善于活跃气氛 🎉",
      "能够迅速与陌生人建立联系 🤝"
    ],
    improvementTips: [
      "在表达观点时，注意倾听他人的想法，避免过于自我中心 🙉",
      "学会在适当的时候保持沉默，给他人更多表达的空间 🤫",
      "关注细节，避免因过于追求表面效果而忽略实质内容 🔍"
    ],
    strengths: [
      "天生的领导者和团队凝聚者 🎯",
      "能够在短时间内建立广泛的人脉网络 🕸️",
      "善于激励他人发挥潜力 💪",
      "在公众场合表现自信从容 🎤",
      "能够快速适应不同的社交环境 🔄"
    ],
    potentialChallenges: [
      "有时可能显得过于自我中心 😬",
      "在需要深度思考的问题上可能缺乏耐心 ⏳",
      "可能会过度承诺而难以兑现 🤦‍♂️",
      "面对批评时可能会产生防御心理 🛡️"
    ],
    careerFit: [
      "市场营销与公关 📈",
      "销售与客户关系 🤝",
      "教育与培训 👨‍🏫",
      "娱乐与媒体 🎭",
      "政治与公共服务 🏛️"
    ],
    relationshipStyle: "在人际关系中，你往往是主动的一方，喜欢主导关系的发展方向。你善于表达爱意和欣赏，让对方感受到被重视和珍惜。你的伴侣会被你的热情和活力所吸引，但也需要给你足够的个人空间和认可。"
  },
  [PersonalityType.INTELLECTUAL]: {
    title: "深邃睿智的思想者",
    shortTitle: "智慧型",
    shortDescription: "理性思考，学识渊博，对知识有着强烈的渴望 🤓",
    fullDescription: "你是一个充满智慧和好奇心的人，对世界充满探索欲望 🔍。你善于理性思考，分析问题深入透彻，往往能够看到别人忽略的细节 🧐。你的学识渊博，兴趣广泛，在各种话题上都能发表有见地的观点 💡。你重视逻辑和事实，决策时通常基于理性分析而非情感 📊。你享受思考的过程，喜欢挑战自己的思维边界，不断追求知识的深度和广度 📚。",
    coreTraits: [
      "出色的逻辑思维能力 🧠",
      "强烈的求知欲和学习能力 📚",
      "善于分析和解决复杂问题 🔍",
      "注重细节和事实依据 📊",
      "冷静且理性的思考方式 ❄️"
    ],
    improvementTips: [
      "在与他人交流时，尝试用更通俗易懂的方式表达你的观点 🗣️",
      "学会在理性分析的同时，也考虑情感因素的重要性 💖",
      "适当放松自己，不要总是陷入思考状态，学会享受当下 😊"
    ],
    strengths: [
      "能够快速理解复杂概念和系统 🔄",
      "善于发现问题的根源并提出有效解决方案 💡",
      "在压力下保持冷静和理性 🧘‍♂️",
      "学习能力强，能够快速掌握新技能 🚀",
      "注重细节，做事严谨可靠 🎯"
    ],
    potentialChallenges: [
      "可能会过度分析而错过行动时机 ⏱️",
      "在情感表达上可能显得不够敏感 😐",
      "有时可能会显得过于固执己见 🦾",
      "在社交场合中可能显得较为内向或拘谨 🤐"
    ],
    careerFit: [
      "科学研究与开发 🔬",
      "技术与工程 🛠️",
      "数据分析与咨询 📊",
      "学术与教育 👨‍🏫",
      "法律与财务 💼"
    ],
    relationshipStyle: "在人际关系中，你倾向于用理性的方式表达和处理情感。你重视与伴侣的思想交流和精神契合，更看重内在品质而非外表。你的伴侣会欣赏你的智慧和深度，但可能需要你更多地表达情感和关心。"
  },
  [PersonalityType.KINDHEARTED]: {
    title: "温暖善良的守护者",
    shortTitle: "善良型",
    shortDescription: "富有同情心，乐于助人，总是为他人着想 💕",
    fullDescription: "你是一个充满爱心和同情心的人，总是愿意向他人伸出援手 🤝。你的善良和真诚让人感到温暖和安心，朋友们都喜欢向你倾诉心事 🗣️。你善于理解他人的感受，能够设身处地为他人着想 🤗。你的存在让周围的人感到被接纳和被关爱 ❤️。你总是优先考虑他人的需求，甚至有时会牺牲自己的利益来帮助他人 🤲。",
    coreTraits: [
      "富有同情心和同理心 💖",
      "乐于助人，不计较个人得失 🤲",
      "温和友善的性格 😊",
      "善于倾听和理解他人 👂",
      "重视和谐的人际关系 🕊️"
    ],
    improvementTips: [
      "学会在照顾他人的同时，也照顾好自己的需求 💆",
      "不要害怕拒绝别人的不合理请求 🙅‍♂️",
      "在帮助他人时，注重培养他们的独立性，而非过度依赖 🦅"
    ],
    strengths: [
      "能够敏锐地感知他人的情绪和需求 👁️",
      "善于化解冲突，维护和谐关系 🕊️",
      "在团队中是可靠的支持者和协调者 🤝",
      "拥有强大的情感支持网络 👥",
      "能够给他人带来温暖和安慰 🥰"
    ],
    potentialChallenges: [
      "可能会过度妥协而忽视自己的需求 😔",
      "在面对冲突时可能会选择逃避而非面对 🚶‍♂️",
      "容易被他人的情绪所影响 😢",
      "可能会因为过度付出而感到疲惫 😫"
    ],
    careerFit: [
      "医疗与健康护理 👩‍⚕️",
      "教育与辅导 👨‍🏫",
      "社会工作与慈善 🤝",
      "客户服务与支持 💁‍♂️",
      "心理咨询与辅导 🧑‍⚕️"
    ],
    relationshipStyle: "在人际关系中，你是一个充满爱心和关怀的伴侣。你善于倾听和理解对方的需求，总是愿意为对方付出。你的伴侣会感到被爱和被珍惜，但也需要注意不要过度牺牲自己，保持关系的平衡和健康。"
  },
  [PersonalityType.CREATIVE]: {
    title: "天马行空的创意家",
    shortTitle: "创造型",
    shortDescription: "富有想象力，喜欢创新，总是能带来新鲜的想法 🎨",
    fullDescription: "你是一个充满创造力和想象力的人，总是能想出与众不同的点子 💡。你的思维不受常规束缚，善于从不同角度看待问题 🔄。你对美学和艺术有着独特的鉴赏力，喜欢用创造性的方式表达自己 🎨。你的创意和灵感常常能为周围的人带来惊喜和启发 ✨。你不满足于现状，总是在寻找新的可能性和表达方式 🚀。",
    coreTraits: [
      "丰富的想象力和创造力 🧠",
      "独特的视角和思维方式 🔄",
      "对美学和艺术的敏锐感知 👁️",
      "喜欢创新，不满足于现状 🌟",
      "善于将想法转化为实际行动 🎯"
    ],
    improvementTips: [
      "学会将你的创意落地，专注于完成一些具体的项目 🎯",
      "在表达创意时，考虑实际可行性和他人的接受度 🤔",
      "培养耐心，创意的实现往往需要时间和努力 ⏳"
    ],
    strengths: [
      "能够突破常规思维，提出创新解决方案 💡",
      "在艺术和设计领域有独特的天赋 🎨",
      "善于发现美和创造美 🌟",
      "思维灵活，能够快速适应变化 🔄",
      "充满激情和活力，能够感染周围的人 🥰"
    ],
    potentialChallenges: [
      "可能会因为追求完美而拖延项目进度 ⏱️",
      "在面对规则和限制时可能会感到沮丧 😫",
      "有时可能会过于理想化而忽视实际可行性 🤔",
      "在需要专注于细节的任务上可能会感到枯燥 🥱"
    ],
    careerFit: [
      "艺术与设计 🎨",
      "广告与创意营销 📣",
      "写作与内容创作 ✍️",
      "音乐与表演艺术 🎵",
      "产品设计与研发 🎯"
    ],
    relationshipStyle: "在人际关系中，你是一个充满浪漫和创意的伴侣。你善于用独特的方式表达爱意，总是能为关系带来新鲜感和惊喜。你的伴侣会被你的创意和激情所吸引，但也需要理解你的需要一定的自由和空间来发挥创造力。"
  },
  [PersonalityType.ADVENTUROUS]: {
    title: "勇敢无畏的探险家",
    shortTitle: "冒险型",
    shortDescription: "喜欢挑战，追求刺激，勇于尝试新鲜事物 ⛰️",
    fullDescription: "你是一个充满勇气和活力的人，总是渴望探索未知的世界 🌍。你喜欢挑战自我，追求刺激和新鲜感，从不畏惧尝试新事物 🚀。你的人生充满了各种有趣的经历和故事，总是能为周围的人带来惊喜和活力 🎉。你相信人生在于体验，乐于拥抱变化和不确定性 🔄。无论是尝试新的运动、探索新的地方还是学习新的技能，你都充满热情和勇气 💪。",
    coreTraits: [
      "勇敢无畏，敢于挑战自我 🦁",
      "充满活力和热情 💥",
      "喜欢探索和尝试新事物 🔍",
      "适应能力强，善于应对变化 🔄",
      "乐观积极的人生态度 😊"
    ],
    improvementTips: [
      "在追求刺激的同时，注意安全和风险控制 🛡️",
      "学会在适当的时候放慢脚步，享受生活的细节 🐌",
      "培养耐心，有些事情需要时间沉淀和积累 ⏳"
    ],
    strengths: [
      "面对挑战和困难时表现出强大的勇气和韧性 💪",
      "能够快速适应新环境和新情况 🔄",
      "充满活力和热情，能够感染周围的人 🥰",
      "拥有丰富的人生经历和故事 📚",
      "善于发现生活中的乐趣和美好 🌈"
    ],
    potentialChallenges: [
      "可能会因为追求刺激而忽视安全风险 ⚠️",
      "在需要长期坚持的任务上可能缺乏耐心 ⏱️",
      "有时可能会显得冲动和鲁莽 🤦‍♂️",
      "在面对平淡的日常生活时可能会感到无聊 😴"
    ],
    careerFit: [
      "户外与极限运动 🏂",
      "旅游与探险 🌍",
      "销售与业务拓展 📈",
      "创业与创新 🚀",
      "军事与执法 👮‍♂️"
    ],
    relationshipStyle: "在人际关系中，你是一个充满活力和激情的伴侣。你喜欢与伴侣一起探索新事物，创造共同的回忆。你的伴侣会被你的勇气和活力所吸引，但也需要理解你的需要一定的自由和空间来追求自己的兴趣和冒险。"
  },
  [PersonalityType.STABLE]: {
    title: "可靠沉稳的支柱",
    shortTitle: "稳重型",
    shortDescription: "踏实可靠，情绪稳定，是他人可以依赖的对象 🛡️",
    fullDescription: "你是一个稳重可靠的人，总是能够给人安全感和信任感 🛡️。你的情绪稳定，很少因为外界的变化而波动，能够在压力下保持冷静 🧘‍♂️。你做事认真负责，注重实际效果，是团队中值得信赖的成员 🤝。你的存在让周围的人感到安心，知道无论发生什么，你都会在那里支持他们 🫂。你重视秩序和稳定，喜欢有计划、有条理的生活方式 📅。",
    coreTraits: [
      "情绪稳定，心态平和 🧘‍♂️",
      "做事认真负责，注重细节 🎯",
      "可靠可信，值得依赖 🛡️",
      "善于规划和组织 📅",
      "面对压力时保持冷静 ❄️"
    ],
    improvementTips: [
      "尝试偶尔突破自己的舒适区，接受一些新的挑战 🚀",
      "学会表达自己的情感，让他人更好地了解你的内心世界 💖",
      "在坚持原则的同时，保持一定的灵活性 🤸‍♂️"
    ],
    strengths: [
      "在压力和危机面前保持冷静和理性 🧘‍♂️",
      "做事可靠，能够按时完成任务 🎯",
      "善于规划和组织，能够有效管理时间和资源 📅",
      "是团队中的稳定力量和可靠支柱 🛡️",
      "能够给他人带来安全感和信任感 🤝"
    ],
    potentialChallenges: [
      "可能会因为过于保守而错过新的机会 😕",
      "在情感表达上可能显得较为内敛 🤐",
      "面对变化时可能需要较长时间来适应 ⏳",
      "有时可能会显得过于严格或固执 🦾"
    ],
    careerFit: [
      "项目管理与运营 📊",
      "金融与会计 💹",
      "行政与后勤 🏢",
      "技术支持与维护 🔧",
      "教育与培训 👨‍🏫"
    ],
    relationshipStyle: "在人际关系中，你是一个可靠和稳定的伴侣。你重视承诺和责任，总是能够在伴侣需要的时候给予支持和依靠。你的伴侣会感到安全和安心，但也需要你更多地表达情感和尝试一些新的体验，为关系增添活力。"
  }
};

// 题目选项接口
export interface QuestionOption {
  text: string;
  description: string;
  type: PersonalityType;
}

// 测试题目接口
export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
}

// 为每个题目创建更具体的选项
export const questions: Question[] = [
  { 
    id: 1, 
    text: "在社交场合中，你更倾向于扮演什么角色？",
    options: [
      { 
        text: "成为焦点，带动气氛", 
        description: "喜欢主动交流，讲笑话或故事，让大家都参与进来", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "观察和倾听", 
        description: "倾向于听别人说话，思考他们的观点和想法", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "关心他人的感受", 
        description: "注意到谁看起来不开心或被冷落，主动去关心他们", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "提出创意话题", 
        description: "喜欢分享新奇的想法或有趣的发现，激发讨论", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "寻找新的体验", 
        description: "喜欢尝试新的活动或认识新的人，不喜欢一成不变", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "保持和谐", 
        description: "尽量避免冲突，努力让每个人都感到舒适", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 2, 
    text: "当面临重要决策时，你通常会如何做决定？",
    options: [
      { 
        text: "凭直觉和感染力", 
        description: "相信自己的直觉，并考虑这个决定会如何影响他人", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "分析所有可能性", 
        description: "收集所有相关信息，权衡利弊，理性分析", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "考虑他人的需求", 
        description: "优先考虑这个决定会如何影响周围的人", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "寻找创新解决方案", 
        description: "尝试找到与众不同的方法，跳出常规思维", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "拥抱不确定性", 
        description: "愿意承担风险，喜欢尝试新的可能性", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "选择最稳妥的方案", 
        description: "倾向于选择经过验证、风险较小的选项", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 3, 
    text: "你更欣赏哪种类型的电影或书籍？",
    options: [
      { 
        text: "富有戏剧性的故事", 
        description: "喜欢有魅力的角色和引人入胜的情节发展", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "有深度的内容", 
        description: "喜欢能够引发思考、探讨复杂问题的作品", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "温暖感人的故事", 
        description: "喜欢讲述人与人之间情感连接的作品", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "创新独特的风格", 
        description: "欣赏有独特视角或艺术创新的作品", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "惊险刺激的冒险", 
        description: "喜欢充满动作和探索未知的作品", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "结构严谨的叙事", 
        description: "喜欢情节连贯、逻辑清晰的作品", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 4, 
    text: "在团队合作中，你通常负责什么工作？",
    options: [
      { 
        text: "带领团队", 
        description: "喜欢设定目标，激励他人，协调团队成员", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "分析问题", 
        description: "善于识别问题，提出解决方案，提供专业意见", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "关心团队成员", 
        description: "确保每个人都感到被重视，帮助解决团队内部矛盾", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "提供创意", 
        description: "喜欢提出新点子，寻找创新的工作方法", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "执行任务", 
        description: "愿意承担具有挑战性的任务，喜欢行动和实践", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "确保稳定", 
        description: "喜欢制定计划，确保工作按部就班地进行", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 5, 
    text: "当朋友遇到困难时，你会如何帮助他们？",
    options: [
      { 
        text: "给予鼓励", 
        description: "用积极的话语和乐观的态度激励他们", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "提供建议", 
        description: "分析问题，提出实用的解决方案", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "倾听和陪伴", 
        description: "耐心倾听他们的烦恼，给予情感支持", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "转移注意力", 
        description: "用有趣的活动或新鲜的想法帮助他们忘记烦恼", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "一起面对", 
        description: "主动提供实际帮助，陪他们一起解决问题", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "稳定情绪", 
        description: "保持冷静，帮助他们平复情绪，理性面对", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 6, 
    text: "周末休息时，你更喜欢哪种活动？",
    options: [
      { 
        text: "参加社交活动", 
        description: "喜欢和朋友聚会，认识新朋友，参加派对", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "学习新知识", 
        description: "喜欢阅读、观看纪录片或参加讲座，充实自己", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "陪伴家人或朋友", 
        description: "喜欢和亲近的人一起度过，分享彼此的生活", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "进行创作", 
        description: "喜欢画画、写作、音乐或其他创造性活动", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "户外活动", 
        description: "喜欢徒步、骑行、旅行或尝试新的运动", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "在家放松", 
        description: "喜欢在家休息，做一些熟悉和舒适的事情", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 7, 
    text: "你如何看待规则和传统？",
    options: [
      { 
        text: "灵活运用", 
        description: "认为规则是为了方便人们，而不是限制人们", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "理性分析", 
        description: "会思考规则的合理性和适用范围", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "尊重传统", 
        description: "认为传统有其存在的价值，应该被尊重", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "勇于创新", 
        description: "不满足于现状，喜欢挑战传统，尝试新方法", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "突破限制", 
        description: "认为规则有时候会限制人的发展，需要突破", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "遵守秩序", 
        description: "认为规则是社会秩序的基础，应该遵守", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 8, 
    text: "在与人争论时，你更注重什么？",
    options: [
      { 
        text: "说服对方", 
        description: "喜欢用自己的观点和魅力说服对方", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "逻辑和事实", 
        description: "注重用事实和逻辑来支持自己的观点", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "保持和谐", 
        description: "尽量避免伤害对方的感情，寻求和解", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "寻求新视角", 
        description: "喜欢从不同角度看问题，寻找创新的解决方案", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "坚持立场", 
        description: "一旦确定自己是对的，就会坚持到底", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "理性沟通", 
        description: "保持冷静，试图理解对方的观点，寻找共同点", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 9, 
    text: "你更倾向于如何表达自己的情感？",
    options: [
      { 
        text: "直接表达", 
        description: "喜欢坦诚地表达自己的感受，不掩饰", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "理性表达", 
        description: "会思考自己的情感，然后有条理地表达", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "关心他人感受", 
        description: "表达情感时会考虑对方的感受，不伤害他人", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "创意表达", 
        description: "喜欢用艺术、写作或其他创意方式表达情感", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "行动表达", 
        description: "更倾向于用行动而不是语言来表达情感", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "稳定表达", 
        description: "情感表达比较稳定，不会有太大的波动", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 10, 
    text: "当计划被打乱时，你的第一反应是什么？",
    options: [
      { 
        text: "灵活调整", 
        description: "很快适应变化，并寻找新的可能性", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "分析原因", 
        description: "会思考为什么计划会被打乱，找出问题所在", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "关心他人", 
        description: "首先关心这个变化会如何影响他人", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "寻找机会", 
        description: "认为变化中蕴含着新的机会和创意空间", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "接受挑战", 
        description: "把变化视为一种挑战，乐于尝试新事物", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "恢复秩序", 
        description: "会尽快想办法让一切回到正轨", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 11, 
    text: "你更喜欢与哪种类型的人交朋友？",
    options: [
      { 
        text: "充满活力的人", 
        description: "喜欢和积极向上、能带来快乐能量的人在一起", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "有智慧的人", 
        description: "喜欢和知识渊博、能带来新思考的人交流", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "善良真诚的人", 
        description: "重视朋友的善良品质和真诚态度", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "有创造力的人", 
        description: "喜欢和有独特想法、能带来新鲜感的人相处", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "喜欢冒险的人", 
        description: "喜欢和勇于尝试、喜欢探索的人一起行动", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "可靠稳重的人", 
        description: "重视朋友的可靠性和稳定性", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 12, 
    text: "在学习或工作中，你更注重什么？",
    options: [
      { 
        text: "与人合作", 
        description: "喜欢团队合作，通过与人互动来学习和工作", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "知识获取", 
        description: "注重学习新知识，深入理解事物的本质", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "帮助他人", 
        description: "喜欢在学习或工作中帮助他人，共同进步", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "创新方法", 
        description: "喜欢寻找新的学习或工作方法，提高效率", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "实践体验", 
        description: "更倾向于通过实践和体验来学习和成长", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "完成目标", 
        description: "注重按计划完成任务，达到预期目标", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 13, 
    text: "你如何处理压力和焦虑？",
    options: [
      { 
        text: "积极面对", 
        description: "用积极的心态面对压力，相信自己能够克服", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "分析问题", 
        description: "会分析压力源，找出解决问题的方法", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "寻求支持", 
        description: "喜欢和朋友或家人倾诉，寻求情感支持", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "转移注意力", 
        description: "通过做自己喜欢的事情来缓解压力", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "释放能量", 
        description: "通过运动或其他活动来释放压力和焦虑", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "保持冷静", 
        description: "尽量保持冷静，通过常规的方式缓解压力", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 14, 
    text: "你对未来的规划更倾向于？",
    options: [
      { 
        text: "设定宏大目标", 
        description: "喜欢设定有挑战性的目标，并努力实现", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "长期规划", 
        description: "喜欢制定详细的长期规划，考虑各种可能性", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "兼顾他人", 
        description: "在规划未来时，会考虑家人和朋友的需求", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "保持灵活性", 
        description: "不喜欢过于固定的规划，喜欢保持灵活性", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "拥抱变化", 
        description: "对未来充满好奇，乐于接受各种可能性", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "稳健前进", 
        description: "喜欢稳步前进，不喜欢冒太大的风险", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 15, 
    text: "你更擅长哪种类型的任务？",
    options: [
      { 
        text: "与人打交道", 
        description: "善于与人沟通、协调和合作的任务", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "分析思考", 
        description: "需要深入思考、分析和解决问题的任务", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "关怀他人", 
        description: "需要照顾、帮助和支持他人的任务", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "创造性工作", 
        description: "需要创新、设计和艺术表达的任务", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "实践性任务", 
        description: "需要动手操作、身体活动的任务", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "组织规划", 
        description: "需要组织、规划和执行的任务", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 16, 
    text: "当看到他人需要帮助时，你通常会？",
    options: [
      { 
        text: "主动提供帮助", 
        description: "会立即上前询问是否需要帮助", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "评估情况", 
        description: "会先观察和评估情况，然后决定如何帮助", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "感同身受", 
        description: "会感受到对方的困难，真心想要帮助他们", 
        type: PersonalityType.KINDHEARTED},
      { 
        text: "寻找创新方法", 
        description: "会思考是否有更好的方法来帮助对方", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "采取行动", 
        description: "会立即采取实际行动来帮助对方", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "提供可靠支持", 
        description: "会提供稳定、可靠的帮助，直到问题解决", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 17, 
    text: "你对新科技和新趋势的态度是？",
    options: [
      { 
        text: "积极尝试", 
        description: "喜欢尝试新的科技产品和流行趋势", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "深入了解", 
        description: "会研究新科技的原理和影响，理解其价值", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "关注影响", 
        description: "更关心新科技对人们生活的影响", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "探索可能性", 
        description: "喜欢探索新科技带来的创新可能性", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "勇于体验", 
        description: "乐于成为第一批体验新科技的人", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "谨慎接受", 
        description: "会等到技术成熟、稳定后再考虑使用", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 18, 
    text: "在团队冲突中，你通常会扮演什么角色？",
    options: [
      { 
        text: "协调者", 
        description: "喜欢调解冲突，寻找共同点，促进和解", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "分析者", 
        description: "会分析冲突的根源，寻找理性的解决方案", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "和事佬", 
        description: "不喜欢冲突，会尽量安抚双方情绪", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "创新解决者", 
        description: "会提出新颖的解决方案，打破僵局", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "直面问题", 
        description: "不会回避冲突，会直接面对并解决问题", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "稳定者", 
        description: "保持冷静，维护团队的基本秩序", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 19, 
    text: "你更享受哪种类型的成就感？",
    options: [
      { 
        text: "影响他人", 
        description: "喜欢自己的行为能够影响和激励他人", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "解决难题", 
        description: "享受解决复杂问题带来的成就感", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "帮助他人", 
        description: "从帮助他人、改善他们的生活中获得满足", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "创造作品", 
        description: "喜欢看到自己的创意变成实际的作品", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "挑战自我", 
        description: "享受不断挑战自我、突破极限的感觉", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "完成目标", 
        description: "喜欢按计划完成任务，达到预期目标", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 20, 
    text: "你如何看待风险和不确定性？",
    options: [
      { 
        text: "视为机会", 
        description: "认为风险和不确定性中蕴含着成长的机会", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "理性评估", 
        description: "会分析风险的可能性和影响，做出明智决策", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "谨慎对待", 
        description: "不喜欢风险，会尽量避免不确定性", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "激发创意", 
        description: "认为不确定性能够激发人的创造力", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "乐于接受", 
        description: "喜欢冒险和尝试新的可能性", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "寻求稳定", 
        description: "更喜欢稳定和可预测的环境", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 21, 
    text: "在社交互动中，你更注重什么？",
    options: [
      { 
        text: "建立连接", 
        description: "喜欢与他人建立深入的情感连接", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "思想交流", 
        description: "喜欢有深度、有思想的交流和对话", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "情感支持", 
        description: "注重在社交中给予和获得情感支持", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "有趣体验", 
        description: "喜欢社交中的新奇和有趣体验", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "共同活动", 
        description: "更喜欢通过一起活动来进行社交", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "舒适氛围", 
        description: "更注重社交中的舒适和放松氛围", 
        type: PersonalityType.STABLE 
      }
    ]
  },
  { 
    id: 22, 
    text: "你希望给他人留下什么样的印象？",
    options: [
      { 
        text: "充满魅力", 
        description: "希望被视为有吸引力、有影响力的人", 
        type: PersonalityType.CHARISMATIC 
      },
      { 
        text: "聪明睿智", 
        description: "希望被视为知识渊博、有智慧的人", 
        type: PersonalityType.INTELLECTUAL 
      },
      { 
        text: "善良温暖", 
        description: "希望被视为善良、有爱心的人", 
        type: PersonalityType.KINDHEARTED 
      },
      { 
        text: "独特创意", 
        description: "希望被视为有创造力、独特的人", 
        type: PersonalityType.CREATIVE 
      },
      { 
        text: "勇敢有趣", 
        description: "希望被视为勇敢、有趣、充满活力的人", 
        type: PersonalityType.ADVENTUROUS 
      },
      { 
        text: "可靠稳重", 
        description: "希望被视为可靠、稳重、值得信赖的人", 
        type: PersonalityType.STABLE 
      }
    ]
  }
];