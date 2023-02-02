import { getFirestore } from "firebase/firestore";
import { app } from "../../Firebase/firebase-config";
import { addDoc, collection } from "firebase/firestore";

const firestorePost = async (data) => {
  const db = getFirestore(app);

  const docRef = await addDoc(collection(db, "students"), data);
  console.log(docRef);
};

const handleSubmit = (e, selectedClass, selectedDevision) => {
  e.preventDefault();
  const form = e.target;
  const firstName = form.firstName.value;
  const middleName = form.middleName.value;
  const lastName = form.lastName.value;
  const rollNumber = form.rollNumber.value;
  const address1 = form.address1.value;
  const address2 = form.address2.value;
  const landmark = form.landmark.value;
  const city = form.city.value;
  const pincode = form.pincode.value;
  const data = {
    firstName,
    middleName,
    lastName,
    rollNumber,
    address1,
    address2,
    landmark,
    city,
    pincode,
    selectedClass,
    selectedDevision,
  };
  firestorePost(data);
};

export { firestorePost, handleSubmit };
