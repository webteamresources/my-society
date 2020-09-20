import firebase, { messaging } from 'firebase';

const config = {
    apiKey: "AIzaSyAUUNmli845Sw2rMiOLtaUkpzb8ln2sgM4",
    authDomain: "mysociety-a6e13.firebaseapp.com",
    databaseURL: "https://mysociety-a6e13.firebaseio.com",
    projectId: "mysociety-a6e13",
    storageBucket: "mysociety-a6e13.appspot.com",
    messagingSenderId: "660337765859",
    appId: "1:660337765859:web:5a40d4b5fbdd958bfec4d6"
};

const fire = firebase.initializeApp(config);
export default fire;