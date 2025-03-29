// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAJXU4wzYYqOqmSQqcJZvV3stE4gfIDrDs",
  authDomain: "advanced-task-manager-app.firebaseapp.com",
  projectId: "advanced-task-manager-app",
  storageBucket: "advanced-task-manager-app.firebasestorage.app",
  messagingSenderId: "229760089962",
  appId: "1:229760089962:web:a24c5f397cb685ded9af13",
  measurementId: "G-CQZ67GB7N5"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);
const analytics = getAnalytics(firebase);

export { firebase, analytics }