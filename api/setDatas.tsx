import { Dispatch, SetStateAction } from "react";
import { ref, set } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { DataType } from "../hooks/uploadData";

export const setDatas = async (
  data: DataType,
  fileUrl: any,
  setUploading: Dispatch<SetStateAction<boolean>>
) => {
  return new Promise(function (resolve, reject) {
    setUploading(true);
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
};
