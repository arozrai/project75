import firebase from 'firebase'
require("@firebase/firestore")

var firebaseConfig = {
    apiKey: "AIzaSyBzGfOD_mNZWRmhRkVZoaDBNomxXVpFOQ8",
    authDomain: "class74-43a16.firebaseapp.com",
    projectId: "class74-43a16",
    storageBucket: "class74-43a16.appspot.com",
    messagingSenderId: "1022593293959",
    appId: "1:1022593293959:web:6516460aa7fa062a306222"
  };

  firebase.initializeApp(firebaseConfig);

export default firebase.firestore()