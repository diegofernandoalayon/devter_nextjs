// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app';
// import {auth} from 'firebase/app'
import {getAuth, GithubAuthProvider, signInWithPopup, onAuthStateChanged} from 'firebase/auth'
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

const mapUserFromFirebaseAuthToUser = user => {
  console.log('user',user)
  const {reloadUserInfo} = user
  console.log(reloadUserInfo)
  const {screenName, photoUrl} = reloadUserInfo
  return {
    avatar: photoUrl,
    username: screenName
  }
}

export const onAuthStateChangedfun = (onChange) => {
  return onAuthStateChanged(auth, (res) => {
    console.log('res',res)
    const normalizedUser = mapUserFromFirebaseAuthToUser(res)
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth,githubProvider)
    .then(res=>{
      const {user} = res
      return mapUserFromFirebaseAuthToUser(user)
    })
}