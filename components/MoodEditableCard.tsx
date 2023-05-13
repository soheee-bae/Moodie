import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { MoodsData } from "./MoodsList";
import { RouteProp } from "@react-navigation/native";

interface MoodCard {
  monthYear: string;
  date: number;
  mood: MoodsData;
  isNew: boolean;
}

interface MoodEditableCardProps {
  route: RouteProp<{ params: MoodCard }, "params">;
  navigation: any;
}

const MoodEditableCard = (props: MoodEditableCardProps) => {
  const { route, navigation } = props;
  const { monthYear, date, mood, isNew } = route.params;

  return <View></View>;
};

export default MoodEditableCard;

const styles = StyleSheet.create({});
