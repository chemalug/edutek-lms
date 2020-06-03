import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyCsxfYwxN7QiMtmAwrToGr5X3Q6sodFw6k",
  authDomain: "encodely-proj-fire.firebaseapp.com",
  databaseURL: "https://encodely-proj-fire.firebaseio.com",
  projectId: "encodely-proj-fire",
  storageBucket: "encodely-proj-fire.appspot.com",
  messagingSenderId: "380242632824",
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

const db = firebase.database();
const auth = firebase.auth();
const firestore = firebase.firestore();

export { db, auth, firestore, firebase };
