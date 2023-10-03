// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCp6CLGYTGlVZGfFxPc_fKGtWqoMI3yXAM",
  authDomain: "the-news-dragon-c4b4b.firebaseapp.com",
  projectId: "the-news-dragon-c4b4b",
  storageBucket: "the-news-dragon-c4b4b.appspot.com",
  messagingSenderId: "90418486162",
  appId: "1:90418486162:web:782289d117fd169e5bff4b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;