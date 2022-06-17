import React from "react";
import { Button, Stack } from "@mui/material";
import { updateQty } from "../Store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import RemoveRoundedIcon from "@mui/icons-material/RemoveRounded";

const QtyComponents = (props) => {

  const  id  = props.item._id || props.item.id;
  const name = props.item.title || props.item.name;
  

  const dispatch = useDispatch();
  const item =
    useSelector((state) => state.cart.find((item) => item.id === id)) ;

  const qty = item === undefined ? 0 : item.qty;

  const handleQty = (op) => {

    dispatch(updateQty({ id: id, op: op,name:name }));
  };

  return (
    <Stack className="qty-comp" margin={"0 auto"} direction={"row"}>
      <Button
        onClick={() => {
          handleQty("-");
        }}
      >
        <RemoveRoundedIcon />
      </Button>
      <span>{qty}</span>
      <Button
        onClick={() => {
          handleQty("+");
        }}
      >
        <AddRoundedIcon />
      </Button>
    </Stack>
  );
};

export default QtyComponents;
