import { Dispatch, SetStateAction, useContext } from "react";
import { ref, set } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { uploadImage } from "./uploadImage";
import ThemeContext from "../contexts/ThemeContext";
import FontContext from "../contexts/FontContext";

type DataType = {
  date: string;
  mood: number;
  title: string;
  content: string;
  alignment: "center" | "left" | "right" | undefined;
  highlight: string;
};

export const uploadData = async (
  data: DataType,
  uri: string,
  setUploading: Dispatch<SetStateAction<boolean>>
) => {
  if (uri) {
    const fileUrl = await uploadImage(uri, setUploading);
    setData(data, fileUrl);
  } else {
    setData(data, "");
  }
};

function setData(data: DataType, fileUrl: any) {
  set(ref(FIRESTORE_DB, "diary/" + data.title + data.date), {
    ...data,
    fileUrl,
  })
    .then(() => {
      return "success";
    })
    .catch((err) => {
      console.log(err);
      return "failed";
    });
}
