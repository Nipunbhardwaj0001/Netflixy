// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAiW0kiR1iQoIRTZ4eLFe6GGuI5RuQr74Q",
  authDomain: "netflixy-5c419.firebaseapp.com",
  projectId: "netflixy-5c419",
  storageBucket: "netflixy-5c419.firebasestorage.app",
  messagingSenderId: "99980387219",
  appId: "1:99980387219:web:b0e72060dfdba973267e66",
  measurementId: "G-BVMZ4JSE8B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

