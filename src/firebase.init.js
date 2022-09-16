// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWwzn-vlLa8h9d0-9HhdiZ0Nx14QQPpG4",
  authDomain: "genius-car-services-de506.firebaseapp.com",
  projectId: "genius-car-services-de506",
  storageBucket: "genius-car-services-de506.appspot.com",
  messagingSenderId: "164578876780",
  appId: "1:164578876780:web:4819e23185a20c63dca749"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;