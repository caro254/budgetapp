import * as firebase from "firebase";

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
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
