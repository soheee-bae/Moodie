import { Dispatch, SetStateAction } from "react";
import { FIREBASE_STORAGE } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export const uploadImage = async (
  uri: string,
  setUploading: Dispatch<SetStateAction<boolean>>
) => {
  setUploading(true);

  const blob: Blob = await new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.onload = function () {
      resolve(xhr.response);
    };
    xhr.onerror = function () {
      reject(new TypeError("network request failed"));
    };
    xhr.responseType = "blob";
    xhr.open("GET", uri, true);
    xhr.send(null);
  });

  const metadata = {
    contentType: "image/jpeg",
  };

  return new Promise(function (resolve, reject) {
    const storageRef = ref(FIREBASE_STORAGE, "images/" + Date.now());
    const uploadTask = uploadBytesResumable(storageRef, blob, metadata);

    uploadTask.on(
      "state_changed",
      function (snapshot) {
        var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      function error(err) {
        console.log("error", err);
        reject();
      },
      function complete() {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          resolve(downloadURL);
        });
      }
    );
  });
};
