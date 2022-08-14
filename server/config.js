const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyAy3-mHqfNyj7uHr4AVD--DPd7nw4_UNHQ",
  authDomain: "lizwejs.firebaseapp.com",
  projectId: "lizwejs",
  storageBucket: "lizwejs.appspot.com",
  messagingSenderId: "1042933831937",
  appId: "1:1042933831937:web:2872e192ba4b5ba5796300",
  measurementId: "G-2GLG1PW5ZJ",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Items = db.collection("items");

module.exports = Items;
