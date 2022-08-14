const firebase = require("firebase");
const firebaseConfig = {
  apiKey: 'Your API Key' ,
  authDomain: "[redacted]",
  projectId: "[redacted]",
  storageBucket: "[redacted]",
  messagingSenderId: "[redacted]",
  appId: "[redacted]",
  measurementId: "[redacted]",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Items = db.collection("items");

module.exports = Items;
