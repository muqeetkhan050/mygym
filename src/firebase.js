// firebase.js

import { initializeApp } from "firebase/app"; 
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyC-k8o4v7XV-sKALnCyYetbKp1cDS2N0FU",
  authDomain: "gymworkoutapp-85d1e.firebaseapp.com",
  projectId: "gymworkoutapp-85d1e",
  storageBucket: "gymworkoutapp-85d1e.appspot.com", 
  messagingSenderId: "990891300170",
  appId: "1:990891300170:web:31c8a03e02842556ea9db3",
  measurementId: "G-66X8M9MRWJ"
};

// ✅ Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// ✅ Export auth and Google provider
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
