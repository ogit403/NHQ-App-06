import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCpnGig4S5jDi_EdTzuhW9sc-_EakKiHTk",
  authDomain: "appchatmain.firebaseapp.com",
  projectId: "appchatmain",
  storageBucket: "appchatmain.appspot.com",
  messagingSenderId: "291332748674",
  appId: "1:291332748674:web:3daf94b064c304ad350b9b"
};

let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig)
}
else {
    app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();
const database = firebase.database();

export { auth, firebase, db, database }

// Initialize Firebase
