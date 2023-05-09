import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";
import ViewContext from "../contexts/ViewContext";

interface HomeCalendarProps {
  navigation: any;
}

const HomeCalendar = (props: HomeCalendarProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { setView } = useContext(ViewContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles.home,
      ]}>
      <BasicNav
        firstIcon={<Feather name="search" size={24} color="black" />}
        firstPress={() => navigation.navigate("Search")}
        lastPress={() => {
          setView("HomeList");
          navigation.navigate("HomeList");
        }}
        lastIcon={
          <MaterialCommunityIcons
            name="cards-outline"
            size={24}
            color="black"
          />
        }
      />
      <View></View>
      <BasicNav
        firstIcon={<Ionicons name="settings-outline" size={24} color="black" />}
        firstPress={() => navigation.navigate("Settings")}
        content={<AddButton onPress={() => navigation.navigate("AddCover")} />}
      />
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
