import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Image, View, Text } from "react-native";
import { FullDataType, getAllDatas } from "../api/getAllDatas";
import { Moods } from "../datas/moods";
import { getSortedDatasbyDate } from "../helper/getSortedDatasbyDate";
import { getDaysInMonth } from "../helper/getDaysInMonth";

interface CalendarProps {
  datas: FullDataType[];
}

const Calendar = (props: CalendarProps) => {
  const { datas } = props;

  console.log(datas);
  return (
    <ScrollView style={styles.container}>
      {datas.map((data: any) => {
          const info = data.data;
          const dates = getDaysInMonth(data.newDate.)
        return (
          <View style={styles.content}>
            <Text>{data.newDate}</Text>
            <View style={styles.innerContent}>
              {info.map((dataItem: any) => {
                return (
                  <Image
                    source={Moods[dataItem.mood]?.file}
                    style={styles.mood}
                  />
                );
              })}
            </View>
          </View>
        );
      })}
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
  content: {
    flex: 1,
    borderWidth: 1,
  },
  innerContent: {
    flex: 1,
  },
  mood: {
    borderWidth: 2,
    height: 40,
    width: 40,
  },
});
