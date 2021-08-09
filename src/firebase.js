import firebase from 'firebase'

var firebaseConfig = {
  apiKey: "AIzaSyDlC8y1defDykhCfk8Ohu38QxRdGAu2WKE",
  authDomain: "newlenosycarbon.firebaseapp.com",
  projectId: "newlenosycarbon",
  storageBucket: "newlenosycarbon.appspot.com",
  messagingSenderId: "536365325196",
  appId: "1:536365325196:web:6022f9d508fe7e238454a9"
};


  const fire = firebase.initializeApp (firebaseConfig);

export default fire;