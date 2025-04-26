import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD-lcuhCwUfFoh9_3xtCydHyvE-5XD2n0c",
  authDomain: "fir-basics-b944c.firebaseapp.com",
  projectId: "fir-basics-b944c",
  storageBucket: "fir-basics-b944c.firebasestorage.app",
  messagingSenderId: "622589930705",
  appId: "1:622589930705:web:0b13454c2a838d2a8729f0",
  measurementId: "G-R7BRWVNBY4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app, auth };