// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app';

// Add the Firebase products that you want to use
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyCwPSlEE29LrpsFAJ2VN7kw9-bX5awQ3t4',
  authDomain: 'crwn-clothing-47594.firebaseapp.com',
  projectId: 'crwn-clothing-47594',
  storageBucket: 'crwn-clothing-47594.appspot.com',
  messagingSenderId: '693488246160',
  appId: '1:693488246160:web:7d82bb57137e3d202da715',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
