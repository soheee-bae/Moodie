import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import BasicTopnav from "../components/BasicTopNav";

interface HomeCalendarProps {
  navigation: any;
}

const HomeCalendar = (props: HomeCalendarProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles.home,
      ]}>
      <BasicTopnav
        firstIcon={<Feather name="search" size={24} color="black" />}
        firstPress={() => navigation.navigate("Settings")}
        lastPress={() => navigation.navigate("HomeList")}
        lastIcon={
          <MaterialCommunityIcons
            name="cards-outline"
            size={24}
            color="black"
          />
        }
      />
      <View></View>
      <View></View>
    </View>
  );
};

export default HomeCalendar;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
