// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBzCl1ElkCyJEpa2IiFfowKW1tu2Bn4zh4",
  authDomain: "plash-2db20.firebaseapp.com",
  projectId: "plash-2db20",
  storageBucket: "plash-2db20.appspot.com",
  messagingSenderId: "76883971796",
  appId: "1:76883971796:web:c30053f66e2e8fbc13f541",
  measurementId: "G-DZ549P873C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);