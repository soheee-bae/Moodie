import React, { useContext } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import ThemeContext from "../contexts/ThemeContext";
import { Moods } from "../datas/moods";
import { theme } from "../styles/theme";

interface EmptyPlaceholderProps {
  message?: string;
}
const EmptyPlaceholder = (props: EmptyPlaceholderProps) => {
  const { message } = props;
  const { isEng } = useContext(ThemeContext);

  const defaultText = isEng
    ? "No data to display."
    : "아직 등록된 감정이 없어요.";

  return (
    <View style={styles.container}>
      <Image source={Moods[8].file} style={styles.mood} />
      <Text style={styles.text}>{message ? message : defaultText}</Text>
    </View>
  );
};

export default EmptyPlaceholder;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  mood: {
    height: 40,
    aspectRatio: 1 / 1,
  },
  text: {
    fontSize: theme.typography.md,
    fontWeight: "400",
  },
});
