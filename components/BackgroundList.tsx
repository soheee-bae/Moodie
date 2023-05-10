import React, { useContext } from "react";
import { StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";

const backgrounds = Object.values(theme.background);

const BackgroundList = () => {
  const { setBackground } = useContext(ThemeContext);

  return (
    <ScrollView
      style={styles.backgroundList}
      contentContainerStyle={styles.backgrounds}>
      {backgrounds.map((background) => (
        <TouchableOpacity
          onPress={() => {
            setBackground(background);
          }}
          style={{
            backgroundColor: background,
            width: "34%",
            height: "25%",
            borderWidth: 0.5,
            borderColor: "white",
          }}
        />
      ))}
    </ScrollView>
  );
};

export default BackgroundList;

const styles = StyleSheet.create({
  backgroundList: {
    flex: 1,
    flexDirection: "column",
    width: "100%",
  },
  backgrounds: {
    justifyContent: "flex-start",
    alignItems: "center",
    flexWrap: "wrap",
    flex: 1,
    flexDirection: "column",
  },
});
