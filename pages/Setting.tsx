import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import SettingItem from "../components/SettingItem";

type SettingData = {
  name: string;
  link: string;
};

const settings: SettingData[] = [
  {
    name: "Font Style",
    link: "FontSetting",
  },
  {
    name: "Background",
    link: "BackgroundSetting",
  },
  {
    name: "Language",
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
  const { background } = useContext(ThemeContext);

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
            name={item.name}
            link={item.link}
            navigation={navigation}
          />
        )}
        keyExtractor={(item) => item.name}
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
