import React, { useState } from "react";
import { Button } from "@mui/material";
import LogIn from "../Components/LogIn";
import Register from "../Components/Register";

const SignInPage = () => {
  const [isLogIn, setIsLogIn] = useState(true);

  const handleClick = () => {
    setIsLogIn(!isLogIn);
  };

  return (
    <div>
      {isLogIn ? <LogIn /> : <Register />}
      <div style={{margin:"1rem auto",width:"fit-content"}}>
        <span>Do you Need : </span>
        <Button onClick={handleClick}>{isLogIn ? "Register" : "Log in"}</Button>
      </div>
    </div>
  );
};

export default SignInPage;
