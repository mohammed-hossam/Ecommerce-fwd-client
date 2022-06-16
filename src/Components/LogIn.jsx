import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Box, TextField, Button } from "@mui/material";
import { login } from "../Store/authSlice";
import { useEffect } from "react";

const LogIn = () => {
  const dispatch = useDispatch();
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState({ name: "", password: "" });
  const [isError, setIsError] = useState({
    name: false,
    password: false,
  });

  const [isVisited, setIsVisited] = useState({  
    name: false,
    password: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    password: "",
  });

  const onSubmit = (e) => {
    console.log("onSubmit");
    e.preventDefault();
    const { name, password } = e.target;
    console.log(isValid);
     if (!isValid) return;
    dispatch(login({ username: name.value, password: password.value }));
  };

  const validate = () => {
    console.log("validate");
    const { name, password } = input;
    if (name.trim() === "" && isVisited.name) {
      setErrorMessage((prevState) => ({
        ...prevState,
        name: "User Name is required",
      }));
      setIsError((prevState) => ({ ...prevState, name: true }));
    } else {
      setErrorMessage((prevState) => ({ ...prevState, name: "" }));
      setIsError((prevState) => ({ ...prevState, name: false }));
    }

    if (password.trim() === "" && isVisited.password) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "Password is required",
      }));
      setIsError((prevState) => ({ ...prevState, password: true }));
    } else if (password.length < 8 && isVisited.password) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "Password must be 8 characters or more",
      }));
      setIsError((prevState) => ({ ...prevState, password: true }));
    } else {
      setErrorMessage((prevState) => ({ ...prevState, password: "" }));
      setIsError((prevState) => ({ ...prevState, password: false }));
    }

    const v = !isError.name && !isError.password;
    setIsValid(v);
  };

  const onChange = (e) => {
    console.log("onChange");
    const { id, value } = e.target;
    setInput((prevState) => ({ ...prevState, [id]: value }));
    setIsVisited((prevState) => ({ ...prevState, [id]: true }));
  };

  useEffect(() => {
    console.log("useEffect");
    validate();
  }, [input]);

  return (
    <>
      <Box
        className="form"
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        onSubmit={onSubmit}
        onChange={onChange}
      >
        <h1>Log In</h1>
        <TextField
         autoFocus
          id="name"
          label="User Name"
          variant="standard"
          error={isError.name}
          helperText={errorMessage.name}
        />
        <TextField
          id="password"
          label="Password"
          variant="standard"
          type="password"
          error={isError.password}
          helperText={errorMessage.password}
        />
        <Button variant="contained" type="submit">
          Log In
        </Button>
      </Box>
    </>
  );
};

export default LogIn;
