import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { theme } from "../styles/theme";
import BasicTopnav from "../components/BasicTopNav";
import { useNavigation } from "@react-navigation/core";

interface HomeListProps {
  navigation: any;
}

const HomeList = (props: HomeListProps) => {
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
        lastIcon={<Feather name="calendar" size={24} color="black" />}
        firstPress={() => navigation.navigate("Settings")}
        lastPress={() => navigation.navigate("HomeCalendar")}
      />
      <View></View>
      <View></View>
    </View>
  );
};

export default HomeList;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
