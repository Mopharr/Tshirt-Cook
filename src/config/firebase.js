/* eslint-disable import/no-anonymous-default-export */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHg1MJebhFzbdGcFLUezrDRsAMjxX1lNA",
  authDomain: "omd-clothing.firebaseapp.com",
  projectId: "omd-clothing",
  storageBucket: "omd-clothing.appspot.com",
  messagingSenderId: "286969672722",
  appId: "1:286969672722:web:0e7f200a3d935347a914cb",
  measurementId: "G-QC3QK8MTJ2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export default { app, db };
