import React, { useContext } from "react";
import { View, StyleSheet, FlatList, Text, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import getFontsList from "../helper/getFontsList";
import FontStyleList from "../components/FontStyleList";
import FontPreview from "../components/FontPreview";

// type LanguageData = {
//   value: languageType;
//   engLabel?: string;
//   korLabel?: string;
// };

interface FontSettingProps {
  navigation: any;
}

const FontSetting = (props: FontSettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { background, isEng, language } = useContext(ThemeContext);

  const fontLists = getFontsList(language);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
        },
        styles(background).fontSettingContainer,
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
        content={isEng ? "Font Style" : "글자 스타일"}
      />
      <View style={styles(background).preview}>
        <FontPreview />
      </View>
      <ScrollView style={styles(background).lists}>
        <FlatList
          data={fontLists}
          renderItem={({ item }) => (
            <FontStyleList name={item.label} value={item.value} />
          )}
          keyExtractor={(item) => item.value}
        />
      </ScrollView>
    </View>
  );
};

export default FontSetting;

const styles = (background: string) =>
  StyleSheet.create({
    fontSettingContainer: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
    preview: { flex: 0.5 },
    lists: { flex: 2 },
  });
