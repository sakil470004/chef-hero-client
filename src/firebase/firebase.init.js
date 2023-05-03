// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAR5K62VwDzORRzHMOn64KP_AvcvUW3TG4",
    authDomain: "chef-hero.firebaseapp.com",
    projectId: "chef-hero",
    storageBucket: "chef-hero.appspot.com",
    messagingSenderId: "573398288021",
    appId: "1:573398288021:web:163798c87344aa4e69bd9c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;