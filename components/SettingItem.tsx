import React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface SettingItemProps {
  name: string;
  link: string;
  navigation: any;
}

const SettingItem = (props: SettingItemProps) => {
  const { name, link, navigation } = props;

  const handlePress = (link: string) => {
    navigation.navigate(link);
  };

  return (
    <TouchableOpacity
      onPress={() => {
        handlePress(link);
      }}
      style={styles.settingItem}>
      <Text style={styles.label}>{name}</Text>
      <MaterialIcons name="arrow-forward-ios" size={24} color="black" />
    </TouchableOpacity>
  );
};

export default SettingItem;

const styles = StyleSheet.create({
  settingItem: {
    flex: 1,
    backgroundColor: "red",
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  label: {},
});
