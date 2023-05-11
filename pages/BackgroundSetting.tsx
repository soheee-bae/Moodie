import React, { useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import BackgroundList from "../components/BackgroundList";
import ThemeContext from "../contexts/ThemeContext";

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
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        }
        firstPress={() => navigation.navigate("Settings")}
        content={isEng ? "Background" : "배경색"}
      />
      <View style={{ height: "35%", width: "100%" }}>
        <Text>Preview</Text>
      </View>
      <View style={{ height: "65%", width: "100%" }}>
        <BackgroundList />
      </View>
    </View>
  );
};

export default BackgroundSetting;

const styles = (background: string) =>
  StyleSheet.create({
    backgroundSetting: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: background,
      width: "100%",
    },
  });
