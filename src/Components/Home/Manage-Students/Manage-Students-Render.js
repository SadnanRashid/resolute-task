import React from "react";
import {
  Table,
  Paper,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

export default function ManageStudentsRender(props) {
  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Class</TableCell>
              <TableCell align="right">Roll</TableCell>
              <TableCell align="right">View/Edit/Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {props.props.map((row) => (
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
                <TableCell align="right">View/Edit/Delete</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
