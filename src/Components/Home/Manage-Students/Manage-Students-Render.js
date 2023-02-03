import React from "react";
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Button,
} from "@mui/material";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { Box } from "@mui/system";
import { Link, Navigate } from "react-router-dom";
import { doc, deleteDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { app } from "../../../Firebase/firebase-config";

export default function ManageStudentsRender({ props, stateChanger }) {
  let flag = "";
  return (
    <div style={{ margin: "15px" }}>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead sx={{ backgroundColor: "crimson" }}>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">View/Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.map((row) => (
              <TableRow
                key={row.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.data.firstName + " " + row.data.lastName}
                </TableCell>
                <TableCell align="right">
                  {row.data.selectedClass + "-" + row.data.selectedDevision}
                </TableCell>
                <TableCell align="right">{row.data.rollNumber}</TableCell>
                <TableCell align="right">
                  {
                    <Box>
                      <Button
                        sx={{ padding: 0, paddingY: 0, fontSize: "20px" }}
                        component={Link}
                        to={`/manage/view/${row.id}`}
                      >
                        <AiOutlineEye />
                      </Button>
                      <Button
                        sx={{ padding: 0, paddingY: 0, fontSize: "20px" }}
                        component={Link}
                        to={`/manage/edit/${row.id}`}
                      >
                        <AiOutlineEdit />
                      </Button>
                      <Button
                        sx={{ padding: 0, paddingY: 0, fontSize: "20px" }}
                        onClick={() => {
                          if (
                            window.confirm(
                              "Are you sure you want to delete this student?"
                            ) === true
                          ) {
                            console.log("Pressed");
                            const result = deleteFirestore(row.id);
                            console.log(result);
                            flag = row.id;
                            stateChanger(flag);
                            window.alert("Success!");
                          } else {
                            console.log("Not Confirmed");
                          }
                        }}
                      >
                        <AiOutlineDelete />
                      </Button>
                    </Box>
                  }
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

const deleteFirestore = async (id) => {
  const db = getFirestore(app);
  const result = await deleteDoc(doc(db, "students", id));
  return result;
};
