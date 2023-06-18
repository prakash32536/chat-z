// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSA4KCX_VvTU2nymZnSt6i4U7o3pSuL6c",
  authDomain: "chat-z-578fa.firebaseapp.com",
  projectId: "chat-z-578fa",
  storageBucket: "chat-z-578fa.appspot.com",
  messagingSenderId: "1016859557359",
  appId: "1:1016859557359:web:f038138b7cd45bc61a8a1a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);