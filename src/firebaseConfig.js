// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBO9a2QMkLAC0rmmaugKRaEwhSxrJQFq48",
  authDomain: "dtc-website-7e178.firebaseapp.com",
  projectId: "dtc-website-7e178",
  storageBucket: "dtc-website-7e178.firebasestorage.app",
  messagingSenderId: "903589248427",
  databaseURL: "https://dtc-website-7e178-default-rtdb.firebaseio.com/",
  appId: "1:903589248427:web:069ed35c83836299f4e6ee"
};

// Initialize Firebase only if it hasn't been initialized already
let app;
if (!getApps().length) {
  app = initializeApp(firebaseConfig);
} else {
  app = getApp();
}
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database };
