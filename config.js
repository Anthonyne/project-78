import *as firebase from "firebase"
require('@firebase/firestore')
var firebaseConfig = {
    apiKey: "AIzaSyAgWXOhuMJCUk7hmgZzNw2MfRCkAHKeKSk",
    authDomain: "wily-app-6c812.firebaseapp.com",
    projectId: "wily-app-6c812",
    storageBucket: "wily-app-6c812.appspot.com",
    messagingSenderId: "397635727206",
    appId: "1:397635727206:web:98b5789994ab2c247e62a7"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore()