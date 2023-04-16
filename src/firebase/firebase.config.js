// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4VU06-N1VERrCmBc-yL_JjMlL0jbNXH4",
  authDomain: "doctors-portal-910b9.firebaseapp.com",
  projectId: "doctors-portal-910b9",
  storageBucket: "doctors-portal-910b9.appspot.com",
  messagingSenderId: "157005387246",
  appId: "1:157005387246:web:78d37e76d069666b3beaff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;