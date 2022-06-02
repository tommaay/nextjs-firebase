import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2A10oIu7ALi3OjePMDssHcwKNe6MV6o4",
  authDomain: "firebasic-tomster.firebaseapp.com",
  projectId: "firebasic-tomster",
  storageBucket: "firebasic-tomster.appspot.com",
  messagingSenderId: "898463938692",
  appId: "1:898463938692:web:2c14548cb087920bc9ead1",
  measurementId: "G-HVR7SHEDPT",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
