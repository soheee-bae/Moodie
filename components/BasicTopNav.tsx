import React, { ReactNode } from "react";
import { StyleSheet, View, Text } from "react-native";
import { IconButton } from "@react-native-material/core";

interface BasicTopnavProps {
  firstIcon?: ReactNode;
  lastIcon?: ReactNode;
  title?: string;
  firstPress?: () => void;
  lastPress?: () => void;
}

const BasicTopnav = (props: BasicTopnavProps) => {
  const { firstIcon, lastIcon, title, firstPress, lastPress } = props;
  return (
    <View style={styles.header}>
      <IconButton icon={firstIcon} onPress={firstPress} />
      <Text>{title}</Text>
      <IconButton icon={lastIcon} onPress={lastPress} />
    </View>
  );
};

export default BasicTopnav;

const styles = StyleSheet.create({
  header: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
});
