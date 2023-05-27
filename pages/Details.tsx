import React, { useContext } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";

import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";
import { theme } from "../styles/theme";
import { RootStackParamList } from "../datas/rootType";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import MoodDetails from "../components/MoodDetails";

const Details = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Details">) => {
  const insets = useSafeAreaInsets();
  const { moodData } = route.params;

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);
  const { fontSizePx, fontStyle } = useContext(FontContext);

  const viewStr = view === "HomeCalendar" ? "HomeCalendar" : "HomeList";

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).container,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={theme.colors.lightBlack}
          />
        }
        firstPress={() => {
          navigation.navigate(viewStr);
        }}
      />
      <ScrollView style={styles(background).content}>
        <MoodDetails moodData={moodData} />
      </ScrollView>
    </View>
  );
};

export default Details;

const styles = (background: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
    },
    content: {
      flex: 0.94,
    },
  });
