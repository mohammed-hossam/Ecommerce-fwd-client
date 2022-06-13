import React from "react";
import { useSelector } from "react-redux";
import { removeItem } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
import QtyComponents from "../Components/QtyComponents";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

const CartPage = () => {
  const itemsCart = useSelector((state) => state.cart) || [];
  const total = itemsCart.reduce((a, b) => a + b.price * b.qty, 0).toFixed(2);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  console.log(itemsCart[0]);

  return (
    <div style={{ width: "100%", height: "400px" }}>
      {itemsCart.length === 0 ? (
        <div style={{ padding: "25px", fontWeight: "bold" }}>
          <div>Your Cart empty</div>
          <Button
            variant="contained"
            style={{ margin: "10px 0", fontWeight: "bold" }}
          >
            <Link style={{ color: "#fff" }} to="/">
              Contune Shoping
            </Link>
          </Button>
        </div>
      ) : (
        <>
          <table>
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Qty</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            {itemsCart.map((item) => (
              <tbody key={item.id}>
                <tr>
                  <td>
                    <img
                      src={item.images[0]}
                      alt={item.name}
                      width="50px"
                      height="50px"
                    ></img>
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} $</td>
                  <td>
                    <QtyComponents item={item} />
                  </td>
                  <td>{(item.price * item.qty).toFixed(2)} $</td>
                  <td>
                    <button
                      onClick={() => {
                        handleRemove(item);
                      }}
                    >
                      X
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
            <tfoot>
              <tr>
                <td>Total</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{total} $</td>
              </tr>
            </tfoot>
          </table>
          <div
            style={{
              margin: "0 20px",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <Link to="/">
              <Button
                variant="contained"
                style={{ margin: "10px 0", fontWeight: "bold" }}
              >
                Contune Shoping
              </Button>
            </Link>
            <Link to="/checkout">
              <Button variant="contained" style={{ fontWeight: "bold" }}>
                Proceed To Checkout
              </Button>
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
