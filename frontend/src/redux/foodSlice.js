import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	foodList: [],
};

export const foodSlice = createSlice({
	name: "food",
	initialState,
	reducers: {
		setDataFood: (state, action) => {
			console.log(action);
			state.foodList = [...action.payload];
		},
	},
});

export const { setDataFood } = foodSlice.actions;
export default foodSlice.reducer;
