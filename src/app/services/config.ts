import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBJZ4D7yPSqqCAQkhxdZEOVCog3aixFluY",
  authDomain: "app-crud-cc090.firebaseapp.com",
  databaseURL: "https://app-crud-cc090-default-rtdb.firebaseio.com",
  projectId: "app-crud-cc090",
  storageBucket: "app-crud-cc090.firebasestorage.app",
  messagingSenderId: "917830128652",
  appId: "1:917830128652:web:41735d062dc7eaa1a00a29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app)