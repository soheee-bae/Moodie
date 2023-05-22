import { Dispatch, SetStateAction, useState } from "react";
import { ref, set } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { uploadImage } from "./uploadImage";

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

    let res = await setData(data, fileUrl);
    return res;
  } else {
    setData(data, "");
  }
};

async function setData(data: DataType, fileUrl: any) {
  return new Promise(function (resolve, reject) {
    set(ref(FIRESTORE_DB, "diary/" + data.title + data.date), {
      ...data,
      fileUrl,
    })
      .then(() => {
        resolve("success");
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
}
