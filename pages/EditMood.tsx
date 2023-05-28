import React, { useContext, useEffect, useState } from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import CloseModal from "../components/CloseModal";
import MoodEditableCard from "../components/MoodEditableCard";
import KeyboardTool from "../components/KeyboardTool";
import SnackbarComp from "../components/Snackbar";
import LoadingIndicator from "../components/LoadingIndicator";

import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import { RootStackParamList } from "../datas/rootType";
import { keyboardAlign } from "../datas/keyboardTools";
import { uploadData } from "../hooks/uploadData";
import { theme } from "../styles/theme";
import { Moods } from "../datas/moods";
import { updateData } from "../hooks/updateData";
import DataContext from "../contexts/DataContext";

const EditMood = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "EditMood">) => {
  const { moodData } = route.params;
  const insets = useSafeAreaInsets();

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);
  const { getDatas } = useContext(DataContext);

  const viewStr = view === "HomeCalendar" ? "HomeCalendar" : "HomeList";

  const [title, setTitle] = useState(moodData.title);
  const [content, setContent] = useState(moodData.content);
  const [mood, setMood] = useState(Moods[moodData.mood - 1]);
  const [date, setDate] = useState(new Date(moodData.date));
  const [img, setImg] = useState(moodData.fileUrl || "");
  const [alignment, setAlignment] = useState(
    keyboardAlign.find((align) => align.textAlign === moodData.alignment) ||
      keyboardAlign[0]
  );
  const [highlight, setHighlight] = useState(moodData.highlight);
  const [uploading, setUploading] = useState(false);
  const [open, setOpen] = useState(false);

  const handleEdit = async () => {
    const data = {
      date: date.toDateString(),
      mood: mood.value,
      title,
      content,
      alignment: alignment?.textAlign,
      highlight,
    };

    const res = await updateData(data, img, setUploading);

    if (res !== null && res === "success") {
      setOpen(true);

      setTimeout(() => {
        setUploading(false);
        getDatas();
        navigation.navigate(viewStr);
      }, 3000);
    }
  };

  useEffect(() => {
    setImg(moodData.fileUrl || "");
    setMood(Moods[moodData.mood - 1]);
    setDate(new Date(moodData.date));
    setTitle(moodData.title);
    setContent(moodData.content);
    setHighlight(moodData.highlight);
    setAlignment(
      keyboardAlign.find((align) => align.textAlign === moodData.alignment) ||
        keyboardAlign[0]
    );
  }, [moodData]);

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).editMood,
      ]}>
      {uploading ? (
        <LoadingIndicator />
      ) : (
        <>
          <BasicTopnav
            firstIcon={
              <CloseModal onPress={() => navigation.navigate(viewStr)} />
            }
            lastIcon={
              <Entypo name="check" size={20} color={theme.colors.lightBlack} />
            }
            lastPress={handleEdit}
          />

          <ScrollView style={styles(background).content}>
            <MoodEditableCard
              title={title}
              setTitle={setTitle}
              content={content}
              setContent={setContent}
              date={date}
              setDate={setDate}
              mood={mood}
              setMood={setMood}
              img={img}
              alignment={alignment}
              highlight={highlight}
            />
          </ScrollView>
          <KeyboardTool
            alignment={alignment}
            setAlignment={setAlignment}
            content={content}
            setContent={setContent}
            highlight={highlight}
            setHighlight={setHighlight}
            img={img}
            setImg={setImg}
          />
        </>
      )}
      <SnackbarComp
        label={isEng ? "Data updated successfully!" : "기록이 저장되었습니다!"}
        open={open}
        setOpen={setOpen}
      />
    </View>
  );
};

export default EditMood;

const styles = (background: string) =>
  StyleSheet.create({
    editMood: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
    content: {
      flex: 0.94,
    },
  });
