import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import BackgroundList from "../components/BackgroundList";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";

interface BackgroundSettingProps {
  navigation: any;
}

const BackgroundSetting = (props: BackgroundSettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { background, isEng } = useContext(ThemeContext);

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
        <Text>Preview</Text>
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
      justifyContent: "space-between",
      width: "100%",
    },
    preview: {
      flex: 2,
    },
    backgroundList: {
      flex: 2,
    },
  });
