import React, { useContext } from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import BasicNav from "../components/BasicNav";
import AddButton from "../components/AddButton";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";

interface AddCoverProps {
  navigation: any;
}

const AddCover = (props: AddCoverProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { view } = useContext(ViewContext);
  const { background } = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).addCover,
      ]}>
      <View></View>
      <BasicNav
        content={<AddButton onPress={() => navigation.navigate(view)} />}
      />
    </View>
  );
};

export default AddCover;

const styles = (background: string) =>
  StyleSheet.create({
    addCover: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      backgroundColor: background,
    },
  });
