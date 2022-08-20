import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, setDoc, addDoc, collection, doc, getDoc, query, where, getDocs} from "firebase/firestore";
import firebaseConfig from "./firebaseConfig";


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

//create document
async function createDocument(path: string, data: any, create: boolean) {
  if(create) {
    const pathRef = collection(db, path)
    const docRef = await addDoc(pathRef, {
      ...data
    })

    await setDoc(doc(db, path, docRef.id), {
      id: docRef.id
    }, { merge: true})
  } else {
    await setDoc(doc(db, path), {
      ...data
    }, { merge: true})
  }
}

//read document

/**
 * Get document by ID and Collection
 * @param collection must be string with name of the collection
 * @param id must be string with Id of the document
 * @returns the document as an object
 */
async function getDocumentById(collection: string, id: string) {
  const docRef = doc(db, collection, id)
  const docSnap = await getDoc(docRef);

  if(docSnap.exists()) {
    console.log("Document data:", docSnap.data())
    return docSnap.data();
  } else {
    console.log("No document with that Id")
  }
}

async function getDocumentByQuery(collectionName: any, object: string, operator: any, value: string) {
  const collectionRef = collection(db, collectionName)
  const q = query(collectionRef, where(object, operator, value));
  let data;

  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    data = doc.data()
  })

  return data
}


export {
    auth,
    db,
    createDocument, 
    getDocumentById, 
    getDocumentByQuery
}