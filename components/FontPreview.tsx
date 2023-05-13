import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";

import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";
import HighlightIcon from "./HighlightIcon";

const FontPreview = () => {
  const { isEng, highlightColor } = useContext(ThemeContext);
  const { fontSizePx, fontStyle } = useContext(FontContext);

  const contentText = isEng
    ? "I spend my day learning new things. Meaningful time!"
    : "오늘은 온전히 나를 위한 시간을 보냈다! 너무나도 행복했던 하루";
  return (
    <View style={styles(fontSizePx, fontStyle).fontPreview}>
      <View style={styles(fontSizePx, fontStyle).preview}>
        <View style={styles(fontSizePx, fontStyle).date}>
          <Text style={styles(fontSizePx, fontStyle).dateNum}>15</Text>
        </View>
        <View style={styles(fontSizePx, fontStyle).text}>
          <Text style={styles(fontSizePx, fontStyle).textTitle}>
            {isEng ? "Happy!" : "행복해!"}
          </Text>
          <HighlightIcon color={highlightColor} width={125} height={25} />
        </View>
        <Text style={styles(fontSizePx, fontStyle).contentText}>
          {contentText}
        </Text>
      </View>
    </View>
  );
};

export default FontPreview;

const styles = (fontSizePx: number, fontStyle: string) =>
  StyleSheet.create({
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
      flex: 1,
    },
    dateNum: {
      padding: 15,
      fontSize: theme.typography.xl,
    },
    text: {
      flex: 1.2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
    },
    textTitle: {
      fontSize: fontSizePx,
      fontFamily: fontStyle,
    },
    contentText: {
      flex: 2,
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-start",
      alignItems: "center",
      textAlign: "center",
      paddingHorizontal: 60,
      fontSize: fontSizePx,
      fontFamily: fontStyle,
      lineHeight: 20,
    },
  });
