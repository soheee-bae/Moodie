import { ReactNode } from "react";
import { Octicons, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import HighlightIcon from "../components/HighlightIcon";
import HightlightModal from "../components/HighlightModal";

export type KeyboardToolData = {
  id: string;
  icon: ReactNode;
};

export type KeyboardAlignData = {
  icon: ReactNode;
  textAlign: string;
  alignItem: string;
};

export const keyboardTools: KeyboardToolData[] = [
  { id: "image", icon: <Octicons name="image" size={24} /> },
  {
    id: "clock",
    icon: <MaterialCommunityIcons name="clock-outline" size={24} />,
  },
];

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
