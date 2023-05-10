import { createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

const initialState = {
	foodList: [],
	cartItem: [],
};

export const foodSlice = createSlice({
	name: "food",
	initialState,
	reducers: {
		setDataFood: (state, action) => {
			state.foodList = [...action.payload];
		},
		addCartItem: (state, action) => {
			const check = state.cartItem.some((el) => el.id === action.payload.id);
			if (check) {
				toast.error("Your cart already has this food!");
			} else {
				toast.success("One food is added successfully!");
				const total = action.payload.price;
				state.cartItem = [...state.cartItem, { ...action.payload, qty: 1, total: total }];
			}
		},
		deleteCartItem: (state, action) => {
			toast.success("One food is deleted!");
			const foundItemIdx = state.cartItem.findIndex((el) => el.id === action.payload);
			state.cartItem.splice(foundItemIdx, 1);
		},
		increaseQty: (state, action) => {
			const foundItemIdx = state.cartItem.findIndex((el) => el.id === action.payload);
			let qty = state.cartItem[foundItemIdx].qty;
			const qtyInc = ++qty;
			state.cartItem[foundItemIdx].qty = qtyInc;
			const price = state.cartItem[foundItemIdx].price;
			const totalAmount = price * qtyInc;
			state.cartItem[foundItemIdx].total = totalAmount;
		},
		decreaseQty: (state, action) => {
			const foundItemIdx = state.cartItem.findIndex((el) => el.id === action.payload);
			let qty = state.cartItem[foundItemIdx].qty;
			if (qty > 1) {
				const qtyDec = --qty;
				state.cartItem[foundItemIdx].qty = qtyDec;
				const price = state.cartItem[foundItemIdx].price;
				const totalAmount = price * qtyDec;
				state.cartItem[foundItemIdx].total = totalAmount;
			}
		},
		clearCart: (state) => {
			state.cartItem = [];
		},
	},
});

export const { setDataFood, addCartItem, deleteCartItem, increaseQty, decreaseQty, clearCart } = foodSlice.actions;
export default foodSlice.reducer;
