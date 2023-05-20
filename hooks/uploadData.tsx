import { FIREBASE_STORAGE } from "../firebaseConfig";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { uploadImage } from "./uploadImage";
import { DataType } from "../pages/AddMood";

export const uploadData = async (
  data: DataType,
  uri: string,
  setUploading: (uploading: boolean) => void
) => {
  let fileUrl = await uploadImage(uri, setUploading);

  if (fileUrl !== null) {
    postsRef.push().set({
      ...data,
      fileUrl,
    });
  }
};
