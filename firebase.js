// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyDTzgW_1EVwZgsbDyWONUUKktLk3jrctYY",
  authDomain: "clone-5adaf.firebaseapp.com",
  projectId: "clone-5adaf",
  storageBucket: "clone-5adaf.appspot.com",
  messagingSenderId: "674942516102",
  appId: "1:674942516102:web:2ca6fbc70f02157a03ca07",
  measurementId: "G-214Q4CC8SG"
};

const firebaseApp=firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth=firebase.auth();

export{db,auth};
