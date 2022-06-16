import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            
            state.push({
                id: item._id,
                name: item.name,
                price: item.price,
                qty: item.qty,
                images: [item.images[0]]
            });

        },
        removeItem: (state, action) => {
            
            state.splice(action.payload, 1);
        },
        clearCart: (state, action) => {
            state = [];
        },
        updateQty: (state, action) => {
            const { id: _id, op } = action.payload;
            console.log(_id, op);
            const item = state.find(item => item.id === _id);
            item.qty = op === "+" ? item.qty + 1 : item.qty !== 1 ? item.qty - 1 : 1;
        }
    },
});

export default cartSlice.reducer
export const { addItem, removeItem, clearCart, updateQty } = cartSlice.actions;