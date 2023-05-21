import { ImageSourcePropType } from "react-native";

export type MoodsData = {
  value: number;
  engLabel: string;
  korLabel: string;
  file: ImageSourcePropType;
};
export const Moods: MoodsData[] = [
  {
    value: 1,
    engLabel: "stressed",
    korLabel: "짜증나",
    file: require("../assets/moods/stressed.png"),
  },
  {
    value: 2,
    engLabel: "ecstatic",
    korLabel: "기대돼",
    file: require("../assets/moods/ecstatic.png"),
  },
  {
    value: 3,
    engLabel: "excited",
    korLabel: "설레",
    file: require("../assets/moods/excited.png"),
  },
  {
    value: 4,
    engLabel: "happy",
    korLabel: "행복해",
    file: require("../assets/moods/happy.png"),
  },
  {
    value: 5,
    engLabel: "calm",
    korLabel: "평온해",
    file: require("../assets/moods/calm.png"),
  },
  {
    value: 6,
    engLabel: "bored",
    korLabel: "심심해",
    file: require("../assets/moods/bored.png"),
  },
  {
    value: 7,
    engLabel: "worried",
    korLabel: "걱정돼",
    file: require("../assets/moods/worried.png"),
  },
  {
    value: 8,
    engLabel: "tired",
    korLabel: "피곤해",
    file: require("../assets/moods/tired.png"),
  },
  {
    value: 9,
    engLabel: "sad",
    korLabel: "슬퍼",
    file: require("../assets/moods/sad.png"),
  },
];
