// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxdmmkX9ThO1s001W-8T4CaFR_6RhDIYg",
  authDomain: "travel-2a045.firebaseapp.com",
  projectId: "travel-2a045",
  storageBucket: "travel-2a045.appspot.com",
  messagingSenderId: "72219930646",
  appId: "1:72219930646:web:512c8af262d88e7a484537"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
