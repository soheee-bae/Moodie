import { ReactNode, createContext, useState } from "react";
import { theme } from "../styles/theme";

export type languageType = "kor" | "eng";

export type ThemeContextContent = {
  background: string;
  setBackground: (background: string) => void;
  language: languageType;
  setLanguage: (language: languageType) => void;
  isEng: boolean;
};

const ThemeContext = createContext<ThemeContextContent>({
  background: "",
  setBackground: (background: string) => undefined,
  language: "eng",
  setLanguage: (language: languageType) => undefined,
  isEng: true,
});

interface ThemeContextProps {
  children: ReactNode;
}

function ThemeContextProvider(props: ThemeContextProps) {
  const { children } = props;
  const [background, setBackground] = useState(theme.background.white); //
  const [language, setLanguage] = useState<languageType>("eng"); // kor, eng

  const isEng = language === "eng";
  return (
    <ThemeContext.Provider
      value={{
        background,
        setBackground,
        language,
        setLanguage,
        isEng,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeContextProvider };
