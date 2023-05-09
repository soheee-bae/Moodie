import React, { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "@react-native-material/core";
import { theme } from "../styles/theme";

interface BasicNavProps {
  firstIcon?: ReactNode;
  lastIcon?: ReactNode;
  content?: string | ReactNode;
  firstPress?: () => void;
  lastPress?: () => void;
}

const BasicNav = (props: BasicNavProps) => {
  const { firstIcon, lastIcon, content, firstPress, lastPress } = props;
  return (
    <View style={styles.header}>
      <IconButton
        icon={firstIcon}
        onPress={firstPress}
        color={theme.colors.background}
      />
      <Text>{content}</Text>
      <IconButton
        icon={lastIcon}
        onPress={lastPress}
        color={theme.colors.background}
      />
    </View>
  );
};

export default BasicNav;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
