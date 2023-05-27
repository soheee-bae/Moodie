import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import BackgroundList from "../components/BackgroundList";

import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import CardsItem from "../components/CardsItem";

interface BackgroundSettingProps {
  navigation: any;
}

export type DataType = {
  date: string;
  mood: number;
  title: string;
  content: string;
  alignment: "center" | "left" | "right" | undefined;
  highlight: string;
  name?: string;
  fileUrl?: string;
};

const BackgroundSetting = (props: BackgroundSettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { background, isEng } = useContext(ThemeContext);

  const previewData: DataType = {
    alignment: "left",
    content: isEng
      ? "I spend my day learning new things today which made me feel great that i am spending time wisely. Meaningful time!"
      : "평소에 하고 싶었지만 시간이 없다는, 바쁘다는 핑계로 미뤄왔던 일들을 하며 오늘을 온전히 나를 위해 썼다. 너무나도 행복했던 하루.",
    date: "Thu May 04 2023",
    fileUrl: "",
    highlight: "D1B199",
    mood: 3,
    name: "excitedThu May 04 2023",
    title: isEng ? "Happiest day" : "행복했던 날",
  };
  return (
    <View
      style={[
        {
          paddingTop: insets.top,
        },
        styles(background).backgroundSetting,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={theme.colors.lightBlack}
          />
        }
        firstPress={() => navigation.navigate("Settings")}
        content={isEng ? "Background" : "배경색"}
      />

      <View style={styles(background).preview}>
        {/* <BackgroundPreview /> */}
        <CardsItem data={previewData} />
      </View>
      <View style={styles(background).backgroundList}>
        <BackgroundList />
      </View>
    </View>
  );
};

export default BackgroundSetting;

const styles = (background: string) =>
  StyleSheet.create({
    backgroundSetting: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
    preview: {
      flex: 0.27,
      paddingHorizontal: 20,
      paddingTop: 40,
    },
    backgroundList: {
      flex: 0.67,
    },
  });
