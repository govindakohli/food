import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "Cart",
    initialState: [],
    reducers: {
        addItem: (state, action) => {
            state.push(action.payload);
        },
        removeItem: (state, action) => {
            // Removing an item by its index
            return state.filter((item, index) => index !== action.payload);
        },
        // Alternatively, you can remove an item by a unique id
        // removeItem: (state, action) => {
        //     return state.filter(item => item.id !== action.payload);
        // }
    }
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
