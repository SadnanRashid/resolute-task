import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { app } from "../../../Firebase/firebase-config";
import { getFirestore } from "firebase/firestore";
import ManageStudentsRender from "./Manage-Students-Render";

export default function ManageStudents() {
  const [data, setData] = useState([]);
  const [render, setRender] = useState("");
  // const [docID, setDocID] = useState([]);
  let arrayOfData = [];
  useEffect(() => {
    async function getData() {
      let i = 0;
      const singleDataArray = [];
      const db = getFirestore(app);
      const docRef = collection(db, "students");
      const querySnapshot = await getDocs(docRef);
      querySnapshot.forEach((doc) => {
        i++;
        const dataObject = { id: doc.id, data: doc.data() };
        arrayOfData.push(dataObject);
      });
      for (let j = 0; j < i; j++) {
        singleDataArray.push(arrayOfData[j]);
      }
      setData(singleDataArray);
    }
    getData();
    console.log(data);
  }, [render]);

  return (
    <div>
      <ManageStudentsRender props={data} stateChanger={setRender} />
    </div>
  );
}
