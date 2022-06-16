import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Badge, Button, Divider, Menu, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import { Link } from "react-router-dom";
import { removeItem } from "../Store/cartSlice";
import { IMAGEPATH } from "../helper/const";

const CartCar = () => {
  const cartItems = useSelector((state) => state.cart) || [];
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeFromItemCard = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div>
      <Button
        style={{ color: "white" }}
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Badge badgeContent={cartItems.reduce((a, b) => a + b.qty, 0)} color="warning">
          <ShoppingCartIcon style={{ fontSize: "1.5rem" }} />
        </Badge>
        <span style={{ margin: "0 5px" }}>Shopping Cart</span>
        <ArrowDropDownRoundedIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <Stack spacing={1} sx={{ width: "300px", padding: "5px 15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{cartItems.reduce((a, b) => a + b.qty, 0)} Item</span>
            <Link to="/cart">View Cart</Link>
          </div>
          <Divider />
          {cartItems.length === 0 ? (
            "No items in cart"
          ) : (
            <>
              {cartItems.map((item) => (
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                  key={item.id}
                >
                  <span><img src={`${IMAGEPATH}${item.images[0]}`} width="20px" height="20px"></img></span>
                  <span>{item.name.slice(0, 15)}</span>
                  <span> Qty :{item.qty}</span>
                  <span>{item.price} LE</span>
                  <span
                    onClick={() => removeFromItemCard(item)}
                    style={{
                      color: "red",
                      fontWeight: "bolder",
                      cursor: "pointer",
                    }}
                  >
                    X
                  </span>
                </div>
              ))}
              <Divider />
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span>Total</span>
                <span>
                  {cartItems.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2)} LE
                </span>
              </div>
              <Divider />
            </>
          )}
        </Stack>
      </Menu>
    </div>
  );
};

export default CartCar;
/*
<Button style={{ color: "white" }}>
        <ShoppingCartIcon style={{ fontSize: "2rem" }} />
        <span style={{ margin: "0 5px" }}>Shopping Cart</span>
      </Button>
*/
