import firebase from "firebase/compat/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAIqe5qy1lLmFqbd_mW1RcnG10BCRypn8Y",
  authDomain: "malhub-db.firebaseapp.com",
  projectId: "malhub-db",
  storageBucket: "malhub-db.appspot.com",
  messagingSenderId: "309121821303",
  appId: "1:309121821303:web:f9f63e7eccb34e6834f472",
});

export const auth = app.auth();
export default app;
