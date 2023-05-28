import { ref, child, onValue } from "firebase/database";
import { FIRESTORE_DB } from "../firebaseConfig";
import { DataType } from "../hooks/uploadData";

export interface FullDataType {
  data: DataType[];
  newDate: string;
}

export const getAllDatas = async () => {
  const dbRef = ref(FIRESTORE_DB, `diary/`);
  return new Promise(function (resolve, reject) {
    onValue(dbRef, (snapshot) => {
      try {
        const entries = Object.entries(snapshot.val());
        const data = entries.map((data) => {
          return { name: data[0], ...(data[1] as {}) };
        });
        resolve(data || []);
      } catch (err) {
        console.log(err);
        reject();
      }
    });
  });
};
