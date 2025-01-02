// Import the functions you need from the SDKs you need
import { initializeApp } from '@react-native-firebase/app';
import { getAuth } from '@react-native-firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgSKK2p48KrSi7O40CZY9AJSq1kHGS2us",
  authDomain: "deliverables-62abc.firebaseapp.com",
  projectId: "deliverables-62abc",
  storageBucket: "deliverables-62abc.firebasestorage.app",
  messagingSenderId: "966350797827",
  appId: "1:966350797827:web:cee75ec2a5fdccf081e236",
  measurementId: "G-5DQ1WNMTG3"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
// export const FIREBASE_AUTH = getAuth(app);
// export const FIRESTORE_DB = getFirestore(FIREBASE_APP);