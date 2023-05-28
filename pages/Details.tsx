import React, { useContext, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { MaterialIcons } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import MoodDetails from "../components/MoodDetails";
import MoodDetailsTools from "../components/MoodDetailsTools";
import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import { RootStackParamList } from "../datas/rootType";
import { theme } from "../styles/theme";
import LoadingIndicator from "../components/LoadingIndicator";
import SnackbarComp from "../components/Snackbar";

const Details = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "Details">) => {
  const insets = useSafeAreaInsets();
  const { moodData } = route.params;
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);

  const viewStr = view === "HomeCalendar" ? "HomeCalendar" : "HomeList";

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).container,
      ]}>
      {uploading ? (
        <LoadingIndicator />
      ) : (
        <>
          <BasicTopnav
            firstIcon={
              <MaterialIcons
                name="arrow-back-ios"
                size={20}
                color={theme.colors.lightBlack}
              />
            }
            firstPress={() => {
              navigation.navigate(viewStr);
            }}
          />

          <ScrollView style={styles(background).content}>
            <MoodDetails moodData={moodData} />
          </ScrollView>
          <MoodDetailsTools
            moodData={moodData}
            navigation={navigation}
            setUploading={setUploading}
            setOpen={setOpen}
          />
        </>
      )}
      <SnackbarComp
        label={isEng ? "Data deleted successfully!" : "기록이 삭제되었습니다."}
        open={open}
        setOpen={setOpen}
      />
    </View>
  );
};

export default Details;

const styles = (background: string) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: background,
    },
    content: {
      flex: 0.94,
    },
  });
