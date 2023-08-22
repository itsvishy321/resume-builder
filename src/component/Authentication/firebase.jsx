// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7cC1eFuPnd1TVjPB49loxh0_piNqFKM",
  authDomain: "resume-builder-6cb91.firebaseapp.com",
  projectId: "resume-builder-6cb91",
  storageBucket: "resume-builder-6cb91.appspot.com",
  messagingSenderId: "133426718671",
  appId: "1:133426718671:web:f34af149817c8cae8194ba",
  measurementId: "G-BBX3NHRHVZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);