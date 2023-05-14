import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import LanguageList from "../components/LanguageList";
import BasicTopnav from "../components/BasicNav";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import { languages } from "../datas/language";

interface LanguageSettingProps {
  navigation: any;
}

const LanguageSetting = (props: LanguageSettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { background, isEng } = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
        },
        styles(background).languageSettingContainer,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={theme.colors.lightBlack}
          />
        }
        firstPress={() => navigation.navigate("Settings")}
        content={isEng ? "Language" : "언어"}
      />
      <FlatList
        data={languages}
        renderItem={({ item }) => (
          <LanguageList
            name={(isEng ? item.engLabel : item.korLabel) || ""}
            value={item.value}
          />
        )}
        keyExtractor={(item) => item.value}
      />
    </View>
  );
};

export default LanguageSetting;

const styles = (background: string) =>
  StyleSheet.create({
    languageSettingContainer: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
  });
