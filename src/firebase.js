import * as firebase from "firebase"
import "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyDiyGAipVIidZTflf9eUHlN8v7Y5ui6YSQ",
  authDomain: "nasaapp-ba116.firebaseapp.com",
  databaseURL: "https://nasaapp-ba116.firebaseio.com",
  projectId: "nasaapp-ba116",
  storageBucket: "nasaapp-ba116.appspot.com",
  messagingSenderId: "873033224204",
  appId: "1:873033224204:web:7f709cc7fb8eebb3b81e29",
}

firebase.initializeApp(firebaseConfig)
firebase.firestore()

export default firebase
