import * as firebase from "firebase";

const config = {
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

export { firebase, database as default };

// database.ref("expenses").on("value", snapshot => {
//   const expenses = [];
//   snapshot.forEach(childSnapshot => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val()
//     });
//   });
//   console.log(expenses);
//});
// database.ref("expenses").push({
//   description: "Rent",
//   note: "",
//   amount: 109500,
//   createdAt: 976123498763
// });
// database.ref("expenses").push({
//   description: "Phone bill",
//   note: "",
//   amount: 5900,
//   createdAt: 976123498763
// });
// database.ref("expenses").push({
//   description: "Food",
//   note: "",
//   amount: 1200,
//   createdAt: 976123498763
// });

// database.ref().on("value", snapshot => {
//   const val = snapshot.val();
//   console.log(`${val.name} is a  ${val.job.title} at ${val.job.company}`);
// });

// database
//   .ref()
//   .set({
//     name: "Arturo",
//     age: 29,
//     stressLevel: 6,
//     job: {
//       title: "Software developer",
//       company: "Google"
//     },
//     location: {
//       city: "Rome",
//       country: "Spain"
//     }
//   })
//   .then(() => {
//     console.log("Data is served");
//   })
//.catch(e => {
//console.log("This failed, e");
//});
// database.ref().update({
//   stressLevel: 9,
//   "job/company": "Amazon",
//   "location/city": "Barcelona"
// });
