import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBhzxBo2MWhsRXqPisa7lvziDSsIur5pYU",
    authDomain: "linkedin-clone-react-fcece.firebaseapp.com",
    projectId: "linkedin-clone-react-fcece",
    storageBucket: "linkedin-clone-react-fcece.appspot.com",
    messagingSenderId: "266129531282",
    appId: "1:266129531282:web:319b7b5223686ec845e14b"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };