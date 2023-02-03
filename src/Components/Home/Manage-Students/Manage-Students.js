import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { app } from "../../../Firebase/firebase-config";
import { getFirestore } from "firebase/firestore";

export default function ManageStudents() {
  const [data, setData] = useState([]);
  const [docID, setDocID] = useState([]);
  useEffect(() => {
    async function getData() {
      const db = getFirestore(app);
      const docRef = collection(db, "students");
      const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        setData(doc.data());
        setDocID(doc.id);
      });
    }
    getData();
    console.log(data);
  }, []);

  return <div></div>;
}
