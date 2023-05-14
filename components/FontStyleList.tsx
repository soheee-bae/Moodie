import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

import CheckIcon from "./CheckIcon";
import FontContext from "../contexts/FontContext";
import { theme } from "../styles/theme";

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
        <CheckIcon isSelected={isSelected} color={theme.colors.lightBlack} />
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
