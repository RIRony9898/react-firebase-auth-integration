// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDagUmWkDweA63U2gMFTcRnxOeGh01CUdQ",
  authDomain: "react-auth-integration-d6771.firebaseapp.com",
  projectId: "react-auth-integration-d6771",
  storageBucket: "react-auth-integration-d6771.firebasestorage.app",
  messagingSenderId: "595204824083",
  appId: "1:595204824083:web:d3f834a6f16e8f0bc6f3e6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);