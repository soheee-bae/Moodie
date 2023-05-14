import { ImageSourcePropType } from "react-native";

export type MoodsData = {
  engLabel: string;
  korLabel: string;
  file: ImageSourcePropType;
};
export const Moods: MoodsData[] = [
  {
    engLabel: "stressed",
    korLabel: "짜증나",
    file: require("../assets/moods/stressed.png"),
  },
  {
    engLabel: "ecstatic",
    korLabel: "기대돼",
    file: require("../assets/moods/ecstatic.png"),
  },
  {
    engLabel: "excited",
    korLabel: "설레",
    file: require("../assets/moods/excited.png"),
  },
  {
    engLabel: "happy",
    korLabel: "행복해",
    file: require("../assets/moods/happy.png"),
  },
  {
    engLabel: "calm",
    korLabel: "평온해",
    file: require("../assets/moods/calm.png"),
  },
  {
    engLabel: "bored",
    korLabel: "심심해",
    file: require("../assets/moods/bored.png"),
  },
  {
    engLabel: "worried",
    korLabel: "걱정돼",
    file: require("../assets/moods/worried.png"),
  },
  {
    engLabel: "tired",
    korLabel: "피곤해",
    file: require("../assets/moods/tired.png"),
  },
  {
    engLabel: "sad",
    korLabel: "슬퍼",
    file: require("../assets/moods/sad.png"),
  },
];
