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

interface HomeCalendarProps {
  navigation: any;
}

const HomeCalendar = (props: HomeCalendarProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { setView } = useContext(ViewContext);
  const { background } = useContext(ThemeContext);

  const [datas, setDatas] = useState<FullDataType[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function getDatas() {
    const data = (await getAllDatas()) as FullDataType[];
    const sortedData = await getSortedDatasbyDate(data);
    setIsLoading(false);
    setDatas(sortedData);
  }

  useEffect(() => {
    getDatas();
  }, []);

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
      {isLoading ? (
        <LoadingIndicator />
      ) : !isLoading && datas.length === 0 ? (
        <EmptyPlaceholder />
      ) : (
        <Calendar datas={datas} />
      )}
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
