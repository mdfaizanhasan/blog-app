// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-83f56.firebaseapp.com",
  projectId: "blog-app-83f56",
  storageBucket: "blog-app-83f56.appspot.com",
  messagingSenderId: "917405250271",
  appId: "1:917405250271:web:eaeafa47af3b2ee40b2f6a",
  measurementId: "G-259ZTB1M1H"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);