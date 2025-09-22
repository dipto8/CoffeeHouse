// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCkRhnnLkZUoinyAvaQkMBWJeZpZZzakH8",
  authDomain: "coffeehouse-64a51.firebaseapp.com",
  projectId: "coffeehouse-64a51",
  storageBucket: "coffeehouse-64a51.firebasestorage.app",
  messagingSenderId: "332560078536",
  appId: "1:332560078536:web:136b60abd6877bbec237fd"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;