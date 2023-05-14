import { languageType } from "../contexts/ThemeContext";

type LanguageData = {
  value: languageType;
  engLabel?: string;
  korLabel?: string;
};

export const languages: LanguageData[] = [
  {
    value: "eng",
    engLabel: "English",
    korLabel: "영어",
  },
  {
    value: "kor",
    engLabel: "Korean",
    korLabel: "한국어",
  },
];
