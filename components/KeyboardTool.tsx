import React, { useContext } from "react";
import { StyleSheet } from "react-native";

interface KeyboardToolProps {}
const KeyboardTool = (props: KeyboardToolProps) => {
  const {} = props;

  return (
    <KeyboardAvoidingView behavior="padding" style={{ borderWidth: 1 }}>
      <IconButton
        icon={<Octicons name="image" size={24} color="black" />}
        onPress={() => {}}
        color={theme.colors.background}
      />
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="format-align-left"
            size={24}
            color="black"
          />
        }
        onPress={() => {
          setTextAlign("flex-start");
        }}
        color={theme.colors.background}
      />
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="format-align-center"
            size={24}
            color="black"
          />
        }
        onPress={() => {
          setTextAlign("center");
        }}
        color={theme.colors.background}
      />
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="format-align-right"
            size={24}
            color="black"
          />
        }
        onPress={() => {
          setTextAlign("flex-end");
        }}
        color={theme.colors.background}
      />

      <IconButton
        icon={<Ionicons name="color-palette-outline" size={24} color="black" />}
        onPress={() => {}}
        color={theme.colors.background}
      />
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="clock-outline"
            size={24}
            color="black"
          />
        }
        onPress={() => {
          setContent(`${content} ${hour}:${minute} ${ampm}`);
        }}
        color={theme.colors.background}
      />
    </KeyboardAvoidingView>
  );
};

export default KeyboardTool;

const styles = StyleSheet.create({
  KeyboardTool: {},
});
