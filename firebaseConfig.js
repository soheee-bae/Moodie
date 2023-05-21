import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getDatabase } from "firebase/database";

// Initialize Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDyU8agQCcaA1Lrd_J5tG3oTdaUmq8_Ilk",
  authDomain: "moodie-1a369.firebaseapp.com",
  projectId: "moodie-1a369",
  storageBucket: "moodie-1a369.appspot.com",
  messagingSenderId: "252813573462",
  appId: "1:252813573462:web:339ec0ae1ec454f89d2af7",
};

export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIRESTORE_DB = getDatabase(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
