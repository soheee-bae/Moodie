import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import SettingItem from "../components/SettingItem";

type SettingData = {
  engname?: string;
  korname?: string;
  link: string;
};

const settings: SettingData[] = [
  {
    engname: "Font Style",
    korname: "글 스타일",
    link: "FontSetting",
  },
  {
    engname: "Background",
    korname: "배경색",
    link: "BackgroundSetting",
  },
  {
    engname: "Language",
    korname: "언어",
    link: "LanguageSetting",
  },
];

interface SettingProps {
  navigation: any;
}

const Setting = (props: SettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).setting,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        }
        firstPress={() => navigation.navigate(view)}
        content="Settings"
      />
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <SettingItem
            name={(isEng ? item.engname : item.korname) || ""}
            link={item.link}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.link}
      />
    </View>
  );
};

export default Setting;

const styles = (background: string) =>
  StyleSheet.create({
    setting: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
      backgroundColor: background,
    },
    content: {
      backgroundColor: "red",
    },
  });
