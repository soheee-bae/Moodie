import React, { useContext } from "react";
import { StyleSheet, TouchableWithoutFeedback, Text, View } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { Slider } from "@miblanchard/react-native-slider";
import { AntDesign } from "@expo/vector-icons";

import ThemeContext, { languageType } from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import FontContext from "../contexts/FontContext";
import getFontSize from "../helper/getFontSize";

interface FontSliderProps {}
const FontSlider = (props: FontSliderProps) => {
  //   const { name, value } = props;
  const { setFontSize } = useContext(FontContext);

  return (
    <View style={styles.fontSlider}>
      <Text style={styles.min}>A</Text>

      <Slider
        containerStyle={styles.slider}
        trackStyle={styles.track}
        minimumValue={0}
        maximumValue={4}
        minimumTrackTintColor="#000000"
        maximumTrackTintColor="#000000"
        step={1}
        trackMarks={[1, 2, 3]}
        thumbTintColor="#000000"
        thumbStyle={styles.thumb}
        onValueChange={(value: number[]) => {
          const size = getFontSize(value[0]);
          setFontSize(size);
        }}
      />
      <Text style={styles.max}>A</Text>
    </View>
  );
};

export default FontSlider;

const styles = StyleSheet.create({
  fontSlider: {
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingLeft: 21,
    paddingRight: 30,
  },
  track: {
    height: 2,
  },
  slider: {
    width: "90%",
  },
  thumb: {
    height: 10,
    width: 10,
  },
  min: {},
  max: {},
});
