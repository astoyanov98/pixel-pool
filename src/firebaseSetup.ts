import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAX36srDCM0WkfxDSldYGU8XCEh5ON9Yso",
  authDomain: "pixel-pool.firebaseapp.com",
  projectId: "pixel-pool",
  storageBucket: "pixel-pool.appspot.com",
  messagingSenderId: "703550657462",
  appId: "1:703550657462:web:82d3f6637f781c2c5a2717",
  measurementId: "G-NJPTWG5KCY"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.firestore();