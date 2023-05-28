import React, { Dispatch, SetStateAction, useContext } from "react";
import { StyleSheet, View } from "react-native";
import { IconButton } from "@react-native-material/core";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "../contexts/ThemeContext";
import { theme } from "../styles/theme";
import { DataType } from "../hooks/uploadData";
import { deletDatas } from "../api/deleteDatas";
import ViewContext from "../contexts/ViewContext";
import DataContext from "../contexts/DataContext";

interface MoodDetailsToolsProps {
  moodData: DataType;
  navigation: any;
  setUploading: Dispatch<SetStateAction<boolean>>;
  setOpen: Dispatch<SetStateAction<boolean>>;
}
const MoodDetailsTools = (props: MoodDetailsToolsProps) => {
  const { moodData, navigation, setUploading, setOpen } = props;
  const { background } = useContext(ThemeContext);
  const { view } = useContext(ViewContext);
  const { getDatas } = useContext(DataContext);

  const handleDelete = async () => {
    setUploading(true);
    const res = await deletDatas(moodData);

    if (res === "success") {
      setOpen(true);
      getDatas();
      setTimeout(() => {
        setUploading(false);
        navigation.navigate(view);
      }, 3000);
    }
  };

  const handleEdit = () => {
    navigation.navigate("EditMood", {
      moodData: moodData,
    });
  };

  return (
    <View style={styles.tools}>
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="pencil-outline"
            size={20}
            color={theme.colors.black}
          />
        }
        onPress={handleEdit}
        color={background}
      />
      <IconButton
        icon={
          <MaterialCommunityIcons
            name="trash-can-outline"
            size={20}
            color={theme.colors.black}
          />
        }
        onPress={handleDelete}
        color={background}
      />
    </View>
  );
};

export default MoodDetailsTools;

const styles = StyleSheet.create({
  tools: {
    paddingHorizontal: 15,
    display: "flex",
    flexDirection: "row",
  },
});
