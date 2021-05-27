import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth'

const config =  {
    apiKey: "AIzaSyBh2c2s2pITJ7BCu8LYti7TcWToY5hZCwc",
    authDomain: "react-e-commerce-demo-db-10dca.firebaseapp.com",
    projectId: "react-e-commerce-demo-db-10dca",
    storageBucket: "react-e-commerce-demo-db-10dca.appspot.com",
    messagingSenderId: "652336377135",
    appId: "1:652336377135:web:a7d3beef8ec4fc1f82c5da"
}

firebase.initializeApp(config)

export const auth = firebase.auth();
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
