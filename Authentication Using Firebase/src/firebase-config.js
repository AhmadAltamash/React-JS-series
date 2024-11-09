import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB_dO7EYj3R9L0xLCer4KsHeONdS-8vWkg",
  authDomain: "fir-with-react-bd789.firebaseapp.com",
  projectId: "fir-with-react-bd789",
  storageBucket: "fir-with-react-bd789.firebasestorage.app",
  messagingSenderId: "445968208354",
  appId: "1:445968208354:web:3f2c9bdd5b848efb3de9bb",
  measurementId: "G-P8BDZTF7BF"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)