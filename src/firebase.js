import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcqUdehFz_7eWMEsHnyGY4dQeJbCAghLc",
  authDomain: "whatsapp-a7469.firebaseapp.com",
  projectId: "whatsapp-a7469",
  storageBucket: "whatsapp-a7469.appspot.com",
  messagingSenderId: "174016347171",
  appId: "1:174016347171:web:b393831cbc2b25b3e00596",
  measurementId: "G-BHTQQ2P776"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
