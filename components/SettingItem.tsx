import React, { ReactNode } from "react";
import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme";

interface SettingItemProps {
  name: string;
  link: string;
  navigation: any;
  icon: ReactNode;
}

const SettingItem = (props: SettingItemProps) => {
  const { name, link, navigation, icon } = props;

  const handlePress = (link: string) => {
    navigation.navigate(link);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(link);
      }}
      style={styles.settingItem}>
      <View style={styles.content}>
        <Text>{icon}</Text>
        <Text style={styles.name}>{name}</Text>
      </View>
      <MaterialIcons
        name="arrow-forward-ios"
        size={15}
        color={theme.colors.lightBlack}
      />
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  settingItem: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "100%",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 21,
  },
  content: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 17,
  },
  name: {},
});
