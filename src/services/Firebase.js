import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBUKE9Fn5kq2xNAP0yMBGH-h-NfLbOL_kU",
  authDomain: "chatterbox-c1c47.firebaseapp.com",
  databaseURL: "https://chatterbox-c1c47.firebaseio.com",
  projectId: "chatterbox-c1c47",
  storageBucket: "chatterbox-c1c47.appspot.com",
  messagingSenderId: "542306143050",
  appId: "1:542306143050:web:9e023a39ac7032b526cfb3",
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.database();
export const auth = firebase.auth();
