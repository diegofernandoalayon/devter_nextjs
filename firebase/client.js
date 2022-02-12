// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
// import {auth} from 'firebase/app'
import {getAuth, GithubAuthProvider, signInWithPopup} from 'firebase/auth'
// import { signInWithPopup } from 'firebase/auth';
// import { signInWithPhoneNumber } from 'firebase/auth';
// import auth from 'firebase/auth'


const firebaseConfig = {
  apiKey: "AIzaSyC_9T3SJj6TFzh52f0j9pXI7WPNeb0gAmE",
  authDomain: "devter-5c79b.firebaseapp.com",
  projectId: "devter-5c79b",
  storageBucket: "devter-5c79b.appspot.com",
  messagingSenderId: "537878134015",
  appId: "1:537878134015:web:0cdd57e7574970794460ca",
  measurementId: "G-JXMZMQSE3H"
};


initializeApp(firebaseConfig)
const auth = getAuth()

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth,githubProvider)
}