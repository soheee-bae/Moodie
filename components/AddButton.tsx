import React from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../styles/theme";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton = (props: AddButtonProps) => {
  const { onPress } = props;

  const handlePress = () => {
    // add animation
    onPress();
  };

  return (
    <View>
      <IconButton
        icon={<AntDesign name="pluscircleo" size={49} color="black" />}
        onPress={handlePress}
        color={theme.colors.background}
      />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
