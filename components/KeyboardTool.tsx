import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";

import { KeyboardAlignData } from "../datas/keyboardTools";
import { theme } from "../styles/theme";
import getNextAlign from "../helper/getNextAlign";
import getDates from "../helper/getDates";
import HightlightModal from "./HighlightModal";
import ImagePickerComp from "./ImagePicker";

interface KeyboardToolProps {
  alignment: KeyboardAlignData;
  setAlignment: (tool: KeyboardAlignData) => void;
  content: string;
  setContent: (content: string) => void;
  highlight: string;
  setHighlight: (highlight: string) => void;
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
    setImg,
  } = props;

  const { hour, minute, ampm } = getDates(new Date());

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.keyboardTool}>
      <ImagePickerComp setImg={setImg} />
      <HightlightModal
        highlight={highlight}
        onPress={(tempColor) => setHighlight(tempColor)}
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
        color={theme.colors.background}
      />
      {(content === "" || !content) && (
        <IconButton
          icon={alignment.icon}
          onPress={() => setAlignment(getNextAlign(alignment))}
          color={theme.colors.background}
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
