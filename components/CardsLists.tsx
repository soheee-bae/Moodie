import React from "react";
import { StyleSheet, Image, View, Text, ScrollView } from "react-native";
import { FullDataType } from "../api/getAllDatas";
import { DataType } from "../hooks/uploadData";
import { Moods } from "../datas/moods";
import { convertDay } from "../helper/getDates";
import { theme } from "../styles/theme";

interface CardsListsProps {
  currentData: FullDataType | null;
}

const CardsLists = (props: CardsListsProps) => {
  const { currentData } = props;

  const datas = currentData?.data;

  return (
    <ScrollView style={styles.container}>
      {datas?.map((data: DataType) => (
        <View style={styles.content}>
          <View style={styles.header}>
            <Image source={Moods[data?.mood]?.file} style={styles.mood} />
            <View style={styles.headerInner}>
              <View style={styles.date}>
                <Text style={styles.daynum}>
                  {new Date(data.date).getDate()}
                </Text>
                <Text style={styles.daystr}>
                  {convertDay(new Date(data.date).getDay())}
                </Text>
              </View>
              <Text style={styles.title}>{data.title}</Text>
            </View>
          </View>
          {data?.fileUrl && (
            <Image source={{ uri: data?.fileUrl }} style={styles.image} />
          )}
          <Text style={styles.contentText}>{data.content}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default CardsLists;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 35,
    display: "flex",
    flexDirection: "column",
    marginTop: 25,
  },
  content: {
    borderWidth: 1,
    borderColor: theme.colors.lightestBlack,
    borderRadius: 8,
    paddingVertical: 18,
    paddingHorizontal: 13,
    marginBottom: 25,
  },
  header: {
    display: "flex",
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    marginBottom: 20,
  },
  date: {
    display: "flex",
    flexDirection: "row",
    gap: 8,
  },
  headerInner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  daynum: {},
  daystr: {},
  title: {},

  mood: { width: 40, height: 40 },
  image: { height: 120, width: "auto", marginBottom: 20 },
  contentText: {
    overflow: "hidden",
    maxHeight: 100,
  },
});
