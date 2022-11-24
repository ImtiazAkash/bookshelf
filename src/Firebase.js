// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBlSYbEhbRb8lzTf7XuqGo7oNg3ilhza3I",
  authDomain: "project-bookshelf-37596.firebaseapp.com",
  projectId: "project-bookshelf-37596",
  storageBucket: "project-bookshelf-37596.appspot.com",
  messagingSenderId: "570740172128",
  appId: "1:570740172128:web:b92d1e68415b555cee2a05",
  databaseURL: "https://project-bookshelf-37596-default-rtdb.firebaseio.com",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
