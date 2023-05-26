import React, { useEffect, useState } from "react";
import { StyleSheet, Image, View, Text } from "react-native";
import { FullDataType } from "../api/getAllDatas";
import { Moods } from "../datas/moods";
import { getDaysInMonth } from "../helper/getDaysInMonth";
import { getUpdatedMoodList } from "../helper/getUpdatedMoodList";
import { DataType } from "../hooks/uploadData";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  SlideInRight,
} from "react-native-reanimated";

interface CalendarProps {
  currentData: FullDataType | null;
  currentDate: { year: number; month: number };
}

const Calendar = (props: CalendarProps) => {
  const { currentData, currentDate } = props;
  const dates = getDaysInMonth(currentDate.year, currentDate.month + 1);
  const newArr = new Array(dates).fill(null);
  const [updatedData, setUpdatedData] = useState<(DataType | null)[]>(newArr);

  async function getUpdatedData() {
    const updatedData = currentData
      ? await getUpdatedMoodList(currentData, currentDate)
      : newArr;
    setUpdatedData(updatedData);
  }

  useEffect(() => {
    getUpdatedData();
  }, [currentDate, currentData]);

  return (
    <Animated.View entering={SlideInRight} style={styles.container}>
      {updatedData.map((data, index) => (
        <View style={styles.content}>
          <Text style={styles.num}>{index + 1}</Text>
          {data ? (
            <Image source={Moods[data?.mood]?.file} style={styles.mood} />
          ) : (
            <View style={styles.emptyMood}></View>
          )}
        </View>
      ))}
    </Animated.View>
  );
};

export default Calendar;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    width: "100%",
  },
  content: {
    paddingHorizontal: 5,
    paddingVertical: 10,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 13,
  },
  mood: {
    width: 40,
    height: 40,
    aspectRatio: 1 / 1,
  },
  emptyMood: {
    width: 40,
    height: 40,
    aspectRatio: 1 / 1,
  },
  num: {
    fontFamily: "Inder_400Regular",
  },
});
