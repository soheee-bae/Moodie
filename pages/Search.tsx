import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";

interface SearchProps {
  navigation: any;
}

const Search = (props: SearchProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).searchContainer,
      ]}>
      <BasicTopnav
        firstIcon={
          <MaterialIcons
            name="arrow-back-ios"
            size={20}
            color={theme.colors.lightBlack}
          />
        }
        firstPress={() => navigation.navigate(view)}
        content={isEng ? "Search" : "검색"}
      />
    </View>
  );
};

export default Search;

const styles = (background: string) =>
  StyleSheet.create({
    searchContainer: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
  });
