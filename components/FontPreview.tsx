import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";
import HighlightIcon from "./HighlightIcon";

interface FontPreviewProps {}

const FontPreview = (props: FontPreviewProps) => {
  //   const {  } = props;
  const { isEng, highlightColor } = useContext(ThemeContext);

  const contentText = isEng
    ? "I spend my day learning new things which makes me very feel more empowered."
    : "오늘은 온전히 나를 위한 시간을 보냈다! 너무나도 행복했던 하루";
  return (
    <View style={styles.fontPreview}>
      <View style={styles.preview}>
        <View style={styles.date}>
          <Text style={styles.dateNum}>15</Text>
        </View>
        <View style={styles.text}>
          <Text>{isEng ? "Happy!" : "행복해!"}</Text>
          <HighlightIcon color={highlightColor} width={125} height={25} />
        </View>
        <Text style={styles.contentText}>{contentText}</Text>
      </View>
    </View>
  );
};

export default FontPreview;

const styles = StyleSheet.create({
  fontPreview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    borderWidth: 1,
    borderColor: theme.colors.lightBlack,
    aspectRatio: 2 / 1,
    width: "90%",
    borderRadius: 8,
  },
  date: {
    flex: 1.5,
  },
  dateNum: {
    padding: 15,
  },
  text: {
    flex: 1.2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  contentText: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    lineHeight: 20,
    justifyContent: "flex-start",
    alignItems: "center",
    textAlign: "center",
    paddingHorizontal: 60,
  },
});
