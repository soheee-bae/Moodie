import React, { useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

import ModalComp from "./Modal";
import getDates from "../helper/getDates";
import FontContext from "../contexts/FontContext";

interface DateModalProps {
  onPress: (tempDate: Date) => void;
  date: Date;
}

const DateModal = (props: DateModalProps) => {
  const { onPress, date } = props;
  const { year, month, dates } = getDates(date);
  const [tempDate, setTempDate] = useState(new Date());
  const { fontStyle } = useContext(FontContext);

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
    <View style={styles(fontStyle).content}>
      <Text style={styles(fontStyle).monthYear}>
        {month} {year}
      </Text>
      <Text style={styles(fontStyle).date}>{dates}</Text>
    </View>
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

const styles = (fontStyle: string) =>
  StyleSheet.create({
    content: {
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
