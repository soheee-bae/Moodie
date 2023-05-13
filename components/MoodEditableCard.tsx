import React, { useContext } from "react";
import { StyleSheet, View, Text } from "react-native";
import { MoodsData } from "./MoodsList";
import { RouteProp } from "@react-navigation/native";

interface MoodEditableCardProps {
  date: number;
  day: number;
  //   mood: MoodsData;
  isNew: boolean;
}

const MoodEditableCard = (props: MoodEditableCardProps) => {
  const { date, day, isNew } = props;

  return (
    <View>
      <Text>{date}</Text>
      <Text>{day}</Text>
      <Text></Text>
    </View>
  );
};

export default MoodEditableCard;

const styles = StyleSheet.create({});
