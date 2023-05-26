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

interface HomeCalendarProps {
  navigation: any;
}

const HomeCalendar = (props: HomeCalendarProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { setView } = useContext(ViewContext);
  const { background } = useContext(ThemeContext);

  const [datas, setDatas] = useState<FullDataType[]>([]);
  const [currentData, setCurrentData] = useState<FullDataType | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const [currentDate, setCurrentDate] = useState({
    year: new Date().getFullYear(),
    month: new Date().getMonth(), //MAy -> 4
  });

  async function getDatas() {
    const data = (await getAllDatas()) as DataType[];
    const sortedData = await getSortedDatasbyDate(data);

    const currentData = sortedData.find((data: FullDataType) => {
      const year = parseInt(data.newDate.slice(0, 4));
      const month = parseInt(data.newDate.slice(-2));
      return year === currentDate.year && month === currentDate.month + 1;
    });

    setIsLoading(false);
    setCurrentData(currentData);
    setDatas(sortedData);
  }

  useEffect(() => {
    getDatas();
  }, [currentDate]);

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
