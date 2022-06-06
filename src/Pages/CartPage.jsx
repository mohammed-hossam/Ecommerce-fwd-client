import React from "react";
import { useSelector } from "react-redux";
import { removeItem } from "../Store/cartSlice";
import { useDispatch } from "react-redux";
import QtyComponents from "../Components/QtyComponents";

const CartPage = () => {
  const itemsCart = useSelector((state) => state.cart) || [];

  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch(removeItem(item));
  };

  return (
    <div style={{ width: "100%", height: "400px" }}>
      <table>
        <thead>
          <tr>
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
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td><QtyComponents id={item.id}/></td>
              <td>{item.price * item.qty}</td>
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
            <td>{itemsCart.reduce((a, b) => a + b.price * b.qty, 0)}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default CartPage;
