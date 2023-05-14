import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { Entypo } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";
import ModalComp from "./Modal";

interface CloseModalProps {
  onPress: () => void;
}

const CloseModal = (props: CloseModalProps) => {
  const { onPress } = props;

  const { isEng } = useContext(ThemeContext);
  const { fontStyle, fontSizePx } = useContext(FontContext);

  const text1 = isEng
    ? "Your changes won't be saved."
    : "작성한 내용이 저장되지 않아요.";
  const text2 = isEng
    ? "Do you still want to leave the page?"
    : "화면을 닫을까요?";

  const content = (
    <View style={styles.textContent}>
      <Text
        style={[{ fontFamily: fontStyle, fontSize: fontSizePx }, styles.text]}>
        {text1}
      </Text>
      <Text
        style={[{ fontFamily: fontStyle, fontSize: fontSizePx }, styles.text]}>
        {text2}
      </Text>
    </View>
  );

  const trigger = (
    <Entypo name="cross" size={20} color={theme.colors.lightBlack} />
  );

  return <ModalComp onPress={onPress} content={content} trigger={trigger} />;
};

export default CloseModal;

const styles = StyleSheet.create({
  textContent: {
    flexDirection: "column",
    justifyContent: "center",
    alignContent: "center",
  },
  text: {
    textAlign: "center",
    lineHeight: 25,
  },
  buttonContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignContent: "center",
  },
});
