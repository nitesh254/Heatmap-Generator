// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration, replace it with your project keys
const firebaseConfig = {
  apiKey: "AIzaSyC7gw7g79kNjhJ7cbri6dUadRV5BC-oEho",
  authDomain: "assignment-5a359.firebaseapp.com",
  projectId: "assignment-5a359",
  storageBucket: "assignment-5a359.appspot.com",
  messagingSenderId: "470684465175",
  appId: "1:470684465175:web:287f9d192c1b4dcdb68452",
  measurementId: "G-46WPGVVE4E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);