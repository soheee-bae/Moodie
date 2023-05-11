import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import ThemeContext, { languageType } from "../contexts/ThemeContext";
import { theme } from "../styles/theme";

interface LanguageListProps {
  name: string;
  value: languageType;
}
const LanguageList = (props: LanguageListProps) => {
  const { name, value } = props;
  const { setLanguage, language } = useContext(ThemeContext);

  const isSelected = language === value;
  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setLanguage(value);
      }}>
      <View style={styles.languageList}>
        <Text>{name}</Text>
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

export default LanguageList;

const styles = StyleSheet.create({
  languageList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    maxWidth: "100%",
    alignItems: "center",
    paddingHorizontal: 22,
    paddingVertical: 21,
  },
});
