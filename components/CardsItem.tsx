import React, { useContext } from "react";
import { StyleSheet, Image, View, Text } from "react-native";

import { DataType } from "../hooks/uploadData";
import { Moods } from "../datas/moods";
import { convertDay } from "../helper/getDates";
import { theme } from "../styles/theme";
import FontContext from "../contexts/FontContext";

interface CardsListsProps {
  data: DataType;
}

const CardsItem = (props: CardsListsProps) => {
  const { data } = props;
  const { fontStyle, fontSizePx } = useContext(FontContext);

  console.log(data);
  return (
    <View style={styles.content}>
      <View style={styles.header}>
        <Image source={Moods[data?.mood]?.file} style={styles.mood} />
        <View style={styles.headerInner}>
          <View style={styles.date}>
            <Text
              style={[
                styles.daynum,
                { fontSize: fontSizePx, fontFamily: fontStyle },
              ]}>
              {new Date(data.date).getDate()}
            </Text>
            <Text
              style={[
                styles.daystr,
                { fontSize: fontSizePx, fontFamily: fontStyle },
              ]}>
              {convertDay(new Date(data.date).getDay())}
            </Text>
          </View>
          <Text
            style={[
              styles.title,
              { fontSize: fontSizePx, fontFamily: fontStyle },
            ]}>
            {data.title}
          </Text>
        </View>
      </View>
      {data?.fileUrl && (
        <Image source={{ uri: data?.fileUrl }} style={styles.image} />
      )}
      <Text
        style={[
          styles.contentText,
          { fontSize: fontSizePx, fontFamily: fontStyle },
        ]}>
        {data.content}
      </Text>
    </View>
  );
};

export default CardsItem;

const styles = StyleSheet.create({
  content: {
    borderWidth: 0.5,
    borderColor: theme.colors.gray,
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
    alignItems: "center",
    gap: 8,
  },
  headerInner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
  },
  daynum: {
    fontFamily: "Inder_400Regular",
    fontSize: theme.typography.lg,
  },
  daystr: {
    color: theme.colors.lightBlack,
    fontSize: theme.typography.md,
  },
  title: {},
  mood: { width: 40, height: 40 },
  image: { height: 120, width: "auto", marginBottom: 20 },
  contentText: {
    overflow: "hidden",
    maxHeight: 80,
    color: theme.colors.lightBlack,
    lineHeight: 20,
  },
});
