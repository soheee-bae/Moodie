import React, { useContext } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ThemeContext from "../contexts/ThemeContext";
import BackgroundList from "../components/BackgroundList";

interface LanguageSettingProps {
  navigation: any;
}

const LanguageSetting = (props: LanguageSettingProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { background, isEng, setLanguage } = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
        },
        styles(background).languageSetting,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        }
        firstPress={() => navigation.navigate("Settings")}
        content={isEng ? "Language" : "언어"}
      />
      <View>
        <TouchableOpacity
          onPress={() => {
            setLanguage("kor");
          }}>
          <Text>{isEng ? "Korean" : "한국어"}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setLanguage("eng");
          }}>
          <Text>{isEng ? "English" : "영어"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LanguageSetting;

const styles = (background: string) =>
  StyleSheet.create({
    languageSetting: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "column",
      backgroundColor: background,
      width: "100%",
    },
  });
