import React, { useState } from "react";
import { Button, Divider, Menu, Stack } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";

const itemsCart = [
  { id: 1, name: "Item 1", price: 30, Qty: 1 },
  { id: 2, name: "Item 2", price: 60, Qty: 2 },
];

const CartCar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [cartItems, setItemscart] = useState(itemsCart);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const removeFromItemCard = (id) => {
    setItemscart(cartItems.filter((item) => item.id !== id));
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
        <ShoppingCartIcon style={{ fontSize: "2rem" }} />
        <span style={{ margin: "0 5px" }}>Shopping Cart</span>
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
        <Stack spacing={1} sx={{ width: "250px", padding: "5px 15px" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <span>{cartItems.reduce((a, b) => a + b.Qty, 0)} Item</span>
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
                  <span>{item.name}</span>
                  <span> Qty :{item.Qty}</span>
                  <span>{item.price} LE</span>
                  <span
                    onClick={() => removeFromItemCard(item.id)}
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
                  {cartItems.reduce((a, b) => a + b.price * b.Qty, 0)} LE
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
