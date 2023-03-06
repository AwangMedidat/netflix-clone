// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBa1IBQYcJxHXPxW97t2CWCTpFRn00xmc0",
  authDomain: "netflix-clone-6a67c.firebaseapp.com",
  projectId: "netflix-clone-6a67c",
  storageBucket: "netflix-clone-6a67c.appspot.com",
  messagingSenderId: "408495295962",
  appId: "1:408495295962:web:3ce501bce9203abf6084e3"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export {auth,db}