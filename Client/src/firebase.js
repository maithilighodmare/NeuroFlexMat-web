// src/firebase.js
import { initializeApp, getApps } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIza...", // your actual config
  authDomain: "neuroflextmat.firebaseapp.com",
  databaseURL: "https://neuroflextmat-default-rtdb.firebaseio.com",
  projectId: "neuroflextmat",
  storageBucket: "neuroflextmat.appspot.com",
  messagingSenderId: "827882921743",
  appId: "1:827882921743:web:..."
};

const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

const database = getDatabase(app);

export { database };
