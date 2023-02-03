import { getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase/firebase-config";
import { setDoc, doc, collection } from "firebase/firestore";
import { useState } from "react";
import React from "react";

const FirestorePost = async (data, id) => {
  console.log("---", id);
  const db = getFirestore(app);
  //   await setDoc(doc(db, "cities", "LA")

  const docRef = await setDoc(doc(db, "students", id), data);
  if (docRef) {
    console.log(docRef);
    return true;
  }
};

const handleSubmit = (e, selectedClass, selectedDevision, id) => {
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
  const validateResult = validation(data);
  console.log(validateResult.length);
  if (validateResult.length) {
    validateResult.push(" needs to be filled before adding!");
    return validateResult;
  }
  const result = FirestorePost(data, id);
  return true;
};

const validation = (data) => {
  let array = [];
  if (data.firstName === "") {
    array.push("Firstname, ");
  }
  if (data.lastName === "") {
    array.push("lastname, ");
  }
  if (data.middleName === "") {
    array.push("Middlename, ");
  }
  if (parseInt(data.rollNumber) === null) {
    array.push("Roll number, ");
  }
  if (data.address1 === "") {
    array.push("Address 1, ");
  }
  if (data.address2 === "") {
    array.push("Address 2, ");
  }
  if (data.landmark === "") {
    array.push("Landmark, ");
  }
  if (data.city === "") {
    array.push("City, ");
  }
  if (parseInt(data.pincode) === null) {
    array.push("Pincode, ");
  }
  if (parseInt(data.rollNumber) > 99) {
    array.push("Roll number must be two digits long, ");
  }
  if (parseInt(data.pincode) < 99999) {
    array.push("Pincode must be 6 digits long ");
  }
  return array;
};

export { FirestorePost, handleSubmit };
