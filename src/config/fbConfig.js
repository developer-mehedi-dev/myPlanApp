import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
    apiKey: "AIzaSyANFEugmbtaoIoSP0eYwmu0b0pbkiZq0fI",
    authDomain: "net-ninja-marioplan-ee2b3.firebaseapp.com",
    projectId: "net-ninja-marioplan-ee2b3",
    storageBucket: "net-ninja-marioplan-ee2b3.appspot.com",
    messagingSenderId: "822575464506",
    appId: "1:822575464506:web:12c118b0a795c00fb9b503",
    measurementId: "G-CG8WMMX6NS"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase;