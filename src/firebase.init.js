// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApbv3QR38_Ab9xMnF1GBONcuJkr_oyrGs",
  authDomain: "education-management-sys-48281.firebaseapp.com",
  projectId: "education-management-sys-48281",
  storageBucket: "education-management-sys-48281.appspot.com",
  messagingSenderId: "810460011738",
  appId: "1:810460011738:web:d4aba058416c73ca7159e3",
  measurementId: "G-EQM6TTH44P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

export default auth;