// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAu2MUjroRf9apk0tiBcu53iy_7Opr1DF8",
  authDomain: "fumbo-ff4a3.firebaseapp.com",
  projectId: "fumbo-ff4a3",
  storageBucket: "fumbo-ff4a3.firebasestorage.app",
  messagingSenderId: "936890552174",
  appId: "1:936890552174:web:155ca3297cbfc05fc17b7f",
  measurementId: "G-XX10HBFGQR",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
