import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton } from "@react-native-material/core";
import { Feather } from "@expo/vector-icons";
import { theme } from "../styles/theme";

const insets = useSafeAreaInsets();

const Home = () => {
  return (
    <View style={styles.home}>
      <View style={styles.header}>
        <IconButton icon={<Feather name="search" size={24} color="black" />} />
        <IconButton
          icon={<Feather name="calendar" size={24} color="black" />}
        />
      </View>
      <View></View>
      <View></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
    paddingTop: insets.top,
    paddingBottom: insets.bottom,
  },
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
