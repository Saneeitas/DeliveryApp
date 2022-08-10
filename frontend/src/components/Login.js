import { useState } from "react";
import axios from "axios";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import Container from "@mui/material/Container";
import Alert from "@mui/material/Alert";
import NavBar from "./NavBar";

import classes from "./index.module.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [err, setErr] = useState();
  const url = "http://localhost:5000/users";
  const navigate = useNavigate();

  const loginUser = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${url}/admin-login`, {
        username: username,
        userpassword: userpassword,
      });
      if (response.status === 200) {
        navigate('/records')
        console.log("Login successfully")
      }
    } catch (err) {
       if (err.response?.status === 400) {
         console.log("Invalid output");
         setErrMsg("Invalid input")
         setErr(true)
       } else if (err.response?.status === 401) {
         console.log("Incorrect credentials");
         setErrMsg("Incorrect credentials");
         setErr(true);
       } else {
         console.log("Login failed")
         setErrMsg("Login failed");
         setErr(true);
       }
      
    }
    
  };

  return (
    <Container
      fixed
      maxWidth="sm"
      sx={{
        "& .MuiTextField-root": { m: 2, width: "40ch" },
      }}
    >
      <NavBar />
      <Typography
        sx={{ m: 2 }}
        variant="h6"
        color="textSecondary"
        component="h2"
        gutterBottom
      >
        Admin Login
      </Typography>
      <p>{err ? <Alert severity="error">{errMsg}</Alert> : null}</p>
      <form noValidate autoComplete="off" onSubmit={loginUser}>
        <TextField
          required
          label="username"
          variant="filled"
          className={classes.field}
          fullWidth
          onChange={(e) => setUsername(e.target.value)}
        />
        <TextField
          required
          label="Password"
          type="password"
          autoComplete="current-password"
          variant="filled"
          className={classes.field}
          fullWidth
          onChange={(e) => setUserpassword(e.target.value)}
        />
        <Button
          sx={{ m: 2, mt: 1, width: 320, height: 40 }}
          type="submit"
          variant="contained"
          className={classes.btnColor}
        >
          <LoginIcon /> Login as admin
        </Button>
      </form>
    </Container>
  );
};

export default Login;
