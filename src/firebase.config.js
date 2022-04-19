// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUoSNCXwp_dmUKb5N3Vt7FENnAbdba1EI",
  authDomain: "home-marketplace-app-e1b0d.firebaseapp.com",
  projectId: "home-marketplace-app-e1b0d",
  storageBucket: "home-marketplace-app-e1b0d.appspot.com",
  messagingSenderId: "229029422645",
  appId: "1:229029422645:web:771f06ce1966b6d7fa737c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();
