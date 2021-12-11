/* eslint-disable import/no-anonymous-default-export */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDHg1MJebhFzbdGcFLUezrDRsAMjxX1lNA",
  authDomain: "omd-clothing.firebaseapp.com",
  projectId: "omd-clothing",
  storageBucket: "omd-clothing.appspot.com",
  messagingSenderId: "286969672722",
  appId: "1:286969672722:web:0e7f200a3d935347a914cb",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
