import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHg1m1F1fy6p96WSpntcE4xpOhRPfEEeY",
  authDomain: "my-shop-70d9f.firebaseapp.com",
  projectId: "my-shop-70d9f",
  storageBucket: "my-shop-70d9f.firebasestorage.app",
  messagingSenderId: "724966980024",
  appId: "1:724966980024:web:015bd899283290a732774d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase
export const auth = getAuth(app);
