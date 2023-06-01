import React, { ReactNode, useContext, useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import ModalComp from "./Modal";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";

interface MonthYearModalProps {
  onPress: (tempDate: { year: number; month: number }) => void;
  date: Date;
  trigger: ReactNode;
}

const MonthYearModal = (props: MonthYearModalProps) => {
  const { onPress, date, trigger } = props;
  const { background } = useContext(ThemeContext);
  const [tempDate, setTempDate] = useState<{ year: number; month: number }>({
    year: date.getFullYear(),
    month: date.getMonth(),
  });

  const prevMonth = () => {
    setTempDate({
      ...tempDate,
      month: tempDate.month === 0 ? 11 : tempDate.month - 1,
    });
  };

  const nextMonth = () => {
    setTempDate({
      ...tempDate,
      month: tempDate.month === 11 ? 0 : tempDate.month + 1,
    });
  };

  const prevYear = () => {
    setTempDate({
      ...tempDate,
      year: tempDate.year - 1,
    });
  };

  const nextYear = () => {
    setTempDate({
      ...tempDate,
      year: tempDate.year + 1,
    });
  };

  const monthYear = [
    {
      title: "Month",
      label: tempDate.month + 1,
      prev: prevMonth,
      next: nextMonth,
    },
    {
      title: "Year",
      label: tempDate.year,
      prev: prevYear,
      next: nextYear,
    },
  ];

  const content = (
    <View style={styles.container}>
      {monthYear.map((date) => (
        <View style={styles.content} key={date.label}>
          <Text>{date.title}</Text>
          <View style={styles.inner}>
            <IconButton
              icon={
                <MaterialIcons
                  name="arrow-left"
                  size={24}
                  color={theme.colors.lightBlack}
                />
              }
              onPress={date.prev}
              color={background}
            />
            <Text>{date.label}</Text>
            <IconButton
              icon={
                <MaterialIcons
                  name="arrow-right"
                  size={24}
                  color={theme.colors.lightBlack}
                />
              }
              onPress={date.next}
              color={background}
            />
          </View>
        </View>
      ))}
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

export default MonthYearModal;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
    alignItems: "center",
    marginBottom: 10,
  },
  content: {
    display: "flex",
    flexDirection: "column",
    gap: 4,
    alignItems: "center",
  },
  inner: {
    display: "flex",
    flexDirection: "row",
    gap: 4,
    alignItems: "center",
    justifyContent: "space-between",
    minWidth: 130,
  },
});
