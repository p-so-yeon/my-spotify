// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7PAGvGunDm-lvN9ZI5fdTJLPY_P7Ma8Q",
  authDomain: "register-d1e7e.firebaseapp.com",
  projectId: "register-d1e7e",
  storageBucket: "register-d1e7e.appspot.com",
  messagingSenderId: "651747673382",
  appId: "1:651747673382:web:3c7debd4e3cb98007e6de7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
