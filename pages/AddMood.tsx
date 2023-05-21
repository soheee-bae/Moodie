import React, { useContext, useState } from "react";
import { View, StyleSheet, ScrollView, ActivityIndicator } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Snackbar } from "@react-native-material/core";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";

import BasicTopnav from "../components/BasicNav";
import CloseModal from "../components/CloseModal";
import MoodEditableCard from "../components/MoodEditableCard";
import KeyboardTool from "../components/KeyboardTool";

import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import { RootStackParamList } from "../datas/rootType";
import { keyboardAlign } from "../datas/keyboardTools";

import { uploadData } from "../hooks/uploadData";
import { theme } from "../styles/theme";

const AddMood = ({
  navigation,
  route,
}: NativeStackScreenProps<RootStackParamList, "AddMood">) => {
  const { initialDate, initialMood } = route.params;
  const insets = useSafeAreaInsets();

  const { view } = useContext(ViewContext);
  const { background, isEng } = useContext(ThemeContext);

  const viewStr = view === "HomeCalendar" ? "HomeCalendar" : "HomeList";

  const [title, setTitle] = useState(
    isEng ? initialMood.engLabel : initialMood.korLabel
  );
  const [content, setContent] = useState("");
  const [mood, setMood] = useState(initialMood);
  const [date, setDate] = useState(new Date(initialDate));
  const [img, setImg] = useState("");
  const [alignment, setAlignment] = useState(keyboardAlign[0]);
  const [highlight, setHighlight] = useState("E1E1E1");
  const [uploading, setUploading] = useState(false);

  const handleUpload = async () => {
    const data = {
      date: date.toDateString(),
      mood: mood.value,
      title,
      content,
      alignment: alignment.textAlign,
      highlight,
    };

    await uploadData(data, img, setUploading).then((res) => {
      navigation.navigate(viewStr);
      setContent("");
      setMood(initialMood);
      setDate(new Date(initialDate));
      setImg("");
      setAlignment(keyboardAlign[0]);
      setHighlight("E1E1E1");
    });
  };

  return (
    <View
      style={[
        {
          paddingTop: insets.top,
          paddingBottom: insets.bottom,
        },
        styles(background).addMode,
      ]}>
      <BasicTopnav
        firstIcon={<CloseModal onPress={() => navigation.navigate(viewStr)} />}
        lastIcon={
          <Entypo name="check" size={20} color={theme.colors.lightBlack} />
        }
        lastPress={handleUpload}
      />
      {uploading ? (
        <View style={{ height: "100%" }}>
          <ActivityIndicator size="large" />
        </View>
      ) : (
        <ScrollView>
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
      )}
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
    </View>
  );
};

export default AddMood;

const styles = (background: string) =>
  StyleSheet.create({
    addMode: {
      flex: 1,
      backgroundColor: background,
      width: "100%",
    },
  });
