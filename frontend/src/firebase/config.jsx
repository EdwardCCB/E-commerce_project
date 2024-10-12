// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB3L07TJby7Wwm7m4MQY8ali3NlGA8HNOs",
    authDomain: "e-commerce-9fd14.firebaseapp.com",
    projectId: "e-commerce-9fd14",
    storageBucket: "e-commerce-9fd14.appspot.com",
    messagingSenderId: "592148854517",
    appId: "1:592148854517:web:3321f9eeb86fb5b2fbb7bc",
    measurementId: "G-ZYN8TRTN1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };