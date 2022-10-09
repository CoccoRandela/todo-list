// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, connectAuthEmulator } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmZRI5uVjPo8uunJhbLYoVU9yB0ZYB2ME",
  authDomain: "todo-list-b322d.firebaseapp.com",
  projectId: "todo-list-b322d",
  storageBucket: "todo-list-b322d.appspot.com",
  messagingSenderId: "518845988670",
  appId: "1:518845988670:web:9a649e400f848db375366f",
  measurementId: "G-5KMD27NZ9V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
connectAuthEmulator(auth, 'http://localhost:9099')
const analytics = getAnalytics(app);