import React from "react";
import { Stack, Button } from "@mui/material";
import QtyComponents from "./QtyComponents";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../Store/cartSlice";

const Item = (props) => {
  const { item } = props;
  const dispatch = useDispatch();
  const isAdded = useSelector((state) =>
    state.cart.find((item) => item.id === props.item.id)
  );
  const handleAdd = () => {
    item.qty = 1;
    dispatch(addItem(item));
    
  };

  return (
    <Stack margin={"10px"} direction={"row"}>
      <div className="item">
        <h1>{item.title}</h1>
        <div>
          <span>Category :</span>
          {item.category}
        </div>
        <div>
          <span>Description : </span>
          {item.description}
        </div>
        <div>
          <span>Rate : </span>
          {item.rating.rate}
        </div>
        <div>
          <span>Price : </span>
          {item.price} $
        </div>
        {isAdded ? (
          <QtyComponents item={item}/>
        ) : (
          <div>
            <Button
              onClick={handleAdd}
              variant="contained"
              size="medium"
              style={{ borderRadius: "50px", margin: "0 auto" }}
            >
              Add To Cart
            </Button>
          </div>
        )}
      </div>
      <div className="item-image">
        <img
          width={"200px"}
          height={"300px"}
          src={item.image}
          alt={item.title}
        />
      </div>
    </Stack>
  );
};

export default Item;
