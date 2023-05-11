import React, { ReactNode, useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import {
  MaterialIcons,
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import SettingItem from "../components/SettingItem";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";

import { theme } from "../styles/theme";

type SettingData = {
  engname?: string;
  korname?: string;
  link: string;
  icon: ReactNode;
};

const settings: SettingData[] = [
  {
    engname: "Font Style",
    korname: "글자 스타일",
    link: "FontSetting",
    icon: (
      <MaterialCommunityIcons
        name="format-font"
        size={24}
        color={theme.colors.black}
      />
    ),
  },
  {
    engname: "Background",
    korname: "배경",
    link: "BackgroundSetting",
    icon: <AntDesign name="picture" size={24} color={theme.colors.black} />,
  },
  {
    engname: "Language",
    korname: "언어",
    link: "LanguageSetting",
    icon: <Ionicons name="language" size={24} color={theme.colors.black} />,
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
        },
        styles(background).settingContainer,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={theme.colors.lightBlack}
          />
        }
        firstPress={() => navigation.navigate(view)}
        content={isEng ? "Settings" : "설정"}
      />
      <FlatList
        data={settings}
        renderItem={({ item }) => (
          <SettingItem
            name={(isEng ? item.engname : item.korname) || ""}
            link={item.link}
            icon={item.icon}
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
    settingContainer: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
  });
