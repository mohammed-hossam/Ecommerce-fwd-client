import { Stack } from "@mui/material";
import React from "react";

const Item = (props) => {
  const { item } = props;

  return (
    <Stack margin={"10px"} direction={"row"}>
      <div >
        <h1>{item.title}</h1>
        <div><span>Category : </span>{item.category}</div>
        <div><span>Description : </span>{item.description}</div>
        <div><span>Rate : </span>{item.rating.rate}</div>
        <div><span>Price : </span>{item.price}</div>
      </div>
      <div>
        <img width={"200px"} height={"300px"}  src={item.image} alt={item.title} />
      </div>
    </Stack>
  );
};

export default Item;
