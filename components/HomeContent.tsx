import { View, StyleSheet, Text, Image, Button } from "react-native";
import LoadingIndicator from "./LoadingIndicator";
import EmptyPlaceholder from "./EmptyPlaceholder";
import { FullDataType } from "../api/getAllDatas";
import { convertMonth } from "../helper/getDates";
import { Dispatch, ReactNode, SetStateAction } from "react";
import { SvgXml } from "react-native-svg";
import { theme } from "../styles/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";

interface HomeContentProps {
  isLoading: boolean;
  datas: FullDataType[];
  currentDate: { year: number; month: number };
  setCurrentDate: Dispatch<SetStateAction<{ year: number; month: number }>>;
  children: ReactNode;
}

const HomeContent = (props: HomeContentProps) => {
  const { isLoading, datas, currentDate, setCurrentDate, children } = props;

  const month = convertMonth(currentDate.month);
  const year = currentDate.year;

  const prevMonth = () => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month === 0 ? 11 : currentDate.month - 1,
    });
  };
  const nextMonth = () => {
    setCurrentDate({
      ...currentDate,
      month: currentDate.month === 11 ? 0 : currentDate.month + 1,
    });
  };

  return (
    <View>
      {isLoading ? (
        <LoadingIndicator />
      ) : !isLoading && datas?.length === 0 ? (
        <EmptyPlaceholder />
      ) : (
        <View style={styles.container}>
          <View style={styles.header}>
            <IconButton
              icon={
                <MaterialIcons
                  name="keyboard-arrow-left"
                  size={24}
                  color={theme.colors.lightBlack}
                />
              }
              onPress={prevMonth}
              color={theme.colors.background}
            />
            <View style={styles.headerDate}>
              <Text style={styles.date}>{month.toUpperCase()}</Text>
              <Text style={styles.date}> {year}</Text>
            </View>
            <IconButton
              icon={
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color={theme.colors.lightBlack}
                />
              }
              onPress={nextMonth}
              color={theme.colors.background}
            />
          </View>
          {children}
        </View>
      )}
    </View>
  );
};

export default HomeContent;

const styles = StyleSheet.create({
  container: {
    height: "auto",
    maxHeight: "86%",
    borderWidth: 2,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
    paddingHorizontal: 20,
    marginVertical: 20,
  },
  headerDate: {
    display: "flex",
    width: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 5,
  },
  date: {
    fontFamily: "Inder_400Regular",
    fontSize: theme.typography.lg,
  },
});
