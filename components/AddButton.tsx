import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ThemeContext from "../contexts/ThemeContext";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton = (props: AddButtonProps) => {
  const { onPress } = props;
  const { background } = useContext(ThemeContext);

  const handlePress = () => {
    // add animation
    onPress();
  };

  return (
    <View>
      <IconButton
        icon={
          <AntDesign
            name="pluscircleo"
            size={47}
            color={theme.colors.lightBlack}
          />
        }
        onPress={handlePress}
        color={background}
      />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
