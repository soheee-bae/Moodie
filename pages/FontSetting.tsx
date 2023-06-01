import React, { useContext } from "react";
import { View, StyleSheet, FlatList } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import getFontsList from "../helper/getFontsList";

import FontStyleList from "../components/FontStyleList";
import FontPreview from "../components/FontPreview";
import FontSlider from "../components/FontSlider";
import BasicTopnav from "../components/BasicNav";

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
      <View style={styles(background).slider}>
        <FontSlider />
      </View>
      <View style={styles(background).lists}>
        <FlatList
          data={fontLists}
          renderItem={({ item }) => (
            <FontStyleList name={item.label} value={item.value} />
          )}
          keyExtractor={(item) => item.value}
        />
      </View>
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
    slider: { flex: 0.06 },
    preview: { flex: 0.28 },
    lists: { flex: 0.6 },
  });
