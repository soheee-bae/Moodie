import { ReactNode, createContext, useState } from "react";

type fontSizeType = "xs" | "sm" | "md" | "lg" | "xl";
type lagnuageType = "ko" | "el";

export type ThemeContextContent = {
  fontSize: fontSizeType;
  setFontSize: (fontSize: fontSizeType) => void;
  fontStyle: string;
  setfontStyle: (fontStyle: string) => void;
  background: string;
  setBackground: (background: string) => void;
  language: lagnuageType;
  setLanguage: (language: lagnuageType) => void;
};

const ThemeContext = createContext<ThemeContextContent>({
  fontSize: "md",
  setFontSize: (fontSize: fontSizeType) => undefined,
  fontStyle: "",
  setfontStyle: (fontStyle: string) => undefined,
  background: "",
  setBackground: (background: string) => undefined,
  language: "el",
  setLanguage: (language: lagnuageType) => undefined,
});

interface ThemeContextProps {
  children: ReactNode;
}

function ThemeContextProvider(props: ThemeContextProps) {
  const { children } = props;
  const [fontSize, setFontSize] = useState<fontSizeType>("md"); // xs, sm, md, lg, xl
  const [fontStyle, setfontStyle] = useState("md"); //
  const [background, setBackground] = useState("md"); //
  const [language, setLanguage] = useState<lagnuageType>("el"); // ko, el

  return (
    <ThemeContext.Provider
      value={{
        fontSize,
        setFontSize,
        fontStyle,
        setfontStyle,
        background,
        setBackground,
        language,
        setLanguage,
      }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContext;
export { ThemeContextProvider };
