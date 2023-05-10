import { ReactNode, createContext, useState } from "react";

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
  const [fontSize, setFontSize] = useState<fontSizeType>("md"); // xs, sm, md, lg, xl
  const [fontStyle, setfontStyle] = useState("md"); //

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
