import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCk0alLGZbdmSDbG3BiQWpYoICyjqUvjZw",
  authDomain: " auth-react-router-firebase.firebaseapp.com",
  databaseURL: "https:// auth-react-router-firebase.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth