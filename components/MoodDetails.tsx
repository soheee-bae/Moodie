import React, { useContext } from "react";
import { StyleSheet, Image, Text, ScrollView, View } from "react-native";

import { Moods } from "../datas/moods";
import HighlightIcon from "./HighlightIcon";
import FontContext from "../contexts/FontContext";
import { theme } from "../styles/theme";
import { DataType } from "../hooks/uploadData";
import getDates from "../helper/getDates";

interface MoodDetailsProps {
  moodData: DataType;
}

const MoodDetails = (props: MoodDetailsProps) => {
  const { moodData } = props;
  const { fontSizePx, fontStyle } = useContext(FontContext);

  const textAlign = moodData.alignment;
  const { year, month, dates } = getDates(new Date(moodData.date));

  return (
    <View style={styles(textAlign, fontStyle, fontSizePx).container}>
      <View style={styles(textAlign, fontStyle, fontSizePx).dateContent}>
        <Text style={styles(textAlign, fontStyle, fontSizePx).monthYear}>
          {month} {year}
        </Text>
        <Text style={styles(textAlign, fontStyle, fontSizePx).date}>
          {dates}
        </Text>
      </View>
      <View style={styles(textAlign, fontStyle, fontSizePx).header}>
        <Image
          source={Moods[moodData.mood || 1]?.file}
          style={styles(textAlign, fontStyle, fontSizePx).mood}
        />
        <View style={styles(textAlign, fontStyle, fontSizePx).headerContent}>
          <Text style={styles(textAlign, fontStyle, fontSizePx).title}>
            {moodData.title}
          </Text>
          <HighlightIcon
            color={`#${moodData.highlight}`}
            width={125}
            height={25}
          />
        </View>
      </View>
      <View style={styles(textAlign, fontStyle, fontSizePx).image}>
        {moodData.fileUrl && (
          <Image
            source={{ uri: moodData.fileUrl }}
            style={{ width: "100%", aspectRatio: 1 / 1 }}
          />
        )}
      </View>
      <Text style={styles(textAlign, fontStyle, fontSizePx).content}>
        {moodData.content}
      </Text>
    </View>
  );
};

export default MoodDetails;

const styles = (
  textAlign: "center" | "auto" | "left" | "right" | "justify" | undefined,
  fontStyle: string,
  fontSizePx: number
) =>
  StyleSheet.create({
    container: {
      paddingHorizontal: 28,
      paddingVertical: 10,
    },
    mood: {
      width: 80,
      height: 80,
    },
    header: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
      gap: 20,
      paddingVertical: 20,
    },
    headerContent: {
      display: "flex",
      width: "100%",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: fontStyle,
      fontSize: theme.typography.xl,
    },
    content: {
      width: "100%",
      textAlign: textAlign,
      lineHeight: 25,
      fontSize: fontSizePx,
      fontFamily: fontStyle,
    },
    image: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      paddingBottom: 20,
    },
    dateContent: {
      display: "flex",
      flexDirection: "column",
      gap: 4,
    },
    monthYear: {
      fontSize: 15,
      fontWeight: "400",
      fontFamily: "Inder_400Regular",
    },
    date: {
      fontSize: 23,
      fontWeight: "bold",
      fontFamily: "Inder_400Regular",
    },
  });
