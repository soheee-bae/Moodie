import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import { FullDataType, getAllDatas } from "../api/getAllDatas";
import { Moods } from "../datas/moods";
import { getSortedDatasbyDate } from "../helper/getSortedDatasbyDate";
import { getDaysInMonth } from "../helper/getDaysInMonth";
import { getUpdatedMoodList } from "../helper/getUpdatedMoodList";
import { update } from "firebase/database";
import { DataType } from "../hooks/uploadData";

interface CalendarProps {
  datas: FullDataType[];
  currentData: FullDataType | null;
  currentDate: { year: number; month: number };
}

const Calendar = (props: CalendarProps) => {
  const { datas, currentData, currentDate } = props;
  const [updatedData, setUpdatedData] = useState<(DataType | null)[]>([]);

  async function getUpdatedData() {
    const updatedData = currentData
      ? await getUpdatedMoodList(currentData, currentDate)
      : [];
    if (updatedData) setUpdatedData(updatedData);
  }

  useEffect(() => {
    getUpdatedData();
  }, [currentDate]);

  return <ScrollView style={styles.container}></ScrollView>;
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    borderWidth: 2,
    width: "100%",
  },
});
