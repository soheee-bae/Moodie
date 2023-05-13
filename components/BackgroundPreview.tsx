import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";
import HighlightIcon from "./HighlightIcon";

interface BackgroundPreviewProps {}

const mood = require("../assets/moods/happy.png");

const BackgroundPreview = (props: BackgroundPreviewProps) => {
  //   const {  } = props;
  const { isEng, highlightColor } = useContext(ThemeContext);

  return (
    <View style={styles.backgroundPreview}>
      <View style={styles.preview}>
        <View style={styles.date}>
          <Text style={styles.dateNum}>15</Text>
        </View>
        <View style={styles.img}>
          <Image source={mood} style={styles.mood} />
        </View>
        <View style={styles.text}>
          <Text>{isEng ? "Happy!" : "행복해!"}</Text>
          <HighlightIcon color={highlightColor} width={125} height={25} />
        </View>
      </View>
    </View>
  );
};

export default BackgroundPreview;

const styles = StyleSheet.create({
  backgroundPreview: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  preview: {
    borderWidth: 1,
    borderColor: theme.colors.lightBlack,
    aspectRatio: 1 / 1,
    width: "70%",
    borderRadius: 8,
  },
  date: {
    flex: 1,
  },
  dateNum: {
    padding: 15,
  },
  img: {
    flex: 3,
    alignItems: "center",
  },
  mood: {
    width: "40%",
    height: "auto",
    aspectRatio: 1 / 1,
  },
  text: {
    flex: 2,
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
  },
});
