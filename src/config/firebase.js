import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDHg1MJebhFzbdGcFLUezrDRsAMjxX1lNA",
  authDomain: "omd-clothing.firebaseapp.com",
  projectId: "omd-clothing",
  storageBucket: "omd-clothing.appspot.com",
  messagingSenderId: "286969672722",
  appId: "1:286969672722:web:0e7f200a3d935347a914cb",
};

const app = firebase.initializeApp(firebaseConfig);
export default app;
