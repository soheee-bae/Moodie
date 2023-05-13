import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import FontContext from "../contexts/FontContext";

interface FontStyleListProps {
  name: string;
  value: string;
}
const FontStyleList = (props: FontStyleListProps) => {
  const { name, value } = props;
  const { fontStyle, setfontStyle } = useContext(FontContext);

  const isSelected = fontStyle === value;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setfontStyle(value);
      }}>
      <View style={styles.fontStyleList}>
        <Text style={{ fontFamily: value, fontSize: theme.typography.md }}>
          {name}
        </Text>
        {isSelected ? (
          <MaterialIcons
            name="radio-button-checked"
            size={24}
            color={theme.colors.lightBlack}
          />
        ) : (
          <MaterialIcons
            name="radio-button-unchecked"
            size={24}
            color={theme.colors.lightBlack}
          />
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

export default FontStyleList;

const styles = StyleSheet.create({
  fontStyleList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "100%",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 21,
  },
});
