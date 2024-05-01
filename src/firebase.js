import firebase from 'firebase/app';

import 'firebase/auth'; // for authentication
import 'firebase/storage'; // for storage
import 'firebase/database'; // for realtime database
import 'firebase/firestore'; // for cloud firestore
import "firebase/functions"; // for cloud functions

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC1xOaYkN2R9QK1P9K6TpX8VsewgOENd_E",
    authDomain: "instagram-clone-curso-6a9c9.firebaseapp.com",
    projectId: "instagram-clone-curso-6a9c9",
    storageBucket: "instagram-clone-curso-6a9c9.appspot.com",
    messagingSenderId: "95565734383",
    appId: "1:95565734383:web:78da1cdf41c2fdebc7961a"
  });

  const db = firebase.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();
  const functions = firebase.functions();

  export{db, auth, storage, functions};