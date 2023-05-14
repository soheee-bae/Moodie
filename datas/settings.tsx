import { ReactNode } from "react";
import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { theme } from "../styles/theme";

type SettingData = {
  engname?: string;
  korname?: string;
  link: string;
  icon: ReactNode;
};

export const settings: SettingData[] = [
  {
    engname: "Font Style",
    korname: "글자 스타일",
    link: "FontSetting",
    icon: (
      <MaterialCommunityIcons
        name="format-font"
        size={24}
        color={theme.colors.black}
      />
    ),
  },
  {
    engname: "Background",
    korname: "배경색",
    link: "BackgroundSetting",
    icon: <AntDesign name="picture" size={24} color={theme.colors.black} />,
  },
  {
    engname: "Language",
    korname: "언어",
    link: "LanguageSetting",
    icon: <Ionicons name="language" size={24} color={theme.colors.black} />,
  },
];
