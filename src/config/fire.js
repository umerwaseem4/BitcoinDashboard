import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCyJyC9948kxLbOTNkfWQrzUfrrUROSiLc",
  authDomain: "bitcoindashboard-1c3ac.firebaseapp.com",
  databaseURL: "https://bitcoindashboard-1c3ac.firebaseio.com",
  projectId: "bitcoindashboard-1c3ac",
  storageBucket: "bitcoindashboard-1c3ac.appspot.com",
  messagingSenderId: "50591546875",
  appId: "1:50591546875:web:9cb6a72600483bdd091f5e",
  measurementId: "G-EDBQPM41Z6",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
