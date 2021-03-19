// database/firebaseDb.js

import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBVQmQoXGzWFdlfAVOBm-ii4XqytgmlcO4",
  authDomain: "reactnativemoviematcher.firebaseapp.com",
  projectId: "reactnativemoviematcher",
  storageBucket: "reactnativemoviematcher.appspot.com",
  messagingSenderId: "184818028497",
  appId: "1:184818028497:web:6f055d82767ad9742a1af0",
  measurementId: "G-PV1HCGDGP7",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
