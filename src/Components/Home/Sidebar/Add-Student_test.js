import React, { useState } from "react";
import {
  Button,
  TextField,
  Box,
  Select,
  MenuItem,
  InputLabel,
  Modal,
  Typography,
} from "@mui/material";
import { flexbox } from "@mui/system";
import { firestorePost, handleSubmit } from "./Add-Student.methods";

export default function AddStudent() {
  const [error, setError] = useState("");
  const [selectedClass, setSelectedClass] = useState(1);
  const [selectedDevision, setSelectedDevision] = useState("A");
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);

  function handleChange(event) {
    setSelectedClass(event.target.value);
    console.log(selectedClass);
  }
  function handleChangeDevision(event) {
    setSelectedDevision(event.target.value);
    console.log(selectedDevision);
  }
  const Modalstyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  return (
    <div>
      <h1 className="text-center">Add Student</h1>
      {/* <Button onClick={test}>Yes</Button> */}
      <form
        onSubmit={(e) => {
          setError("");
          const result = handleSubmit(e, selectedClass, selectedDevision);
          if (result === true) {
            setOpen(true);
            e.target.reset();
          } else {
            setError(result);
          }
        }}
      >
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
          <TextField
            id="userImg"
            label="User Image Link"
            type="text"
            variant="outlined"
            sx={{ width: "100%", marginRight: "3%", marginBottom: "3%" }}
          />
          <Button type="submit" sx={{ width: 220 }} variant="contained">
            Submit
          </Button>
          <h2>{error}</h2>
        </Box>
      </form>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={Modalstyle}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Result
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            The data has been added successfully!
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
