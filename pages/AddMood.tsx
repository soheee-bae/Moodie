import React, { useContext, useState } from "react";
import {
  KeyboardAvoidingView,
  View,
  StyleSheet,
  ScrollView,
  Platform,
  Text,
} from "react-native";
import { Octicons } from "@expo/vector-icons";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Entypo } from "@expo/vector-icons";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

import ViewContext from "../contexts/ViewContext";
import ThemeContext from "../contexts/ThemeContext";
import { RootStackParamList } from "../datas/rootType";
import { theme } from "../styles/theme";

import BasicTopnav from "../components/BasicNav";
import CloseModal from "../components/CloseModal";
import MoodEditableCard from "../components/MoodEditableCard";
import getDates from "../helper/getDates";

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
  const [date, setDate] = useState(initialDate);
  const [textAlign, setTextAlign] = useState("flex-start");
  const { hour, minute, ampm } = getDates(date);

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
        lastPress={() => {
          navigation.navigate(viewStr);
        }}
      />
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
          textAlign={textAlign}
        />
      </ScrollView>
      
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
