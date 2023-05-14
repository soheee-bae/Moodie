import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  GestureResponderEvent,
} from "react-native";
import { Moods } from "../datas/moods";

interface MoodsListProps {
  navigation: any;
}
const MoodsList = (props: MoodsListProps) => {
  const { navigation } = props;

  return (
    <View style={styles.moodList}>
      {Moods.map((mood) => (
        <TouchableWithoutFeedback
          id={mood.engLabel}
          onPress={(event: GestureResponderEvent) => {
            event.persist();
            navigation.navigate("AddMood", {
              initialDate: new Date(),
              initialMood: mood,
            });
          }}>
          <Image
            source={mood.file}
            alt={mood.engLabel}
            id={mood.engLabel}
            style={styles.mood}
          />
        </TouchableWithoutFeedback>
      ))}
    </View>
  );
};

export default MoodsList;

const styles = StyleSheet.create({
  moodList: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "center",
    justifyContent: "center",
    gap: 30,
    padding: 50,
  },
  mood: {
    width: 55,
    height: 55,
  },
});
