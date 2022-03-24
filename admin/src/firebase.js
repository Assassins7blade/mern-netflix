import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBywFnJ-rJRLQQPiIJsQ_qlz2cZZ4KyEho",
    authDomain: "netflix-25da6.firebaseapp.com",
    projectId: "netflix-25da6",
    storageBucket: "netflix-25da6.appspot.com",
    messagingSenderId: "913753628474",
    appId: "1:913753628474:web:cca1a4cb809251ee88ba03",
    measurementId: "G-2KWM3EJ8R3"
  };

  firebase.initializeApp(firebaseConfig);
  const storage = firebase.storage();
  export default storage;