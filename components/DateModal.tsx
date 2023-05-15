import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import ModalComp from "./Modal";
import getDates from "../helper/getDates";

interface DateModalProps {
  onPress: (tempDate: Date) => void;
  date: Date;
}

const DateModal = (props: DateModalProps) => {
  const { onPress, date } = props;
  const { year, month, dates } = getDates(date);
  const [tempDate, setTempDate] = useState(new Date());

  const content = (
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

  const trigger = (
    <>
      <Text>
        {month} {year}
      </Text>
      <Text>{dates}</Text>
    </>
  );

  return (
    <ModalComp
      onPress={() => onPress(tempDate)}
      content={content}
      trigger={trigger}
    />
  );
};

export default DateModal;

const styles = StyleSheet.create({
  content: {},
});
