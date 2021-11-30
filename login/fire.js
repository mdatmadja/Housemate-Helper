// Import the functions you need from the SDKs you need
//import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase';
//import 'firebase/auth';
//import 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCs5pqXeqdIxcJ0_HLhlXJQh_2h_bCWK2Y",
  authDomain: "login-c06a0.firebaseapp.com",
  projectId: "login-c06a0",
  storageBucket: "login-c06a0.appspot.com",
  messagingSenderId: "658345143118",
  appId: "1:658345143118:web:2a98c426d328d7c8fc4c1f"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export default app;