import { ref, child, get } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { DataType } from "../hooks/uploadData";

export interface FullDataType {
  data: DataType[];
  newDate: string;
}

export const getAllDatas = async () => {
  const dbRef = ref(FIRESTORE_DB);
  return new Promise(function (resolve, reject) {
    get(child(dbRef, `diary/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const entries = Object.entries(snapshot.val());
          const data = entries.map((data) => {
            return { name: data[0], ...(data[1] as {}) };
          });
          resolve(data);
        } else {
          return [];
        }
      })
      .catch((error) => {
        console.error(error);
        reject();
      });
  });
};
