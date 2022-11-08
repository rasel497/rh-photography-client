// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBksx4KmywsSrDgKQT7z8lc10ucCEPuTYQ",
    authDomain: "rh-photography.firebaseapp.com",
    projectId: "rh-photography",
    storageBucket: "rh-photography.appspot.com",
    messagingSenderId: "103355221377",
    appId: "1:103355221377:web:02a41d47237585d3459480"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;