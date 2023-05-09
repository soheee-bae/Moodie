import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { IconButton } from "@react-native-material/core";
import { AntDesign } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";

interface AddCoverProps {
  navigation: any;
}

const AddCover = (props: AddCoverProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles.addCover,
      ]}>
      <View></View>
      <BasicNav
        content={
          <AddButton onPress={() => navigation.navigate("HomeCalendar")} />
        }
      />
    </View>
  );
};

export default AddCover;

const styles = StyleSheet.create({
  addCover: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
