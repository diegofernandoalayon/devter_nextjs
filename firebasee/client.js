// import firebase from 'firebase/app'
import { initializeApp } from 'firebase/app'
// import {auth} from 'firebase/app'
import { getAuth, GithubAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth'
import { query, getFirestore, collection, addDoc, getDocs, Timestamp, orderBy } from 'firebase/firestore'
import { getStorage, ref, uploadBytesResumable } from 'firebase/storage'
// import { signInWithPopup } from 'firebase/auth';
// import { signInWithPhoneNumber } from 'firebase/auth';
// import auth from 'firebase/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyC_9T3SJj6TFzh52f0j9pXI7WPNeb0gAmE',
  authDomain: 'devter-5c79b.firebaseapp.com',
  projectId: 'devter-5c79b',
  storageBucket: 'devter-5c79b.appspot.com',
  messagingSenderId: '537878134015',
  appId: '1:537878134015:web:0cdd57e7574970794460ca',
  measurementId: 'G-JXMZMQSE3H'
}

initializeApp(firebaseConfig)
const auth = getAuth()
const db = getFirestore()
const storage = getStorage()

const mapUserFromFirebaseAuthToUser = user => {
  const { reloadUserInfo, uid } = user

  const { screenName, photoUrl } = reloadUserInfo
  return {
    avatar: photoUrl,
    username: screenName,
    uid
  }
}

export const onAuthStateChangedfun = (onChange) => {
  return onAuthStateChanged(auth, (res) => {
    const normalizedUser = res ? mapUserFromFirebaseAuthToUser(res) : null
    onChange(normalizedUser)
  })
}

export const loginWithGithub = () => {
  const githubProvider = new GithubAuthProvider()
  return signInWithPopup(auth, githubProvider)
}

export const addDevit = ({ avatar, content, userId, username }) => {
  // console.log('addDevit', userId)
  const docRef = addDoc(collection(db, 'devits'), {
    avatar,
    content,
    userId,
    username,
    createdAt: Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0
  })
  return docRef
}

export const fetchLatestDevits = () => {
  const q = query(collection(db, 'devits'), orderBy('createdAt', 'desc'))

  return getDocs(q)
    .then((snapshot) => {
      return snapshot.docs.map(doc => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate()
        }
      })
    })
}

export const uploadImage = (file) => {
  const imagesRef = ref(storage, `images/${file.name}`)
  const task = uploadBytesResumable(imagesRef, file)
  return task
}
