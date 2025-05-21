// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";



// const app = initializeApp(firebaseConfig);
// const auth = getAuth(app)

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebase = {
    apiKey: "your_apiKey",
    authDomain: "your_authDomain",
    projectId: "your_projectId",
    storageBucket: "your_storageBucket",
    messagingSenderId: "your_messagingSenderId",
    appId: "your_appId"
  };
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const app = initializeApp(firebase);
const auth = getAuth(app)

export { app, auth };
