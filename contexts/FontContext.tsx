import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ThemeContext from "./ThemeContext";

type fontSizeType = "xs" | "sm" | "md" | "lg" | "xl";

export type FontContextContent = {
  fontSize: fontSizeType;
  setFontSize: (fontSize: fontSizeType) => void;
  fontStyle: string;
  setfontStyle: (fontStyle: string) => void;
};

const FontContext = createContext<FontContextContent>({
  fontSize: "md",
  setFontSize: (fontSize: fontSizeType) => undefined,
  fontStyle: "",
  setfontStyle: (fontStyle: string) => undefined,
});

interface FontContextProps {
  children: ReactNode;
}

function FontContextProvider(props: FontContextProps) {
  const { children } = props;
  const { isEng } = useContext(ThemeContext);
  const [fontSize, setFontSize] = useState<fontSizeType>("md"); // xs, sm, md, lg, xl
  const [fontStyle, setfontStyle] = useState("");

  useEffect(() => {
    const defaultFont = isEng ? "Inter_400Regular" : "NotoSansKR_400Regular";
    setfontStyle(defaultFont);
  }, [isEng]);

  return (
    <FontContext.Provider
      value={{
        fontSize,
        setFontSize,
        fontStyle,
        setfontStyle,
      }}>
      {children}
    </FontContext.Provider>
  );
}

export default FontContext;
export { FontContextProvider };
