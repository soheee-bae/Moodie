import React from "react";
import { KeyboardAvoidingView, StyleSheet } from "react-native";
import {
  KeyboardAlignData,
  KeyboardToolData,
  keyboardTools,
} from "../datas/keyboardTools";
import { IconButton } from "@react-native-material/core";
import { theme } from "../styles/theme";
import getNextAlign from "../helper/getNextAlign";
import getDates from "../helper/getDates";
import HightlightModal from "./HighlightModal";

interface KeyboardToolProps {
  alignment: KeyboardAlignData;
  setAlignment: (tool: KeyboardAlignData) => void;
  content: string;
  setContent: (content: string) => void;
  setHighlight: (highlight: string) => void;
}
const KeyboardTool = (props: KeyboardToolProps) => {
  const { alignment, setAlignment, content, setContent, setHighlight } = props;

  const { hour, minute, ampm } = getDates(new Date());

  const onPress = (tool: KeyboardToolData) => {
    switch (tool.id) {
      case "image":
        break;
      case "clock":
        setContent(`${content} ${hour}:${minute} ${ampm}`);
        break;
    }
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={{ borderWidth: 1 }}>
      {keyboardTools.map((tool) => (
        <IconButton
          icon={tool.icon}
          onPress={() => onPress(tool)}
          color={theme.colors.background}
        />
      ))}
      <HightlightModal onPress={(tempColor) => setHighlight(tempColor)} />
      <IconButton
        icon={alignment.icon}
        onPress={() => setAlignment(getNextAlign(alignment))}
        color={theme.colors.background}
      />
    </KeyboardAvoidingView>
  );
};

export default KeyboardTool;

const styles = StyleSheet.create({
  KeyboardTool: {},
});
