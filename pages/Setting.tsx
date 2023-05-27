import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import SettingItem from "../components/SettingItem";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";

import { theme } from "../styles/theme";
import { settings } from "../datas/settings";

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
        style={styles(background).content}
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
    content: {
      flex: 0.94,
    },
  });
