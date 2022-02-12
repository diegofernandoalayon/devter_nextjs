import * as firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC_9T3SJj6TFzh52f0j9pXI7WPNeb0gAmE",
  authDomain: "devter-5c79b.firebaseapp.com",
  projectId: "devter-5c79b",
  storageBucket: "devter-5c79b.appspot.com",
  messagingSenderId: "537878134015",
  appId: "1:537878134015:web:0cdd57e7574970794460ca",
  measurementId: "G-JXMZMQSE3H"
};

firebase.initializeApp(firebaseConfig)

export const loginWithGithub = () => {
  const githubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().singInWithPopup(githubProvider)
}