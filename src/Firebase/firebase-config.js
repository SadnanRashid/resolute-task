import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyA0keQ8EmVRIKtEwoxOWh-wpVUnkqUh4pE",
  authDomain: "resolute-task.firebaseapp.com",
  projectId: "resolute-task",
  storageBucket: "resolute-task.appspot.com",
  messagingSenderId: "774988444740",
  appId: "1:774988444740:web:8991af516c40ad88443811",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };
