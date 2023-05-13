import React from "react";
import {
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  ImageSourcePropType,
} from "react-native";
import getDates from "../helper/getDates";

export type MoodsData = {
  engLabel: string;
  korLabel: string;
  file: ImageSourcePropType;
};
const Moods: MoodsData[] = [
  {
    engLabel: "stressed",
    korLabel: "짜증나",
    file: require("../assets/moods/stressed.png"),
  },
  {
    engLabel: "ecstatic",
    korLabel: "기대돼",
    file: require("../assets/moods/ecstatic.png"),
  },
  {
    engLabel: "excited",
    korLabel: "설레",
    file: require("../assets/moods/excited.png"),
  },
  {
    engLabel: "happy",
    korLabel: "행복해",
    file: require("../assets/moods/happy.png"),
  },
  {
    engLabel: "calm",
    korLabel: "평온해",
    file: require("../assets/moods/calm.png"),
  },
  {
    engLabel: "bored",
    korLabel: "심심해",
    file: require("../assets/moods/bored.png"),
  },
  {
    engLabel: "worried",
    korLabel: "걱정돼",
    file: require("../assets/moods/worried.png"),
  },
  {
    engLabel: "tired",
    korLabel: "피곤해",
    file: require("../assets/moods/tired.png"),
  },
  {
    engLabel: "sad",
    korLabel: "슬퍼",
    file: require("../assets/moods/sad.png"),
  },
];

interface MoodsListProps {
  navigation: any;
}
const MoodsList = (props: MoodsListProps) => {
  const { navigation } = props;
  const { year, month, day, date } = getDates(new Date());

  return (
    <View style={styles.moodList}>
      {Moods.map((mood) => (
        <TouchableWithoutFeedback
          onPress={(mood) =>
            navigation.navigate("AddMood", {
              monthYear: `${month} ${year}`,
              date,
              day,
              //   mood,
              isNew: true,
            })
          }>
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
