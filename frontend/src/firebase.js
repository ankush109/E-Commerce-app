
// import firebase from "firebase";
// const firebaseConfig = {
//     apiKey: "AIzaSyAkJt6-zRNaoriJBTGZ2v4kq5nPpe8XGbM",
//     authDomain: "clone-d2058.firebaseapp.com",
//     projectId: "clone-d2058",
//     storageBucket: "clone-d2058.appspot.com",
//     messagingSenderId: "178332588977",
//     appId: "1:178332588977:web:2e32e372a91fd9f03a7b90",
//     measurementId: "G-XSDB37LEE3"
//   }; 
//   const firebaseapp =firebase.initializeApp(firebaseConfig);
//   const db= firebaseapp.firestore();
//   const auth =firebase.auth();
//   export {db,auth};

// for firebase version 9 :


import { initializeApp} from 'firebase/app';
import { getFirestore} from 'firebase/firestore/lite';
import { getAuth} from "firebase/auth";



const firebaseConfig = {
    apiKey: "AIzaSyAkJt6-zRNaoriJBTGZ2v4kq5nPpe8XGbM",
    authDomain: "clone-d2058.firebaseapp.com",
    projectId: "clone-d2058",
    storageBucket: "clone-d2058.appspot.com",
    messagingSenderId: "178332588977",
    appId: "1:178332588977:web:2e32e372a91fd9f03a7b90",
    measurementId: "G-XSDB37LEE3"
  };
  const app = initializeApp(firebaseConfig);
  const db =getFirestore(app);
  const auth = getAuth();

  export{db,auth};