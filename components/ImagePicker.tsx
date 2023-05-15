import React from "react";
import { Pressable } from "react-native";
import * as ImagePicker from "expo-image-picker";
import { Octicons } from "@expo/vector-icons";

interface ImagePickerProps {
  setImg: (img: string) => void;
}
export default function ImagePickerComp(props: ImagePickerProps) {
  const { setImg } = props;

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };

  return (
    <Pressable onPress={pickImage}>
      <Octicons name="image" size={24} />
    </Pressable>
  );
}
