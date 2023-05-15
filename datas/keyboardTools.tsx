import { ReactNode } from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { FlexAlignType } from "react-native";

export type KeyboardToolData = {
  id: string;
  icon: ReactNode;
};

export type KeyboardAlignData = {
  icon: ReactNode;
  textAlign: "center" | "left" | "right" | undefined;
  alignItem: FlexAlignType | undefined;
};

export const keyboardAlign: KeyboardAlignData[] = [
  {
    icon: (
      <MaterialCommunityIcons
        name="format-align-left"
        size={24}
        color="black"
      />
    ),
    textAlign: "left",
    alignItem: "flex-start",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="format-align-center"
        size={24}
        color="black"
      />
    ),
    textAlign: "center",
    alignItem: "center",
  },
  {
    icon: (
      <MaterialCommunityIcons
        name="format-align-right"
        size={24}
        color="black"
      />
    ),
    textAlign: "right",
    alignItem: "flex-end",
  },
];
