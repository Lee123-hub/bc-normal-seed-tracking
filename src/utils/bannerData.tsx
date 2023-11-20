export type BannerData = {
  name: string;
  shortName: string;
  rateCumSum: number[];
  pools: {
    rate: number;
    units: string[];
    reroll: boolean;
  }[];
};

export const NormalBannerData: BannerData = {
  name: "普通",
  shortName: "n",
  rateCumSum: [10000],
  pools: [
    {
      rate: 10000,
      units: [
        "猫咪",
        "坦克猫",
        "战斗猫",
        "恶心猫",
        "牛猫",
        "鸟猫",
        "鱼猫",
        "蜥蜴猫",
        "巨神猫",
        "猫咪炮攻击力",
        "猫咪炮充电速度",
        "工作猫的工作效率",
        "工作狂的猫钱包",
        "城堡体力",
        "研究力",
        "会计能力",
        "学习力",
        "统帅力",
      ],
      reroll: true,
    },
  ],
};

export const NormalBannerPlusData: BannerData = {
  name: "普通+",
  shortName: "np",
  rateCumSum: [10000],
  pools: [
    {
      rate: 10000,
      units: [
        "猫咪",
        "坦克猫",
        "战斗猫",
        "恶心猫",
        "牛猫",
        "鸟猫",
        "鱼猫",
        "蜥蜴猫",
        "巨神猫",
        "猫咪超人",
        "猫咪炮攻击力",
        "猫咪炮充电速度",
        "工作猫的工作效率",
        "工作狂的猫钱包",
        "城堡体力",
        "研究力",
        "会计能力",
        "学习力",
        "统帅力",
      ],
      reroll: true,
    },
  ],
};

export const CatfruitBannerData: BannerData = {
  name: "猫薄荷",
  shortName: "cf",
  rateCumSum: [400, 2400, 9400, 10000],
  pools: [
    {
      rate: 400,
      units: ["5K XP"],
      reroll: false,
    },
    {
      rate: 2000,
      units: [
        "加速",
        "电脑",
        "10K XP",
        "30K XP",
        "50K XP",
        "紫色猫薄荷种子",
        "红色猫薄荷种子",
        "蓝色猫薄荷种子",
        "绿色猫薄荷种子",
        "黄色猫薄荷种子",
      ],
      reroll: true,
    },
    {
      rate: 7000,
      units: [
        "土豪猫",
        "洞悉先机",
        "狙击猫",
        "100K XP",
        "200K XP",
        "紫色猫薄荷",
        "红色猫薄荷",
        "蓝色猫薄荷",
        "绿色猫薄荷",
        "黄色猫薄荷",
      ],
      reroll: false,
    },
    {
      rate: 600,
      units: ["宝物雷达", "500K XP", "史诗猫薄荷"],
      reroll: false,
    },
  ],
};

export const CatseyeBannerData: BannerData = {
  name: "猫眼石",
  shortName: "ce",
  rateCumSum: [500, 7400, 9400, 9900, 10000],
  pools: [
    {
      rate: 500,
      units: ["5K XP"],
      reroll: false,
    },
    {
      rate: 6900,
      units: ["10K XP", "30K XP", "猫眼石【EX】", "猫眼石【稀有】"],
      reroll: true,
    },
    {
      rate: 2000,
      units: ["100K XP", "猫眼石【激稀有】"],
      reroll: false,
    },
    {
      rate: 500,
      units: ["猫眼石【超激稀有】"],
      reroll: false,
    },
    {
      rate: 100,
      units: ["猫眼石【暗】"],
      reroll: false,
    },
  ],
};

export const LuckyTicketBannerData: BannerData = {
  name: "福券转蛋",
  shortName: "lt",
  rateCumSum: [0, 7400, 9500, 10000],
  pools: [
    {
      rate: 0,
      units: [],
      reroll: false,
    },
    {
      rate: 7400,
      units: [
        "小小巨神猫",
        "小小蜥蜴猫",
        "小小鱼猫",
        "小小鸟猫",
        "小小牛猫",
        "小小恶心猫",
        "小小战斗猫",
        "小小坦克猫",
        "小小猫咪",
        "加速",
        "加速",
        "加速",
        "猫电脑",
        "猫电脑",
        "10K XP",
        "10K XP",
        "10K XP",
        "30K XP",
        "30K XP",
        "30K XP",
      ],
      reroll: true,
    },
    {
      rate: 2100,
      units: ["土豪猫", "洞悉先机", "狙击猫"],
      reroll: false,
    },
    {
      rate: 500,
      units: ["宝物雷达"],
      reroll: false,
    },
  ],
};

export const LuckyTicketGBannerData: BannerData = {
  name: "福券转蛋G",
  shortName: "ltg",
  rateCumSum: [0, 5100, 8600, 10000],
  pools: [
    {
      rate: 0,
      units: [],
      reroll: false,
    },
    {
      rate: 5100,
      units: [
        "喵力达A",
        "喵力达A",
        "喵力达A",
        "100K XP",
        "100K XP",
        "100K XP",
      ],
      reroll: true,
    },
    {
      rate: 3500,
      units: ["喵力达B", "喵力达B", "喵力达B", "500K XP"],
      reroll: false,
    },
    {
      rate: 1400,
      units: ["喵力达C", "喵力达C", "喵力达C", "1M XP"],
      reroll: false,
    },
  ],
};

export const AllBanners = [
  NormalBannerData,
  NormalBannerPlusData,
  CatfruitBannerData,
  CatseyeBannerData,
  LuckyTicketBannerData,
  LuckyTicketGBannerData,
];
