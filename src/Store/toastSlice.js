import { createSlice } from "@reduxjs/toolkit";
import { addItem, removeItem, updateQty, clearCart } from "./cartSlice";


const toastSlice = createSlice({
    name: "toast",
    initialState: [{ message: "", color: "" }],
    reducers: {
        handleToast: (state, action) => {
            console.log(action.payload);
            state[0] = { message: action.payload.message, color: action.payload.color };
        },
    },
    extraReducers: (builder) => {
        builder.addCase(addItem, (state, action) => {
            state[0] = { message: `${action.payload.name} added to cart`, color: "#1e6a1e" };
        });
        builder.addCase(removeItem, (state, action) => {
            
            state[0] = { message: `${action.payload.name} removed from cart`, color: "#970f0f" };
        });
        builder.addCase(updateQty, (state, action) => {
            
            const { op, name } = action.payload;
            state[0] = { message: `${name} ${op === '+' ?'Add' : 'Remove'} to Cart`, color: `${op === '+' ?'#1e6a1e' : '#970f0f'}` };
        });
        builder.addCase(clearCart, (state, action) => {
            state[0] = { message: "Cart cleared", color: "#970f0f" };
        });
    }
});

export default toastSlice.reducer;
export const { handleToast } = toastSlice.actions;