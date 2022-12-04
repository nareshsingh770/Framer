import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQLLZJrc3BnwVdBjkC1ocac04RcbrE3dc",
  authDomain: "framer-2236e.firebaseapp.com",
  projectId: "framer-2236e",
  storageBucket: "framer-2236e.appspot.com",
  messagingSenderId: "767081974551",
  appId: "1:767081974551:web:e4a59468b56d47ca268552"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)