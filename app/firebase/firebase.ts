import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB66kA3rljaymgPZM8rnF2Q7nePvbDLOX8",
  authDomain: "realmbank-911a3.firebaseapp.com",
  projectId: "realmbank-911a3",
  storageBucket: "realmbank-911a3.appspot.com",
  messagingSenderId: "690897518075",
  appId: "1:690897518075:web:08080aa7294627e5745f5e",
  measurementId: "G-3J62VF53ZN"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };