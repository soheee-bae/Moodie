import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Slider } from "@miblanchard/react-native-slider";

import { theme } from "../styles/theme";
import FontContext from "../contexts/FontContext";
import getFontSize from "../helper/getFontSize";
import getFontSizeReverse from "../helper/getFontSizeReverse";

const FontSlider = () => {
  const { setFontSize, fontSize } = useContext(FontContext);

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
        value={getFontSizeReverse(fontSize)}
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
  min: { fontSize: theme.typography.xs },
  max: {
    fontSize: theme.typography.xl,
  },
});
