import firebase from "firebase/app";

import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOiV9zqIIFVEzIRZBSKHo2XftOW30xsR0",
  authDomain: "navneetgym-3c551.firebaseapp.com",
  databaseURL: "https://navneetgym-3c551.firebaseio.com",
  projectId: "navneetgym-3c551",
  storageBucket: "navneetgym-3c551.appspot.com",
  messagingSenderId: "458968865092",
  appId: "1:458968865092:web:95ccf4277d0704c2505f11"
};
// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
// firebase.analytics();

export default firebase;
