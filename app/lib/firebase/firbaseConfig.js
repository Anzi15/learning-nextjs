// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAUP7Mncn62Xe0WYGC9TgqsYGBmBD3eXQU",
  authDomain: "al-zehra.firebaseapp.com",
  databaseURL: "https://al-zehra-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "al-zehra",
  storageBucket: "al-zehra.appspot.com",
  messagingSenderId: "409292615047",
  appId: "1:409292615047:web:a1282da2b9182c2fdbb722",
  measurementId: "G-MXCEGHNV6P"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);