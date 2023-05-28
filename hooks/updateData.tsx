import { Dispatch, SetStateAction } from "react";

import { uploadImage } from "./uploadImage";
import { DataType } from "./uploadData";
import { updateDatas } from "../api/updateDatas";

export const updateData = async (
  data: DataType,
  uri: string,
  setUploading: Dispatch<SetStateAction<boolean>>
) => {
  if (uri) {
    const fileUrl = await uploadImage(uri, setUploading);
    let res = await updateDatas(data, fileUrl, setUploading);
    return res;
  } else {
    let res = await updateDatas(data, "", setUploading);
    return res;
  }
};
