import React from "react";
import { Stack } from "@mui/material";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import ios from "../assets/apple-logo.svg";
import android from "../assets/android-logo.svg";

const ContactUS = () => {
  return (
    <Stack direction="row" spacing={1} sx={{ alignItems: "center" }}>
      <LocalPhoneIcon />
      <span>
        <a style={{textDecoration:"none",color:"#fff"}} href="tel:16789">Hotline 16789</a>
      </span>
      <span>Download app now</span>
      <img src={ios} width={20} alt="ios" />
      <img src={android} width={20} alt="android" />
    </Stack>
  );
};

export default ContactUS;
