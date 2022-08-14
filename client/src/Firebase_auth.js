// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy3-mHqfNyj7uHr4AVD--DPd7nw4_UNHQ",
  authDomain: "lizwejs.firebaseapp.com",
  projectId: "lizwejs",
  storageBucket: "lizwejs.appspot.com",
  messagingSenderId: "1042933831937",
  appId: "1:1042933831937:web:deec354ef85712cb796300",
  measurementId: "G-X9BRZXFE4P",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
