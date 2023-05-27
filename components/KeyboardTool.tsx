import React, { useContext } from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";

import { KeyboardAlignData } from "../datas/keyboardTools";
import { theme } from "../styles/theme";
import getNextAlign from "../helper/getNextAlign";
import getDates from "../helper/getDates";
import HightlightModal from "./HighlightModal";
import ImagePickerComp from "./ImagePicker";
import ThemeContext from "../contexts/ThemeContext";

interface KeyboardToolProps {
  alignment: KeyboardAlignData;
  setAlignment: (tool: KeyboardAlignData) => void;
  content: string;
  setContent: (content: string) => void;
  highlight: string;
  setHighlight: (highlight: string) => void;
  img: string;
  setImg: (img: string) => void;
}
const KeyboardTool = (props: KeyboardToolProps) => {
  const {
    alignment,
    setAlignment,
    content,
    setContent,
    highlight,
    setHighlight,
    img,
    setImg,
  } = props;

  const { hour, minute, ampm } = getDates(new Date());
  const { background } = useContext(ThemeContext);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.keyboardTool}>
      <ImagePickerComp img={img} setImg={setImg} />
      <HightlightModal
        highlight={highlight}
        onPress={(tempColor) => setHighlight(tempColor.replace("#", ""))}
      />
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color="black"
          />
        }
        onPress={() => setContent(`${content} ${hour}:${minute} ${ampm}`)}
        color={background}
      />
      {(content === "" || !content) && (
        <IconButton
          icon={alignment.icon}
          onPress={() => setAlignment(getNextAlign(alignment))}
          color={background}
        />
      )}
    </KeyboardAvoidingView>
  );
};

export default KeyboardTool;

const styles = StyleSheet.create({
  keyboardTool: {
    borderColor: theme.colors.lighterBlack,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingHorizontal: 10,
  },
});
