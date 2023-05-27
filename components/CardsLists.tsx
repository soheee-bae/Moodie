import React from "react";
import { StyleSheet, ScrollView } from "react-native";

import { FullDataType } from "../api/getAllDatas";
import { DataType } from "../hooks/uploadData";
import EmptyPlaceholder from "./EmptyPlaceholder";
import CardsItem from "./CardsItem";

interface CardsListsProps {
  currentData: FullDataType | null;
}

const CardsLists = (props: CardsListsProps) => {
  const { currentData } = props;

  const datas = currentData?.data;

  const isEmpty =
    datas?.length === 0 || !datas ? (
      <EmptyPlaceholder />
    ) : (
      <ScrollView style={styles.container}>
        {datas?.map((data: DataType) => (
          <CardsItem data={data} />
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
