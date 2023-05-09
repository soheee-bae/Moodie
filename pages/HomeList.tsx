import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton } from "@react-native-material/core";
import { Feather, Ionicons, AntDesign } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";
import ViewContext from "../contexts/ViewContext";

interface HomeListProps {
  navigation: any;
}

const HomeList = (props: HomeListProps) => {
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
        lastIcon={<Feather name="calendar" size={24} color="black" />}
        firstPress={() => navigation.navigate("Search")}
        lastPress={() => {
          setView("HomeCalendar");
          navigation.navigate("HomeCalendar");
        }}
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

export default HomeList;

const styles = StyleSheet.create({
  home: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
