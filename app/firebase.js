const admin = require("firebase-admin");

const serviceAccount = require("../firebaseadmin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 databaseURL: "https://hotrestaraunt.firebaseio.com"
});

const config = {
    apiKey: "AIzaSyCKCuupjCBEiG3dJtQw9SqV3lo9E-RpD3I",
    authDomain: "hotrestaraunt.firebaseapp.com",
    databaseURL: "https://hotrestaraunt.firebaseio.com",
    storageBucket: "hotrestaraunt.appspot.com",
    messagingSenderId: "890586298191"
  };
  
  firebase.initializeApp(config);

  let database = firebase.database();


  let setData =(waiting)=>{
      database.ref(0).child("waiting").set(waiting).then((snapshot)=>{
          console.log(snapshot)
      })
  }

module.exports = setData;

