// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup,signOut } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'
const key = process.env.key
// Replace this with your Firebase config
const firebaseConfig = {
    apiKey:   `${key}`,
    authDomain: "app1-9bb9b.firebaseapp.com",
    projectId: "app1-9bb9b",
    storageBucket: "app1-9bb9b.firebasestorage.app",
    messagingSenderId: "84487604854",
    appId: "1:84487604854:web:83786e7cbb2dae08eaed57",
    measurementId: "G-6XX23GR9N4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// Initialize Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const logOut = () =>{
    
    return signOut(auth)
}

export { auth, provider, signInWithPopup ,logOut ,db };