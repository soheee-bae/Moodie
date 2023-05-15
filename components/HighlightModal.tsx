import React, { useState } from "react";
import { StyleSheet, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ModalComp from "./Modal";
import HighlightIcon from "./HighlightIcon";

const highlights = Object.values(theme.highlights);

interface HightlightModalProps {
  onPress: (color: string) => void;
}

const HightlightModal = (props: HightlightModalProps) => {
  const { onPress } = props;

  const [tempColor, setTempColor] = useState("");

  const content = (
    <View style={styles.content}>
      {highlights.map((color) => (
        <Pressable onPress={() => setTempColor(color)}>
          <HighlightIcon color={color} width={125} height={25} />
        </Pressable>
      ))}
    </View>
  );

  const trigger = <Ionicons name="color-palette-outline" size={24} />;

  return (
    <ModalComp
      onPress={() => onPress(tempColor)}
      content={content}
      trigger={trigger}
    />
  );
};

export default HightlightModal;

const styles = StyleSheet.create({
  content: {},
});
