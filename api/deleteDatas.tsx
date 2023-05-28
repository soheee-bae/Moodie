import { ref, remove } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { DataType } from "../hooks/uploadData";

export const deletDatas = async (data: DataType) => {
  return new Promise(function (resolve, reject) {
    const tasksRef = ref(FIRESTORE_DB, "diary/" + data.name);

    remove(tasksRef)
      .then(() => {
        resolve("success");
      })
      .catch((err) => {
        console.log(err);
        reject();
      });
  });
};
