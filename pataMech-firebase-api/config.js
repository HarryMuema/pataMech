const firebase=require('firebase/compat/app')
const auth=require('firebase/compat/auth')
const firestore=require('firebase/compat/firestore')

const firebaseConfig={
    apiKey: "AIzaSyC8BRQ4FfqOHj77kgnxFYyAuM3lsiaVJ9Y",
    authDomain: "patamech-44c5f.firebaseapp.com",
    projectId: "patamech-44c5f",
    storageBucket: "patamech-44c5f.appspot.com",
    messagingSenderId: "559533764064",
    appId: "1:559533764064:web:e33a773e3e7dcb2ef7cf85",
    measurementId: "G-EC2B8S983J"
}

firebase.initializeApp(firebaseConfig)
const db=firebase.firestore()
const user=db.collection("users");

module.exports=user;