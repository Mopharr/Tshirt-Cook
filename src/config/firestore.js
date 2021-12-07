/* eslint-disable import/no-anonymous-default-export */
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAIqe5qy1lLmFqbd_mW1RcnG10BCRypn8Y",
  authDomain: "malhub-db.firebaseapp.com",
  projectId: "malhub-db",
  storageBucket: "malhub-db.appspot.com",
  messagingSenderId: "309121821303",
  appId: "1:309121821303:web:f9f63e7eccb34e6834f472",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default { getFirestore, app };
