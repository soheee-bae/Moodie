import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, View } from "react-native";
import { FullDataType, getAllDatas } from "../api/getAllDatas";
import { Moods } from "../datas/moods";
import { getSortedDatasbyDate } from "../helper/getSortedDatasbyDate";

interface CalendarProps {
  datas: FullDataType[];
}

const Calendar = (props: CalendarProps) => {
  const { datas } = props;

  return (
    <ScrollView style={styles.container}>
      {datas.map((data: any) => (
        <View style={styles.content}>
          {/* <Image source={Moods[data[1].mood]?.file} style={styles.mood} /> */}
        </View>
      ))}
    </ScrollView>
  );
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
  content: { flex: 1 / 7 },
  mood: {
    borderWidth: 2,
    height: 40,
    width: 40,
  },
});
