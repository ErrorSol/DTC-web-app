// firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase, get, ref } from "firebase/database";


const firebaseConfig = {
  apiKey: "AIzaSyBO9a2QMkLAC0rmmaugKRaEwhSxrJQFq48",
  authDomain: "dtc-website-7e178.firebaseapp.com",
  projectId: "dtc-website-7e178",
  storageBucket: "dtc-website-7e178.firebasestorage.app",
  messagingSenderId: "903589248427",
  databaseURL: "https://dtc-website-7e178-default-rtdb.firebaseio.com/",
  appId: "1:903589248427:web:069ed35c83836299f4e6ee"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const database = getDatabase(app);

export { auth, database, get, getDatabase, ref };
export default app;



// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
  
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
