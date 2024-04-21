// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, GithubAuthProvider, FacebookAuthProvider } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrXZatbKLDG0e1Tubgn0FlUWAW0VCRpBU",
  authDomain: "react-auth-c73df.firebaseapp.com",
  projectId: "react-auth-c73df",
  storageBucket: "react-auth-c73df.appspot.com",
  messagingSenderId: "39707867942",
  appId: "1:39707867942:web:4750951849da89fd829fe7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

export const googleProvider = new GoogleAuthProvider()
export const githubProvider = new GithubAuthProvider()
export const facebookProvider = new FacebookAuthProvider()