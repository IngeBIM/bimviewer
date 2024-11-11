// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref as databaseRef } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAXMledOEvT_IzICn52wOWDeapFUlCSs7I",
  authDomain: "bimviewer-c0824.firebaseapp.com",
  projectId: "bimviewer-c0824",
  storageBucket: "bimviewer-c0824.firebasestorage.app",
  messagingSenderId: "686177392258",
  appId: "1:686177392258:web:29170044c3163f62c0869b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Exportar las referencias necesarias
export const ref = databaseRef(getDatabase(app));
export const firebaseAuth = getAuth(app);