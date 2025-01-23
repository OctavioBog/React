import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAfBZcJkW9VX32UeEzwtnhwqhMhMw7EDo4",
  authDomain: "smartzone-2025.firebaseapp.com",
  projectId: "smartzone-2025",
  storageBucket: "smartzone-2025.firebasestorage.app",
  messagingSenderId: "506202338272",
  appId: "1:506202338272:web:8c68be4400e78119c37185"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore();


export default db;