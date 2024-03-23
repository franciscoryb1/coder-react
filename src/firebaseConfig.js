// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyADYFXOD_SEL94hNdJwZzf8x0PHq2iUXX0",
  authDomain: "coder-react-5430.firebaseapp.com",
  projectId: "coder-react-5430",
  storageBucket: "coder-react-5430.appspot.com",
  messagingSenderId: "385060636726",
  appId: "1:385060636726:web:1cb1bd1d1163ba2f447097",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
