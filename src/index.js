import 'bootstrap/dist/css/bootstrap.min.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzD25RT6YNNbkESZQQIkMB8f2InG2tfT4",
  authDomain: "mi-proyecto-react-2023.firebaseapp.com",
  projectId: "mi-proyecto-react-2023",
  storageBucket: "mi-proyecto-react-2023.appspot.com",
  messagingSenderId: "463021213840",
  appId: "1:463021213840:web:664001f43abdc97bc73015"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);