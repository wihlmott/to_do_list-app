// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXXhaV0cYCVj8fKbjEVzo6RhpZZJdS900",
  authDomain: "todosharedvl.firebaseapp.com",
  projectId: "todosharedvl",
  storageBucket: "todosharedvl.appspot.com",
  messagingSenderId: "507190117369",
  appId: "1:507190117369:web:ffc0c34cecdf5019283328",
  measurementId: "G-0T5DG20CVC",
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
