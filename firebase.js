import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { ref, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyC0tl-ziDpHATusTkEWK_lO-t7XAlkh7t0",
  authDomain: "vue-weekly.firebaseapp.com",
  databaseURL: "https://vue-weekly-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "vue-weekly",
  storageBucket: "vue-weekly.appspot.com",
  messagingSenderId: "668493575554",
  appId: "1:668493575554:web:c768ca204972d18cb58b9b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);


function createDoc(collection, data) {
  set(ref(db, collection), {
    ...data
  });
} 


export {
    auth,
    db,
    createDoc, 
}