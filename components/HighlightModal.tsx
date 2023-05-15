import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ModalComp from "./Modal";
import HighlightIcon from "./HighlightIcon";

const highlights = Object.values(theme.highlights);

interface HightlightModalProps {
  highlight: string;
  onPress: (color: string) => void;
}

const HightlightModal = (props: HightlightModalProps) => {
  const { highlight, onPress } = props;

  const [tempColor, setTempColor] = useState(highlight);

  const content = (
    <View style={styles.content}>
      {highlights.map((color) => {
        const isSelected = color === tempColor;
        return (
          <Pressable
            onPress={() => setTempColor(color)}
            style={[
              styles.highlight,
              {
                borderColor: isSelected
                  ? theme.colors.lightestBlack
                  : "transparent",
              },
            ]}>
            <HighlightIcon color={color} width={120} height={25} />
          </Pressable>
        );
      })}
    </View>
  );

  const trigger = (
    <MaterialIcons
      name="colorize"
      size={24}
      color="black"
      style={{ paddingHorizontal: 7 }}
    />
  );

  return (
    <ModalComp
      onPress={() => onPress(tempColor)}
      onCancel={() => setTempColor(highlight)}
      content={content}
      trigger={trigger}
    />
  );
};

export default HightlightModal;

const styles = StyleSheet.create({
  content: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 15,
    marginBottom: 10,
  },
  highlight: {
    padding: 5,
    borderRadius: 10,
    borderWidth: 1,
  },
});
