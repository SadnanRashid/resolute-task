import React from "react";
import { Button, TextField, Box } from "@mui/material";

export default function AddStudent() {
  return (
    <div>
      <h1>Add Student</h1>
      {/* <Button variant="contained">Hello</Button> */}
      <Box>
        <TextField
          id="outlined-basic"
          label="First Name"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          id="outlined-basic"
          label="Middle Name"
          variant="outlined"
          sx={{ width: "30%" }}
        />
        <TextField
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          sx={{ width: "30%" }}
        />
      </Box>
    </div>
  );
}
