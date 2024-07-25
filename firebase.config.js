// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCjfwmuvKB4oi65iM2ef7lElM9WKQFZqIY",
  authDomain: "restaurant-management-79b97.firebaseapp.com",
  projectId: "restaurant-management-79b97",
  storageBucket: "restaurant-management-79b97.appspot.com",
  messagingSenderId: "400855885194",
  appId: "1:400855885194:web:8da60d68724634b9881473"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app