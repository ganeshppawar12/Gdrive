// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB9JRvqLw6AcQ0GW7blArkXjW7iK9cLklI",
  authDomain: "gpdrive-794d2.firebaseapp.com",
  projectId: "gpdrive-794d2",
  storageBucket: "gpdrive-794d2.firebasestorage.app",
  messagingSenderId: "514550906481",
  appId: "1:514550906481:web:8cb26402bb0f2531d425d0",
  measurementId: "G-6PPH4R65QS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
export default app;