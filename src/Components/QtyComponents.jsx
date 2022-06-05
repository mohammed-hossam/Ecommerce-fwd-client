import { Button, Stack } from "@mui/material";
import React, { useState } from "react";

const QtyComponents = () => {
  const [qty, setQty] = useState(1);

  const handleQty = (op) => {
    op === "+" ? setQty(qty + 1) : qty !== 1 ? setQty(qty - 1) : setQty(1);
  };

  return (
    <Stack margin={"0 auto"} direction={"row"}>
      <Button
        onClick={() => {
          handleQty("-");
        }}
      >
        -
      </Button>
      <span>{qty}</span>
      <Button
        onClick={() => {
          handleQty("+");
        }}
      >
        +
      </Button>
    </Stack>
  );
};

export default QtyComponents;
