const admin = require("firebase-admin");

const serviceAccount = require("../firebaseadmin.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
 databaseURL: "https://hotrestaraunt.firebaseio.com"
});

const firebase = admin.database();

  let setData =(reservation)=>{
      firebase.ref('waiting').push(reservation)
  }

module.exports = setData;

