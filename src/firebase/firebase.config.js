// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCklS4N9iJJ0fDIX9DEyFPhm1898quvrmM",
  authDomain: "coffee-store-7bd39.firebaseapp.com",
  projectId: "coffee-store-7bd39",
  storageBucket: "coffee-store-7bd39.appspot.com",
  messagingSenderId: "466427684768",
  appId: "1:466427684768:web:a749cec7cdc65bd16966c5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;