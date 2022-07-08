// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
const firebaseConfig = {
  apiKey: "AIzaSyDw1TwUfNyg6sfbyM4Mm-T8uzjhVsCO1jc",
  authDomain: "challenge-97cc1.firebaseapp.com",
  projectId: "challenge-97cc1",
  storageBucket: "challenge-97cc1.appspot.com",
  messagingSenderId: "599483332224",
  appId: "1:599483332224:web:b575a5ad750e2febf31865",
  measurementId: "G-69RQ6GVH88"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };