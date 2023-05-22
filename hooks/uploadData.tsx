import { Dispatch, SetStateAction } from "react";

import { uploadImage } from "./uploadImage";
import { setDatas } from "../api/setDatas";

export type DataType = {
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
    let res = await setDatas(data, fileUrl, setUploading);
    return res;
  } else {
    let res = await setDatas(data, "", setUploading);
    return res;
  }
};
