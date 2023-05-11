import { ReactNode, createContext, useState } from "react";
import { theme } from "../styles/theme";

export type languageType = "kor" | "eng";

export type ThemeContextContent = {
  background: string;
  setBackground: (background: string) => void;
  language: languageType;
  setLanguage: (language: languageType) => void;
  highlightColor: string;
  isEng: boolean;
};

const ThemeContext = createContext<ThemeContextContent>({
  background: "",
  setBackground: (background: string) => undefined,
  language: "eng",
  setLanguage: (language: languageType) => undefined,
  highlightColor: "",
  isEng: true,
});

const highlights = Object.values(theme.highlights);
const backgrounds = Object.values(theme.background);

interface ThemeContextProps {
  children: ReactNode;
}

function ThemeContextProvider(props: ThemeContextProps) {
  const { children } = props;
  const [background, setBackground] = useState(theme.background.white); //
  const [language, setLanguage] = useState<languageType>("eng"); // kor, eng

  const index = backgrounds.indexOf(background);
  const highlightColor = highlights[index];

  const isEng = language === "eng";
  return (
    <ThemeContext.Provider
      value={{
        background,
        setBackground,
        language,
        setLanguage,
        highlightColor,
        isEng,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeContextProvider };
