import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, Ionicons } from "@expo/vector-icons";

import HomeContent from "../components/HomeContent";
import DataContext from "../contexts/DataContext";
import CardsLists from "../components/CardsLists";
import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";

import { theme } from "../styles/theme";

interface HomeListProps {
  navigation: any;
}

const HomeList = (props: HomeListProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { setView } = useContext(ViewContext);
  const { background } = useContext(ThemeContext);
  const { datas, currentData, isLoading, currentDate, setCurrentDate } =
    useContext(DataContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).home,
      ]}>
      <BasicNav
        firstIcon={
          <Feather name="search" size={24} color={theme.colors.lightBlack} />
        }
        lastIcon={
          <Feather name="calendar" size={24} color={theme.colors.lightBlack} />
        }
        firstPress={() => navigation.navigate("Search")}
        lastPress={() => {
          setView("HomeCalendar");
          navigation.navigate("HomeCalendar");
        }}
      />
      <HomeContent
        isLoading={isLoading}
        datas={datas || []}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}>
        <CardsLists currentData={currentData} navigation={navigation} />
      </HomeContent>
      <BasicNav
        firstIcon={
          <Ionicons
            name="settings-outline"
            size={24}
            color={theme.colors.lightBlack}
          />
        }
        firstPress={() => navigation.navigate("Settings")}
        content={<AddButton onPress={() => navigation.navigate("AddCover")} />}
      />
    </View>
  );
};

export default HomeList;

const styles = (background: string) =>
  StyleSheet.create({
    home: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: background,
    },
  });
