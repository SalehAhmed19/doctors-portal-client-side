// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWZN_ojQrqpFPbMd6IiNkbJji40Eo-yHA",
  authDomain: "doctors-portal-7f9c4.firebaseapp.com",
  projectId: "doctors-portal-7f9c4",
  storageBucket: "doctors-portal-7f9c4.appspot.com",
  messagingSenderId: "627133114939",
  appId: "1:627133114939:web:72fb1386fba63d0ee58a1e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
