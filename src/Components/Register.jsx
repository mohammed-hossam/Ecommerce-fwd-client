import React from "react";
import { Box, Button, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { register } from "../Store/authSlice";

const Register = () => {
  const [isValid, setIsValid] = useState(false);
  const [input, setInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    tel: "",
  });
  const [isError, setIsError] = useState({
    name: false,
    email: false,
    password: false,
    confirmPassword: false,
    tel: false,
  });

  const [errorMessage, setErrorMessage] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    tel: "",
  });

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, tel } = e.target;
    if (!isValid) return;

    dispatch(
      register({
        username: name.value,
        email: email.value,
        password: password.value,
        tel: tel.value,
      })
    );
  };

  const validate = () => {
    const { password, confirmPassword } = input;
    console.log(input);

    Object.keys(input).forEach((key) => {
      if (input[key].trim() === "") {
        setErrorMessage((prevState) => ({
          ...prevState,
          [key]: `${key} is required`,
        }));
        setIsError((prevState) => ({ ...prevState, [key]: true }));
      } else {
        setErrorMessage((prevState) => ({ ...prevState, [key]: "" }));
        setIsError((prevState) => ({ ...prevState, [key]: false }));
      }
    });

    if (password.length < 8) {
      setErrorMessage((prevState) => ({
        ...prevState,
        password: "Password must be 8 characters or more",
      }));
      setIsError((prevState) => ({ ...prevState, password: true }));
    } else {
      setErrorMessage((prevState) => ({ ...prevState, password: "" }));
      setIsError((prevState) => ({ ...prevState, password: false }));
    }
    if (password !== confirmPassword) {
      setErrorMessage((prevState) => ({
        ...prevState,
        confirmPassword: "Password and Confirm Password must be same",
      }));
      setIsError((prevState) => ({ ...prevState, confirmPassword: true }));
    } else {
      setErrorMessage((prevState) => ({ ...prevState, confirmPassword: "" }));
      setIsError((prevState) => ({ ...prevState, confirmPassword: false }));
    }
    const v =
      !isError.name &&
      !isError.email &&
      !isError.password &&
      !isError.confirmPassword &&
      !isError.tel;
    setIsValid(v);
  };

  const onChange = (e) => {
    const { id, value } = e.target;
    
    setInput((prevState) => ({ ...prevState, [id]: value }));
    
  };

  useEffect(() => {
    validate();
  }, [input]);

  return (
    <>
      <Box
        className="form"
        component="form"
        noValidate={false}
        sx={{
          "& .MuiTextField-root": { m: 1, width: "35ch" },
        }}
        onChange={onChange}
        onSubmit={onSubmit}
      >
        <h1>Register</h1>
        <TextField
          required
          id="name"
          label="User Name"
          variant="standard"
          autoFocus
          error={isError.name}
          helperText={errorMessage.name}
        />
        <TextField
          required
          id="password"
          label="Password"
          variant="standard"
          type="password"
          error={isError.password}
          helperText={errorMessage.password}
        />
        <TextField
          required
          id="confirmPassword"
          label="Confirem Password"
          variant="standard"
          type="password"
          error={isError.confirmPassword}
          helperText={errorMessage.confirmPassword}
        />
        <TextField
          required
          id="email"
          label="Email"
          variant="standard"
          type="email"
          error={isError.email}
          helperText={errorMessage.email}
        />
        <TextField
          required
          id="tel"
          label="Phone Number"
          variant="standard"
          type="tel"
          error={isError.tel}
          helperText={errorMessage.tel}
        />
        <Button onClick={validate} variant="contained" type="submit">
          Register
        </Button>
      </Box>
    </>
  );
};

export default Register;
