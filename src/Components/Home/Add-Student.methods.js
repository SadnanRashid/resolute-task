import { getFirestore } from "firebase/firestore";
import { app } from "../../Firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const firestorePost = async (data) => {
  const db = getFirestore(app);

  const docRef = await addDoc(collection(db, "students"), data);
  console.log(docRef);
};

export { firestorePost };
