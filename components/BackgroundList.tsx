import React, { useContext } from "react";
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  View,
} from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import CheckIcon from "./CheckIcon";

const backgrounds = Object.values(theme.background);

const BackgroundList = () => {
  const { setBackground, background } = useContext(ThemeContext);

  return (
    <ScrollView
      style={styles.backgroundList}
      contentContainerStyle={styles.backgrounds}>
      {backgrounds.map((color) => {
        const isSelected = background === color;
        return (
          <TouchableWithoutFeedback
            id={color}
            key={color}
            onPress={() => {
              setBackground(color);
            }}>
            <View
              style={[
                {
                  backgroundColor: color,
                },
                styles.background,
              ]}>
              <CheckIcon isSelected={isSelected} color="white" />
            </View>
          </TouchableWithoutFeedback>
        );
      })}
    </ScrollView>
  );
};

export default BackgroundList;

const styles = StyleSheet.create({
  backgroundList: {
    flex: 1,
    width: "100%",
  },
  backgrounds: {
    alignItems: "center",
    flexWrap: "wrap",
    display: "flex",
    flexDirection: "row",
  },
  background: {
    width: "33%",
    height: "auto",
    aspectRatio: 1 / 1,
    borderWidth: 0.5,
    borderColor: "white",
    padding: 5,
    display: "flex",
    alignItems: "flex-end",
  },
});
