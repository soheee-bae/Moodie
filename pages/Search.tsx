import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import { theme } from "../styles/theme";
import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";

interface SearchProps {
  navigation: any;
}

const Search = (props: SearchProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();
  const { view } = useContext(ViewContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles.search,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons name="arrow-back-ios" size={24} color="black" />
        }
        firstPress={() => navigation.navigate(view)}
        content="Search"
      />
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  search: {
    flex: 1,
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: theme.colors.background,
  },
});
