import { View, StyleSheet, Text, Image, Button } from "react-native";
import LoadingIndicator from "./LoadingIndicator";
import EmptyPlaceholder from "./EmptyPlaceholder";
import { FullDataType } from "../api/getAllDatas";
import { convertMonth } from "../helper/getDates";
import { Dispatch, ReactNode, SetStateAction, useContext } from "react";
import { SvgXml } from "react-native-svg";
import { theme } from "../styles/theme";
import { MaterialIcons } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import FontContext from "../contexts/FontContext";

interface HomeContentProps {
  isLoading: boolean;
  datas: FullDataType[];
  currentDate: { year: number; month: number };
  setCurrentDate: Dispatch<SetStateAction<{ year: number; month: number }>>;
  children: ReactNode;
}

const HomeContent = (props: HomeContentProps) => {
  const { isLoading, datas, currentDate, setCurrentDate, children } = props;
  const { fontStyle, fontSizePx } = useContext(FontContext);

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
    <View style={styles.root}>
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
              <Text style={{ fontSize: fontSizePx, fontFamily: fontStyle }}>
                {month.toUpperCase()}
              </Text>
              <Text style={{ fontSize: fontSizePx, fontFamily: fontStyle }}>
                {year}
              </Text>
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
  root: {
    flex: 0.84,
  },
  container: {},
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 50,
  },
  headerDate: {
    display: "flex",
    width: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    gap: 1,
  },
});
