import { useState, useEffect } from "react";
import axios from "axios";
import * as React from "react";
import { Link } from "react-router-dom";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Typography, Container } from "@mui/material";
import NavBar from "./NavBar";
import classes from "./index.module.css";
import AddToDrive from "@mui/icons-material/AddToDrive";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Alert from "@mui/material/Alert";

const RecordList = () => {
  //get data from API
  const [records, getRecords] = useState([]);
  const url = "http://localhost:5000";

  useEffect(() => {
    getAllRecords();
  }, []);

  const getAllRecords = () => {
    axios
      .get(`${url}/record/allRecord`)
      .then((response) => {
        const allRecords = response.data;
        //add data to our state
        getRecords(allRecords);
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  const deleteRecord = (id) => {
     axios
      .delete(`${url}/record/delete/${id}`)
      .then((response) => {
        getAllRecords();
      })
      .catch((error) => console.log(`Error: ${error}`));
  };

  return (
    <div>
      <Container fixed maxWidth="lg">
        <NavBar />
        <TableContainer component={Paper} sx={{ mt: 2 }}>
          <Table sx={{ minWidth: 250 }} aria-label="simple table">
            <TableHead className={classes.table}>
              <TableRow>
                <TableCell>
                  <Typography
                    className={classes.typo}
                    variant="h6"
                    color="textSecondary"
                    component="h4"
                    gutterBottom
                  >
                    S/N
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  {" "}
                  <Typography
                    className={classes.typo}
                    variant="h6"
                    color="textecondary"
                    component="h4"
                    gutterBottom
                  >
                    PRODUCT
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    className={classes.typo}
                    variant="h6"
                    color="textecondary"
                    component="h4"
                    gutterBottom
                  >
                    QUANTITY
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    className={classes.typo}
                    variant="h6"
                    color="textecondary"
                    component="h4"
                    gutterBottom
                  >
                    ADDRESS
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    className={classes.typo}
                    variant="h6"
                    color="textecondary"
                    component="h4"
                    gutterBottom
                  >
                    DELIVERY DATE
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Typography
                    className={classes.typo}
                    variant="h6"
                    color="textecondary"
                    component="h4"
                    gutterBottom
                  >
                    DELIVERED TO
                  </Typography>
                </TableCell>
                <TableCell align="left">
                  <Link
                    className={classes.btn1}
                    to="/add-record"
                  >
                    <AddToDrive />NEW DELIVERY
                  </Link>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {records.map((record, index) => (
                <TableRow
                  key={record.id}
                  sx={{ "&:last-child td, &:last-child th": { border: -1 } }}
                >
                  <TableCell component="th" scope="row">
                    {index + 1}
                  </TableCell>
                  <TableCell align="left">{record.product_name}</TableCell>
                  <TableCell align="left">{record.quantity}</TableCell>
                  <TableCell align="left">{record.delivery_address}</TableCell>
                  <TableCell align="left">{record.delivery_date}</TableCell>
                  <TableCell align="left">{record.delivered_to}</TableCell>
                  <TableCell align="left">
                    <Link to={`/edit/${record.id}`} className={classes.link}>
                      <EditIcon />
                    </Link>{" "}
                    {"  "}
                    <Button
                      variant="outlined"
                      color="error"
                      size="small"
                      onClick={() => deleteRecord(record.id)}
                    >
                      <DeleteIcon />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </div>
  );
};

export default RecordList;
