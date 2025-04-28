// It's should'nt share in online....It's very risky!

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBPicf8R34KibA2U1WBEbi1iGIsjT9LEYc",
  authDomain: "simple-firebase-auth-96fef.firebaseapp.com",
  projectId: "simple-firebase-auth-96fef",
  storageBucket: "simple-firebase-auth-96fef.firebasestorage.app",
  messagingSenderId: "740021023980",
  appId: "1:740021023980:web:4cbefb5ed1fdb1e39c61c9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize firebase Authentication and get a reference to the service 
export const auth = getAuth(app)