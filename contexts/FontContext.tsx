import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import ThemeContext from "./ThemeContext";
import { theme } from "../styles/theme";

export type fontSizeType = "xs" | "sm" | "md" | "lg" | "xl";

export type FontContextContent = {
  fontSize: fontSizeType;
  setFontSize: (fontSize: fontSizeType) => void;
  fontStyle: string;
  setfontStyle: (fontStyle: string) => void;
  fontSizePx: number;
};

const FontContext = createContext<FontContextContent>({
  fontSize: "md",
  setFontSize: (fontSize) => undefined,
  fontStyle: "",
  setfontStyle: (fontStyle) => undefined,
  fontSizePx: 14,
});

const fontSizeList = Object.values(theme.typography);

interface FontContextProps {
  children: ReactNode;
}

function FontContextProvider(props: FontContextProps) {
  const { children } = props;
  const { isEng } = useContext(ThemeContext);
  const [fontSize, setFontSize] = useState<fontSizeType>("md"); // xs, sm, md, lg, xl
  const [fontStyle, setfontStyle] = useState("");

  const fontSizePx = theme.typography[fontSize];

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
        fontSizePx,
      }}>
      {children}
    </FontContext.Provider>
  );
}

export default FontContext;
export { FontContextProvider };
