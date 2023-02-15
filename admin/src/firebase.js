import firebase from "firebase";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASEKEY,
    authDomain: process.env.REACT_APP_FIREBASEAUTHDOMAIN,
    projectId: process.env.REACT_APP_FIREBASEPROJECTID,
    storageBucket: process.env.REACT_APP_FIREBASESTORAGEBUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASEMESSAGINGSENDERID,
    appId: process.env.REACT_APP_FIREBASEAPPID,
    measurementId: process.env.REACT_APP_FIREBASEMEASUREMENTID
  };

firebase.initializeApp(firebaseConfig);
const storage = firebase.storage();

export default storage;