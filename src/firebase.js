import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
import firebaseConfig from "./config/firebaseConfig";

//firebase is a keyword which is an entry point between the firebase and our project
const firebaseApp = initializeApp(firebaseConfig)


const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

export {auth, db};