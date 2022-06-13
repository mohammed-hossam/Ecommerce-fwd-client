import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            const item = action.payload;
            
            state.push({
                id: item.id,
                name: item.title,
                price: item.price,
                qty: item.qty,
                images: [item.image]
            });

        },
        removeItem: (state, action) => {
            
            state.splice(action.payload, 1);
        },
        clearCart: (state, action) => {
            state = [];
        },
        updateQty: (state, action) => {
            const { id, op } = action.payload;
            const item = state.find(item => item.id === id);
            item.qty = op === "+" ? item.qty + 1 : item.qty !== 1 ? item.qty - 1 : 1;
        }
    },
});

export default cartSlice.reducer
export const { addItem, removeItem, clearCart, updateQty } = cartSlice.actions;