import React, { useContext } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, Image, Pressable } from "react-native";

import ThemeContext from "../contexts/ThemeContext";
import getNextMood from "../helper/getNextMood";
import { MoodsData } from "../datas/moods";
import { KeyboardAlignData } from "../datas/keyboardTools";

import DateModal from "./DateModal";
import HighlightIcon from "./HighlightIcon";

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

  const textAlign = alignment.textAlign;
  const alignItem = alignment.alignItem;
  return (
    <View>
      <DateModal onPress={(tempDate) => setDate(tempDate)} date={date} />
      <Pressable
        onPress={() => {
          const nextMood = getNextMood(mood);
          setMood(nextMood);
          setTitle(isEng ? nextMood.engLabel : nextMood.korLabel);
        }}>
        <Image source={mood.file} style={styles(textAlign, alignItem).mood} />
      </Pressable>
      <TextInput
        editable
        style={styles(textAlign, alignItem).title}
        onChangeText={setTitle}
        value={title}
      />
      <HighlightIcon color={highlight} width={125} height={25} />
      {img && (
        <Image source={{ uri: img }} style={{ width: "80%", height: "100%" }} />
      )}
      <TextInput
        editable
        multiline
        style={styles(textAlign, alignItem).content}
        onChangeText={setContent}
        value={content}
      />
    </View>
  );
};

export default MoodEditableCard;

const styles = (
  textAlign: "center" | "auto" | "left" | "right" | "justify" | undefined,
  alignItem: any
) =>
  StyleSheet.create({
    mood: {
      width: 60,
      height: 60,
    },
    title: {},
    content: {
      display: "flex",
      flexDirection: "row",
      justifyContent: alignItem,
      textAlign: textAlign,
      alignItems: alignItem,
    },
  });
