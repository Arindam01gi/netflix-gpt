// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGdamP-WoR6sZq9_KFWGVWH3GhQxqlsp0",
  authDomain: "netflix-gpt-d9c17.firebaseapp.com",
  projectId: "netflix-gpt-d9c17",
  storageBucket: "netflix-gpt-d9c17.firebasestorage.app",
  messagingSenderId: "595102175505",
  appId: "1:595102175505:web:bfee41102f2addd6eebcb0",
  measurementId: "G-QLNL8LV6TZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();