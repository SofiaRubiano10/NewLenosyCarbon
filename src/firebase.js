 import firebase from 'firebase/app'
import 'firebase/firestore';


 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyCEl-kwRrxaK9hgxdOznLsAWS8BDt0sHK0",
    authDomain: "lenosycarbonn.firebaseapp.com",
    projectId: "lenosycarbonn",
    storageBucket: "lenosycarbonn.appspot.com",
    messagingSenderId: "29370698729",
    appId: "1:29370698729:web:77e97d295a8cdc6e675978"
  };
  // Initialize Firebase
 const fb = firebase.initializeApp(firebaseConfig);

 export const db = fb.firestore ();