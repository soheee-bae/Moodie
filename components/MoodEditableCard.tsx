import React, { useContext } from "react";
import {
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
  TextInput,
  View,
} from "react-native";

import ThemeContext from "../contexts/ThemeContext";
import getNextMood from "../helper/getNextMood";
import { MoodsData } from "../datas/moods";
import { KeyboardAlignData } from "../datas/keyboardTools";
import { theme } from "../styles/theme";

import DateModal from "./DateModal";
import HighlightIcon from "./HighlightIcon";
import FontContext from "../contexts/FontContext";

interface MoodEditableCardProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  date: Date;
  setDate: (date: Date) => void;
  mood: MoodsData;
  setMood: (mood: MoodsData) => void;
  img: string;
  alignment: KeyboardAlignData;
  highlight: string;
}

const MoodEditableCard = (props: MoodEditableCardProps) => {
  const {
    title,
    setTitle,
    content,
    setContent,
    date,
    setDate,
    mood,
    setMood,
    alignment,
    img,
    highlight,
  } = props;
  const { isEng } = useContext(ThemeContext);
  const { fontStyle, fontSizePx } = useContext(FontContext);

  const textAlign = alignment.textAlign;

  return (
    <ScrollView style={styles(textAlign, fontStyle, fontSizePx).container}>
      <DateModal onPress={(tempDate) => setDate(tempDate)} date={date} />
      <View style={styles(textAlign, fontStyle, fontSizePx).header}>
        <Pressable
          onPress={() => {
            const nextMood = getNextMood(mood);
            setMood(nextMood);
            setTitle(isEng ? nextMood.engLabel : nextMood.korLabel);
          }}>
          <Image
            source={mood.file}
            style={styles(textAlign, fontStyle, fontSizePx).mood}
          />
        </Pressable>
        <View style={styles(textAlign, fontStyle, fontSizePx).headerContent}>
          <TextInput
            style={[
              styles(textAlign, fontStyle, fontSizePx).textInput,
              styles(textAlign, fontStyle, fontSizePx).title,
            ]}
            onChangeText={setTitle}
            value={title}
          />
          <HighlightIcon color={`#${highlight}`} width={125} height={25} />
        </View>
      </View>
      <View style={styles(textAlign, fontStyle, fontSizePx).image}>
        {img && (
          <Image
            source={{ uri: img }}
            style={{ width: "100%", aspectRatio: 1 / 1 }}
          />
        )}
      </View>
      <TextInput
        multiline
        style={[
          styles(textAlign, fontStyle, fontSizePx).textInput,
          styles(textAlign, fontStyle, fontSizePx).content,
        ]}
        onChangeText={setContent}
        value={content}
      />
    </ScrollView>
  );
};

export default MoodEditableCard;

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
    textInput: {
      width: "100%",
      fontSize: theme.typography.xl,
    },
    title: {
      textAlign: "center",
      fontWeight: "bold",
      fontFamily: fontStyle,
    },
    content: {
      width: "100%",
      textAlign: textAlign,
      minHeight: 350,
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
  });
