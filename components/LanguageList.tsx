import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";

import ThemeContext, { languageType } from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";
import { theme } from "../styles/theme";
import CheckIcon from "./CheckIcon";

interface LanguageListProps {
  name: string;
  value: languageType;
}
const LanguageList = (props: LanguageListProps) => {
  const { name, value } = props;
  const { setLanguage, language } = useContext(ThemeContext);
  const { fontSizePx, fontStyle } = useContext(FontContext);

  const isSelected = language === value;

  return (
    <TouchableWithoutFeedback
      onPress={() => {
        setLanguage(value);
      }}>
      <View style={styles.languageList}>
        <Text style={{ fontFamily: fontStyle, fontSize: fontSizePx }}>
          {name}
        </Text>
        <CheckIcon isSelected={isSelected} color={theme.colors.lightBlack} />
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
