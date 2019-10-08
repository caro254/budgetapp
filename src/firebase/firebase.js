import * as firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAfdoo2ZOFAJ-9PlggiKg3x9fAV_ytFTwc",
  authDomain: "budget-43b49.firebaseapp.com",
  databaseURL: "https://budget-43b49.firebaseio.com",
  projectId: "budget-43b49",
  storageBucket: "",
  messagingSenderId: "1023758493335",
  appId: "1:1023758493335:web:e41553a955bdd8d3622bd2",
  measurementId: "G-C9C4RQY08K"
};

firebase.initializeApp(config);

const database = firebase.database();

database.ref().set("very strange program");
