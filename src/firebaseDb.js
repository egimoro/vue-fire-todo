import firebase from "firebase/compat/app";
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDc9m1SeFqzWf8MKDaXhQrjS1uQ5KY1GTM",
    authDomain: "posi-fire-vue.firebaseapp.com",
    projectId: "posi-fire-vue",
    storageBucket: "posi-fire-vue.appspot.com",
    messagingSenderId: "322747321072",
    appId: "1:322747321072:web:ddc83acd0d6e777d3cd035"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export const db = firebaseApp.firestore();