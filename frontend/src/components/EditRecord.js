import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { Button, TextField, Container, Typography } from "@mui/material";
import NavBar from "./NavBar";
import BrowserUpdatedIcon from "@mui/icons-material/BrowserUpdated";

import classes from "./index.module.css";

const EditRecord = () => {
  const [productname, setProductname] = useState("");
  const [qty, setQty] = useState("");
  const [deliveryAddress, setDeliveryAddress] = useState("");
  const [deliveredTo, setDeliveredTo] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();
  const url = "http://localhost:5000/";

  const updateProduct = (e) => {
    try {
      e.preventDefault();
      axios.put(`${url}record/edit/${id}`, {
        product_name: productname,
        quantity: qty,
        delivery_address: deliveryAddress,
        delivered_to: deliveredTo,
      });
    } catch (error) {
      console.log(error.message);
    }
    navigate("/records");
  };

  useEffect(() => {
    getRecordById();
  }, []);

  const getRecordById = async () => {
    const response = await axios.get(`${url}record/allRecord/${id}`);
    setProductname(response.data.product_name);
    setQty(response.data.quantity);
    setDeliveryAddress(response.data.delivery_address);
    setDeliveredTo(response.data.delivered_to);
  };
  console.log(productname);

  return (
    <Container fixed maxWidth="sm">
      <NavBar />
      <form onSubmit={updateProduct}>
        <Typography
          sx={{ m: 2 }}
          variant="h6"
          color="textecondary"
          component="h4"
          gutterBottom
        >
          Record Update
        </Typography>
        <TextField
          id="standard-basic"
          variant="filled"
          label="Product Name"
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
          value={qty}
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
        <Button variant="contained" type="submit" className={classes.btnColor}>
          <BrowserUpdatedIcon /> Update Record
        </Button>
      </form>
    </Container>
  );
};

export default EditRecord;
