import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfLPZE7YgEZSKHHsmWlnRRvKrsL8z-IU0",
  authDomain: "fifazine-90892.firebaseapp.com",
  projectId: "fifazine-90892",
  storageBucket: "fifazine-90892.appspot.com",
  messagingSenderId: "969514142070",
  appId: "1:969514142070:web:b5dba2afe62b04c2b59257"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default db;
