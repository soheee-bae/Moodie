import React, { useContext, useState } from "react";
import { TextInput } from "react-native-paper";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import ThemeContext from "../contexts/ThemeContext";
import getDates from "../helper/getDates";
import getNextMood from "../helper/getNextMood";
import { MoodsData } from "../datas/moods";
import ModalComp from "./Modal";

interface MoodEditableCardProps {
  title: string;
  setTitle: (title: string) => void;
  content: string;
  setContent: (content: string) => void;
  date: Date;
  setDate: (date: Date) => void;
  mood: MoodsData;
  setMood: (mood: MoodsData) => void;
  textAlign: any;
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
    textAlign,
  } = props;
  const { isEng } = useContext(ThemeContext);
  const [tempDate, setTempDate] = useState(new Date());

  const alignment =
    textAlign === "flex-start"
      ? "left"
      : textAlign === "flex-end"
      ? "right"
      : "center";

  const { year, month, dates } = getDates(date);

  const dateModalContent = (
    <DateTimePicker
      testID="dateTimePicker"
      value={date}
      mode="date"
      display="spinner"
      onChange={(_event, selectedDate) => {
        setTempDate(selectedDate || new Date());
      }}
    />
  );

  const dateModalTrigger = (
    <>
      <Text>
        {month} {year}
      </Text>
      <Text>{dates}</Text>
    </>
  );

  return (
    <View>
      <ModalComp
        onPress={() => setDate(tempDate)}
        content={dateModalContent}
        trigger={dateModalTrigger}
      />
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
      <TextInput
        editable
        multiline
        style={[
          styles.content,
          {
            alignItems: textAlign,
            textAlign: alignment,
          },
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
