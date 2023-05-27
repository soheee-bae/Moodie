import React from "react";
import { StyleSheet, ScrollView, Pressable } from "react-native";

import { FullDataType } from "../api/getAllDatas";
import { DataType } from "../hooks/uploadData";
import EmptyPlaceholder from "./EmptyPlaceholder";
import CardsItem from "./CardsItem";

interface CardsListsProps {
  currentData: FullDataType | null;
  navigation: any;
}

const CardsLists = (props: CardsListsProps) => {
  const { currentData, navigation } = props;

  const datas = currentData?.data;

  const isEmpty =
    datas?.length === 0 || !datas ? (
      <EmptyPlaceholder />
    ) : (
      <ScrollView style={styles.container}>
        {datas?.map((data: DataType) => (
          <Pressable
            onPress={(event) => {
              event.persist();
              navigation.navigate("Details", {
                moodData: data,
              });
            }}>
            <CardsItem data={data} />
          </Pressable>
        ))}
      </ScrollView>
    );

  return isEmpty;
};

export default CardsLists;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    display: "flex",
    flexDirection: "column",
    marginTop: 35,
  },
});
