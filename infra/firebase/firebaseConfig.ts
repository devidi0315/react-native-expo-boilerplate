
import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyAiUQpJ2tvuhpTqjMq2XQCrYC1UYBxg3Pw",
  authDomain: "react-native-boilerplate-expo.firebaseapp.com",
  projectId: "react-native-boilerplate-expo",
  storageBucket: "react-native-boilerplate-expo.appspot.com",
  messagingSenderId: "423803959768",
  appId: "1:423803959768:web:d3c15d2fb3e93b85fa5aad",
  measurementId: "G-TQYKXC3HP7"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);