import React from "react";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

interface CheckIconProps {
  isSelected: boolean;
  color?: string;
  size?: number;
}
const CheckIcon = (props: CheckIconProps) => {
  const { isSelected, color = "black", size = 24 } = props;

  return (
    <>
      {isSelected ? (
        <MaterialIcons name="radio-button-checked" size={size} color={color} />
      ) : (
        <MaterialIcons
          name="radio-button-unchecked"
          size={size}
          color={color}
        />
      )}
    </>
  );
};

export default CheckIcon;

const styles = StyleSheet.create({});
