import React, { useContext, useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { TextField, Box, Select, MenuItem, InputLabel } from "@mui/material";
import { app } from "../../../Firebase/firebase-config";
import { useNavigate, useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/UserContext";

export default function ManageStudentsView() {
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const query = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    if (!user?.email) {
      navigate("/login");
      return <h1>Loading...</h1>;
    }
    const getData = async () => {
      const db = getFirestore(app);
      const docRef = doc(db, "students", query.id);
      const docSnap = await getDoc(docRef);
      setData(docSnap.data());
    };
    getData();
    console.log(data);
  }, []);
  return (
    <div>
      <Box sx={{ paddingLeft: 10 }}>
        <InputLabel>First Name</InputLabel>
        <TextField
          id="firstName"
          //   label="First Name"
          variant="filled"
          sx={{ width: "30%", marginRight: "3%" }}
          value={data.firstName}
          InputProps={{
            readOnly: true,
          }}
        />
        <InputLabel>Middle Name</InputLabel>
        <TextField
          id="middleName"
          variant="filled"
          sx={{ width: "30%", marginRight: "3%" }}
          value={data.middleName}
          InputProps={{
            readOnly: true,
          }}
        />
        <InputLabel>Last Name</InputLabel>
        <TextField
          id="lastName"
          variant="filled"
          sx={{ width: "30%", marginRight: "3%" }}
          value={data.lastName}
          InputProps={{
            readOnly: true,
          }}
        />
        {/* Select */}
        <Box sx={{ display: "flex", marginTop: "3%", marginBottom: "3%" }}>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Class</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.selectedClass}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          {/*  */}
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Devision</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.selectedDevision}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Roll Number</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.rollNumber}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ margingBottom: "3%", display: "flex" }}>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Address 1</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.address1}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Address 2</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.address2}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
        <Box sx={{ marginTop: "3%", marginBottom: "3%", display: "flex" }}>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Land Mark</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.landmark}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>City</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.city}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
          <Box sx={{ marginRight: "3%", width: "100%" }}>
            <InputLabel>Pincode</InputLabel>
            <TextField
              variant="filled"
              sx={{ width: "100%", marginRight: "3%" }}
              value={data.pincode}
              InputProps={{
                readOnly: true,
              }}
            />
          </Box>
        </Box>
      </Box>
    </div>
  );
}
