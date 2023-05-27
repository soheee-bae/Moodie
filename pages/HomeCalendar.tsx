import React, { useContext, useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Feather, MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";

import { theme } from "../styles/theme";
import Calendar from "../components/Calendar";
import { FullDataType, getAllDatas } from "../api/getAllDatas";
import { getSortedDatasbyDate } from "../helper/getSortedDatasbyDate";
import EmptyPlaceholder from "../components/EmptyPlaceholder";
import LoadingIndicator from "../components/LoadingIndicator";
import { DataType } from "../hooks/uploadData";
import HomeContent from "../components/HomeContent";
import DataContext from "../contexts/DataContext";

interface HomeCalendarProps {
  navigation: any;
}

const HomeCalendar = (props: HomeCalendarProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { setView } = useContext(ViewContext);
  const { background } = useContext(ThemeContext);
  const {
    datas,
    currentData,
    isLoading,
    currentDate,
    setCurrentDate,
  } = useContext(DataContext);

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
        firstPress={() => navigation.navigate("Search")}
        lastPress={() => {
          setView("HomeList");
          navigation.navigate("HomeList");
        }}
        lastIcon={
          <MaterialCommunityIcons
            name="cards-outline"
            size={24}
            color={theme.colors.lightBlack}
          />
        }
      />
      <HomeContent
        isLoading={isLoading}
        datas={datas || []}
        currentDate={currentDate}
        setCurrentDate={setCurrentDate}>
        <Calendar currentData={currentData} currentDate={currentDate} />
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

export default HomeCalendar;

const styles = (background: string) =>
  StyleSheet.create({
    home: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: background,
    },
  });
