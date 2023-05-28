import { Dispatch, SetStateAction } from "react";
import { ref, set, update } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { DataType } from "../hooks/uploadData";

export const updateDatas = async (
  data: DataType,
  fileUrl: any,
  setUploading: Dispatch<SetStateAction<boolean>>
) => {
  return new Promise(function (resolve, reject) {
    setUploading(true);
    update(ref(FIRESTORE_DB, "diary/" + data.date), {
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
