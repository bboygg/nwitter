// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app";
import getAnalytics from "firebase/compat/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBDmqNGbc8ChfVcpslcS0PcHzoVJqLcI2k",
  authDomain: "nwitter-dd9dc.firebaseapp.com",
  projectId: "nwitter-dd9dc",
  storageBucket: "nwitter-dd9dc.appspot.com",
  messagingSenderId: "91973143559",
  appId: "1:91973143559:web:30069e15a1652a34f76ea2",
  measurementId: "G-RXT5908NJ9"
};

export default firebase.initializeApp(firebaseConfig);

