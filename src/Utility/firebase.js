// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import {getAuth} from "firebase/auth";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBp7ZUnNWdxrM3jdC4d7pbm1Rix2ya_WDU",
  authDomain: "clone-4c255.firebaseapp.com",
  projectId: "clone-4c255",
  storageBucket: "clone-4c255.appspot.com",
  messagingSenderId: "729783889691",
  appId: "1:729783889691:web:6dc29abf2d92c3aa13adbe",
  measurementId: "G-VD54ZXNXV4"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();