import { initializeApp } from "firebase/app";
import { getAuth  } from "firebase/auth";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-9b4cb.firebaseapp.com",
  projectId: "store-tutorial-9b4cb",
  storageBucket: "store-tutorial-9b4cb.appspot.com",
  messagingSenderId: "1008844881889",
  appId: "1:1008844881889:web:9684e2933377f7185edca0"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();