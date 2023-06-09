import React, { useContext } from "react";
import { IconButton } from "@react-native-material/core";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import ThemeContext from "../contexts/ThemeContext";

interface ImagePickerProps {
  img: string;
  setImg: (img: string) => void;
}
export default function ImagePickerComp(props: ImagePickerProps) {
  const { img, setImg } = props;
  const { background } = useContext(ThemeContext);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  return (
    <IconButton
      icon={
        <MaterialCommunityIcons name="image-outline" size={24} color="black" />
      }
      onPress={pickImage}
      color={background}
    />
  );
}
