// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6h6gcMVnwfNyWhpmxAYYGBjvazKzDA8A",
  authDomain: "vite-contact-444f3.firebaseapp.com",
  projectId: "vite-contact-444f3",
  storageBucket: "vite-contact-444f3.firebasestorage.app",
  messagingSenderId: "574119721141",
  appId: "1:574119721141:web:16de730dea95134aa1e6fc"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);