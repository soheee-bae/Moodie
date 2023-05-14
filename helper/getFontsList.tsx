import { languageType } from "../contexts/ThemeContext";
import { engFonts, korFonts } from "../datas/fonts";

export const getFontsList = (language: languageType) => {
  if (language === "eng") {
    return engFonts;
  } else {
    return korFonts;
  }
};
export default getFontsList;
