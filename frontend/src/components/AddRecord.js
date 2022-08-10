import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button, Container, TextField, Typography } from "@mui/material";
import classes from "./index.module.css";
import NavBar from "./NavBar";
import AddToPhotosIcon from "@mui/icons-material/AddToPhotos";

const AddRecord = () => {
  const [productname, setProductname] = useState("");
  const [quantity, setQty] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveredTo, setDeliveredTo] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const url = "http://localhost:5000/";

  const saveRecord = async (e) => {
    e.preventDefault();
    const addRecord = await axios
      .post(`${url}record/add-records`, {
        product_name: productname,
        quantity: quantity,
        delivery_address: deliveryAddress,
        delivered_to: deliveredTo,
      })
      .then((res) => {
        const allRecords = res.data;
        console.log(allRecords);
      })
      .catch((error) => console.log(`Error: ${error}`));
      setProductname("");
      setQty("");
      setDeliveryAddress("");
      setDeliveredTo("");
      console.log(productname);
      console.log(quantity);
      console.log(deliveryAddress);
      console.log(deliveredTo);

    if (addRecord) {
      setSuccess("Record Added");
    }
     navigate("/records");
    
  };

  return (
    <Container fixed maxWidth="sm">
      <NavBar />
      <form onSubmit={saveRecord}>
        <Typography
          sx={{ m: 2 }}
          variant="h6"
          color="textecondary"
          component="h4"
          gutterBottom
        >
          New delivered Record
        </Typography>
        <TextField
          id="standard-basic"
          variant="filled"
          label="Product name"
          size="small"
          className={classes.field}
          value={productname}
          onChange={(e) => setProductname(e.target.value)}
          required
          fullWidth
        />
        <TextField
          id="standard-basic"
          variant="filled"
          label="Quantity"
          size="small"
          className={classes.field}
          value={quantity}
          onChange={(e) => setQty(e.target.value)}
          required
          fullWidth
        />
        <TextField
          id="standard-basic"
          variant="filled"
          label="Delivery Address"
          size="small"
          className={classes.field}
          value={deliveryAddress}
          onChange={(e) => setDeliveryAddress(e.target.value)}
          required
          fullWidth
        />
        <TextField
          id="standard-basic"
          variant="filled"
          label="Place of Delivery"
          size="small"
          className={classes.field}
          value={deliveredTo}
          onChange={(e) => setDeliveredTo(e.target.value)}
          required
          fullWidth
        />
        <p>{errMsg}</p>
        <Button variant="contained" type="submit" className={classes.btnColor}>
          <AddToPhotosIcon /> New Record
        </Button>
        <p>{success}</p>
      </form>
    </Container>
  );
};

export default AddRecord;
