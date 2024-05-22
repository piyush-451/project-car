import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCeFGEcmsBHl-CB1vgACe0akKR-jh_KBX0",
    authDomain: "car-rental-apis.firebaseapp.com",
    projectId: "car-rental-apis",
    storageBucket: "car-rental-apis.appspot.com",
    messagingSenderId: "492549653030",
    appId: "1:492549653030:web:7b9c7c4670d69f641e1ce7",
    measurementId: "G-TFYYL5V9DD"
};
  
  // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {app,auth}; 