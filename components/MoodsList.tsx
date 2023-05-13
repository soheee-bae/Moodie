import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";

const Moods = [
  {
    label: "stressed",
    file: require("../assets/moods/stressed.png"),
  },
  {
    label: "ecstatic",
    file: require("../assets/moods/ecstatic.png"),
  },
  {
    label: "excited",
    file: require("../assets/moods/excited.png"),
  },
  {
    label: "happy",
    file: require("../assets/moods/happy.png"),
  },
  {
    label: "calm",
    file: require("../assets/moods/calm.png"),
  },
  {
    label: "bored",
    file: require("../assets/moods/bored.png"),
  },
  {
    label: "worried",
    file: require("../assets/moods/worried.png"),
  },
  {
    label: "tired",
    file: require("../assets/moods/tired.png"),
  },
  {
    label: "sad",
    file: require("../assets/moods/sad.png"),
  },
];

interface MoodsListProps {
  navigation: any;
}
const MoodsList = (props: MoodsListProps) => {
  const { navigation } = props;

  return (
    <View style={styles.moodList}>
      {Moods.map((mood) => (
        <TouchableWithoutFeedback
          onPress={(mood) =>
            navigation.navigate("Add", {
              mood: mood,
            })
          }>
          <Image
            source={mood.file}
            alt={mood.label}
            id={mood.label}
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
