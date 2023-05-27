import React, { useContext, useState } from "react";
import { View, StyleSheet, TextInput, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { MaterialIcons, Feather } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import ViewContext from "../contexts/ViewContext";
import CardsItem from "../components/CardsItem";
import EmptyPlaceholder from "../components/EmptyPlaceholder";
import ThemeContext from "../contexts/ThemeContext";
import DataContext from "../contexts/DataContext";
import FontContext from "../contexts/FontContext";

import { FullDataType } from "../api/getAllDatas";
import { DataType } from "../hooks/uploadData";

import { theme } from "../styles/theme";

interface SearchProps {
  navigation: any;
}

const Search = (props: SearchProps) => {
  const { navigation } = props;
  const insets = useSafeAreaInsets();

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);
  const { datas } = useContext(DataContext);
  const { fontStyle } = useContext(FontContext);

  const [search, setSearch] = useState("");

  const dataToDisplay = search
    ? datas?.reduce((exisiting: any, data: FullDataType) => {
        const details = data.data;
        const lowercaseSearch = search.toLowerCase();
        const finalDatas: (DataType | undefined)[] = details
          .map((detail: DataType) => {
            if (
              detail.title.includes(lowercaseSearch) ||
              detail.content.includes(lowercaseSearch)
            ) {
              return detail;
            }
          })
          .filter((data) => data !== undefined);
        const newExisitng = exisiting.concat(finalDatas);
        return newExisitng;
      }, [])
    : [];

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
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
        firstPress={() => {
          navigation.navigate(view);
          setSearch("");
        }}
        content={isEng ? "Search" : "검색"}
      />
      <View style={styles(background).content}>
        <View style={styles(background).searchField}>
          <Feather
            name="search"
            size={18}
            color="black"
            style={styles(background).searchIcon}
          />
          <TextInput
            onChangeText={setSearch}
            value={search}
            style={[styles(background).searchInput, { fontFamily: fontStyle }]}
          />
        </View>
        {dataToDisplay?.length === 0 ? (
          <EmptyPlaceholder
            message={isEng ? "No data found." : "찾으시는 기록이 없습니다."}
          />
        ) : (
          <ScrollView>
            {dataToDisplay.map((data: DataType) => (
              <CardsItem data={data} />
            ))}
          </ScrollView>
        )}
      </View>
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
    content: {
      flex: 0.94,
      paddingHorizontal: 20,
    },

    searchField: {
      display: "flex",
      flexDirection: "row",
      position: "relative",
    },
    searchIcon: {
      position: "absolute",
      left: 8,
      top: 19,
    },
    searchInput: {
      borderWidth: 0.5,
      borderColor: theme.colors.gray,
      borderRadius: 8,
      padding: 10,
      paddingLeft: 35,
      width: "100%",
      marginTop: 10,
      marginBottom: 20,
    },
  });
