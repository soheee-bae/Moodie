import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Entypo } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import MoodEditableCard from "../components/MoodEditableCard";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../datas/rootType";

const AddMood = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "AddMood">) => {
  const { monthYear, date, day, isNew } = route.params;

  const insets = useSafeAreaInsets();

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).addMode,
      ]}>
      <BasicTopnav
        firstIcon={
          <Entypo name="cross" size={20} color={theme.colors.lightBlack} />
        }
        // firstPress={() => navigation.navigate(view)}
        content={monthYear}
        lastIcon={
          <Entypo name="check" size={20} color={theme.colors.lightBlack} />
        }
        //   lastPress={() => {//save }}
      />
      <View>
        <MoodEditableCard date={date} day={day} isNew={isNew} />
      </View>
    </View>
  );
};

export default AddMood;

const styles = (background: string) =>
  StyleSheet.create({
    addMode: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
  });
