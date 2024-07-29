// Import the functions you need from the SDKs you need
import { initializeApp, } from "firebase/app";
import { getDatabase, } from 'firebase/database';
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvMk3y8OLp-q3spoG3-DKpOiGXPjT9ssQ",
  authDomain: "musenews-3c62e.firebaseapp.com",
  databaseURL: "https://musenews-3c62e-default-rtdb.firebaseio.com/",
  projectId: "musenews-3c62e",
  storageBucket: "musenews-3c62e.appspot.com",
  messagingSenderId: "195632842456",
  appId: "1:195632842456:web:d3b8302697f074f1e1b9ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);


export { app, database, auth };
