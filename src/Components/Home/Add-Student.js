import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
} from "@mui/material";
import { flexbox } from "@mui/system";
import { firestorePost, handleSubmit } from "./Add-Student.methods";

export default function AddStudent() {
  const [error, setError] = useState("");
  const [selectedClass, setSelectedClass] = useState(1);
  const [selectedDevision, setSelectedDevision] = useState("A");

  function handleChange(event) {
    setSelectedClass(event.target.value);
    console.log(selectedClass);
  }
  function handleChangeDevision(event) {
    setSelectedDevision(event.target.value);
    console.log(selectedDevision);
  }
  return (
    <div>
      <h1>Add Student</h1>
      {/* <Button onClick={test}>Yes</Button> */}
      <form onSubmit={(e) => handleSubmit(e, selectedClass, selectedDevision)}>
        <Box sx={{ paddingLeft: 10 }}>
          <TextField
            id="firstName"
            label="First Name"
            variant="outlined"
            sx={{ width: "30%", marginRight: "3%" }}
          />
          <TextField
            id="middleName"
            label="Middle Name"
            variant="outlined"
            sx={{ width: "30%", marginRight: "3%" }}
          />
          <TextField
            id="lastName"
            label="Last Name"
            variant="outlined"
            sx={{ width: "30%", marginRight: "3%" }}
          />
          {/* Select */}
          <Box sx={{ display: "flex", marginTop: "3%", marginBottom: "3%" }}>
            <Box sx={{ marginRight: "3%", width: "100%" }}>
              <InputLabel>Select Class</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="selectClass"
                value={selectedClass}
                label="Age"
                onChange={handleChange}
                sx={{ width: "100%" }}
              >
                <MenuItem value={1}>One</MenuItem>
                <MenuItem value={2}>Two</MenuItem>
                <MenuItem value={3}>Three</MenuItem>
                <MenuItem value={4}>Four</MenuItem>
                <MenuItem value={5}>Five</MenuItem>
                <MenuItem value={6}>Six</MenuItem>
                <MenuItem value={7}>Seven</MenuItem>
                <MenuItem value={8}>Eight</MenuItem>
                <MenuItem value={9}>Nine</MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={11}>Eleven</MenuItem>
                <MenuItem value={12}>Twelve</MenuItem>
              </Select>
            </Box>
            {/*  */}
            <Box sx={{ marginRight: "3%", width: "100%" }}>
              <InputLabel>Select Devision</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDevision}
                onChange={handleChangeDevision}
                sx={{ width: "100%" }}
              >
                <MenuItem value={"A"}>A</MenuItem>
                <MenuItem value={"B"}>B</MenuItem>
                <MenuItem value={"C"}>C</MenuItem>
                <MenuItem value={"D"}>D</MenuItem>
              </Select>
            </Box>
            <TextField
              id="rollNumber"
              label="Roll Number"
              type="number"
              variant="outlined"
              sx={{ width: "100%", marginRight: "3%", marginTop: "1.7%" }}
            />
          </Box>
          <Box sx={{ margingBottom: "3%", display: "flex" }}>
            <TextField
              id="address1"
              label="Address Line 1"
              variant="outlined"
              sx={{ width: "50%", marginRight: "3%" }}
            />
            <TextField
              id="address2"
              label="Address Line 2"
              variant="outlined"
              sx={{ width: "50%", marginRight: "3%" }}
            />
          </Box>
          <Box sx={{ marginTop: "3%", marginBottom: "3%" }}>
            <TextField
              id="landmark"
              label="Landmark"
              variant="outlined"
              sx={{ width: "30%", marginRight: "3%" }}
            />
            <TextField
              id="city"
              label="City"
              variant="outlined"
              sx={{ width: "30%", marginRight: "3%" }}
            />
            <TextField
              id="pincode"
              label="Pincode"
              type="number"
              variant="outlined"
              sx={{ width: "30%", marginRight: "3%" }}
            />
          </Box>
          <Button type="submit" sx={{ width: 220 }} variant="contained">
            Submit
          </Button>
        </Box>
      </form>
    </div>
  );
}
