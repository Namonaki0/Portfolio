let firebaseConfig = {
  apiKey: "AIzaSyA8660nDNjjbGnxuIe5v7KbbvZVgCTLpDw",
  authDomain: "portfolio-v1-dba00.firebaseapp.com",
  databaseURL:
    "https://portfolio-v1-dba00-default-rtdb.europe-west1.firebasedatabase.app/",
  projectId: "portfolio-v1-dba00",
  storageBucket: "portfolio-v1-dba00.appspot.com",
  messagingSenderId: "891718078472",
  appId: "1:891718078472:web:073116f02d3a76270841bd",
  measurementId: "G-WYDY0VQEMZ",
};
firebase.initializeApp(firebaseConfig);

let database = firebase.database();

let firebaseRef = database.ref("projects/");
firebaseRef.on("value", function (snapshot) {
  let data = snapshot.val();

  console.log(data);
});
