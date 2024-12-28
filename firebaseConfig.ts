// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getAuth } from "@react-native-firebase/auth";
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
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();