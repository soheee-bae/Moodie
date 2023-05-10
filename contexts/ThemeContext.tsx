import { ReactNode, createContext, useState } from "react";
type lagnuageType = "ko" | "el";

export type ThemeContextContent = {
  background: string;
  setBackground: (background: string) => void;
  language: lagnuageType;
  setLanguage: (language: lagnuageType) => void;
};

const ThemeContext = createContext<ThemeContextContent>({
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
  const [background, setBackground] = useState("md"); //
  const [language, setLanguage] = useState<lagnuageType>("el"); // ko, el

  return (
    <ThemeContext.Provider
      value={{
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
