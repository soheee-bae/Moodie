import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

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
export const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_STORAGE = getStorage(FIREBASE_APP);
