import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
// // import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";

// const firebaseConfig = {
//   apiKey: "AIzaSyCgHIHXUoVgBHlUxuTDsrw_YIihGeY4CV0",
//   authDomain: "portfolio-700f3.firebaseapp.com",
//   databaseURL:
//     "https://portfolio-700f3-default-rtdb.europe-west1.firebasedatabase.app",
//   projectId: "portfolio-700f3",
//   storageBucket: "portfolio-700f3.appspot.com",
//   messagingSenderId: "439802293468",
//   appId: "1:439802293468:web:0ac7d5386c3fda86b85819",
//   measurementId: "G-0NDVY1GHB7",
// };
// function initializeApp() {
let firebaseConfig = {
  apiKey: "AIzaSyA8660nDNjjbGnxuIe5v7KbbvZVgCTLpDw",
  authDomain: "portfolio-v1-dba00.firebaseapp.com",
  projectId: "portfolio-v1-dba00",
  storageBucket: "portfolio-v1-dba00.appspot.com",
  messagingSenderId: "891718078472",
  appId: "1:891718078472:web:073116f02d3a76270841bd",
  measurementId: "G-WYDY0VQEMZ",
};
firebase.initializeApp(firebaseConfig);

// let database = firebase.database();

// console.log(initializeApp);
// }
// // Initialize Firebase
// const db = getFirestore(app);

// async function getProjects(db) {
//   const projectsCol = collection(db, "projects");
//   const projectsSnapshot = await getDocs(projectsCol);
//   const projectList = projectsSnapshot.docs.map((doc) => doc.data());
//   return projectList;
// }

// getProjects(app);
// // let firebaseRef = app.database().ref("projects");
// // firebaseRef.once("value", function (snapshot) {
// //   snapshot.forEach(function (el) {
// //     el.querySelector("#projects").textContent += `
// //             <div>${el.val()}</div>
// //         `;
// //   });
// // });
// // const analytics = getAnalytics(app);
