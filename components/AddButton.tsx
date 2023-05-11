import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import ViewContext from "../contexts/ViewContext";

interface AddButtonProps {
  onPress: () => void;
}

const AddButton = (props: AddButtonProps) => {
  const { onPress } = props;
  const { view } = useContext(ViewContext);

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
            size={49}
            color={theme.colors.lightBlack}
          />
        }
        onPress={handlePress}
        color={theme.colors.background}
      />
    </View>
  );
};

export default AddButton;

const styles = StyleSheet.create({});
