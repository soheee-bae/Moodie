import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import ThemeContext from "../contexts/ThemeContext";
import getDates from "../helper/getDates";
import getNextMood from "../helper/getNextMood";
import { MoodsData } from "../datas/moods";
import { KeyboardAlignData } from "../datas/keyboardTools";

import ModalComp from "./Modal";
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
    highlight,
  } = props;
  const { isEng } = useContext(ThemeContext);

  return (
    <View>
      <DateModal onPress={(tempDate) => setDate(tempDate)} date={date} />
      <Pressable
        onPress={() => {
          const nextMood = getNextMood(mood);
          setMood(nextMood);
          setTitle(isEng ? nextMood.engLabel : nextMood.korLabel);
        }}>
        <Image source={mood.file} style={styles.mood} />
      </Pressable>
      <TextInput
        editable
        style={styles.title}
        onChangeText={setTitle}
        value={title}
      />
      <HighlightIcon color={highlight} width={125} height={25} />

      <TextInput
        editable
        multiline
        style={[
          styles.content,
          //   {
          //     alignItems: alignment.alignItem,
          //     textAlign: alignment.textAlign,
          //   },
        ]}
        onChangeText={setContent}
        value={content}
      />
    </View>
  );
};

export default MoodEditableCard;

const styles = StyleSheet.create({
  mood: {
    width: 60,
    height: 60,
  },
  title: {},
  content: {
    display: "flex",
    justifyContent: "center",
  },
});
