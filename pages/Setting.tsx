import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";

interface SettingProps {
  navigation: any;
}

const Setting = (props: SettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { view } = useContext(ViewContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles.setting,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        }
        firstPress={() => navigation.navigate(view)}
        content="Settings"
      />
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({
  setting: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
