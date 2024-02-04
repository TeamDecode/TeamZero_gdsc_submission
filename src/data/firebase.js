// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAG37XBUEQKNTQrOT63snGgsTXvznHLIdY",
  authDomain: "decode-studentapp.firebaseapp.com",
  databaseURL: "https://decode-studentapp-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "decode-studentapp",
  storageBucket: "decode-studentapp.appspot.com",
  messagingSenderId: "899383550517",
  appId: "1:899383550517:web:5c7c688da1f148c10cc77c",
  measurementId: "G-DQ07NVJW6B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);