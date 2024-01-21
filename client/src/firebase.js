// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-7a288.firebaseapp.com",
  projectId: "mern-blog-7a288",
  storageBucket: "mern-blog-7a288.appspot.com",
  messagingSenderId: "321644753722",
  appId: "1:321644753722:web:18f7b8cee721f859395603"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);