import { languageType } from "../contexts/ThemeContext";

type FontData = {
  label: string;
  value: string;
};

const engFonts: FontData[] = [
  {
    label: "Amatic SC",
    value: "AmaticSC_400Regular",
  },
  {
    label: "Caveat",
    value: "Caveat_400Regular",
  },
  {
    label: "Dancing Script",
    value: "DancingScript_400Regular",
  },
  {
    label: "Gentium Plus",
    value: "GentiumPlus_400Regular",
  },
  {
    label: "Inter",
    value: "Inter_400Regular",
  },
  {
    label: "Josefin Sans",
    value: "JosefinSans_400Regular",
  },
  {
    label: "Open Sans",
    value: "OpenSans_400Regular",
  },
  {
    label: "Shantell Sans",
    value: "ShantellSans_400Regular",
  },
  {
    label: "Turret Road",
    value: "TurretRoad_400Regular",
  },
];

const korFonts: FontData[] = [
  {
    label: "Noto Sans 한국어",
    value: "NotoSansKR_400Regular",
  },
  {
    label: "나눔고딕",
    value: "NanumGothic_400Regular",
  },
  {
    label: "노토 세리프 한국어",
    value: "NotoSerifKR_400Regular",
  },
  {
    label: "해바라기",
    value: "Sunflower_300Light",
  },
  {
    label: "개구",
    value: "Gaegu_400Regular",
  },
  {
    label: "동글",
    value: "Dongle_400Regular",
  },
  {
    label: "고운바탕",
    value: "GowunBatang_400Regular",
  },
  {
    label: "귀여운 글꼴",
    value: "CuteFont_400Regular",
  },
  {
    label: "나눔펜 스크립트",
    value: "NanumPenScript_400Regular",
  },
];
export const getFontsList = (language: languageType) => {
  if (language === "eng") {
    return engFonts;
  } else {
    return korFonts;
  }
};
export default getFontsList;
