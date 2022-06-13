import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Toast = () => {
  const [show,setShow] = useState(false);
  const toast = useSelector((state) => state.toast)[0];
  const { message, color } = toast;
  useEffect(() => {
    if (message) {
      setTimeout(() => {
        setShow(false);
      }, 3000);
      setShow(true);
    }
  }, [toast]);
  const className = show ? "in" : "out";
  return (
    <div id="snakebar" className={className} style={{ backgroundColor: color }}>
      {message}
    </div>
  );
};

export default Toast;
