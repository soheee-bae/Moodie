import React, { useContext } from "react";
import { StyleSheet, ScrollView } from "react-native";

import { FullDataType } from "../api/getAllDatas";
import { DataType } from "../hooks/uploadData";
import FontContext from "../contexts/FontContext";
import EmptyPlaceholder from "./EmptyPlaceholder";
import CardsItem from "./CardsItem";

interface CardsListsProps {
  currentData: FullDataType | null;
}

const CardsLists = (props: CardsListsProps) => {
  const { currentData } = props;
  const { fontStyle, fontSizePx } = useContext(FontContext);

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
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    marginTop: 35,
  },
});
