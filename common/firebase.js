import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKRibIEanH3V_-SF43TtUQoL56H9YrRvM",
  authDomain: "libro-finder.firebaseapp.com",
  projectId: "libro-finder",
  storageBucket: "libro-finder.appspot.com",
  messagingSenderId: "201448081063",
  appId: "1:201448081063:web:25a59bcfb744d907c23d82",
  measurementId: "G-CYJ11T9NP2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics