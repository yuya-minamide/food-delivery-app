import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	_id: "",
	storeName: "",
	email: "",
};

export const storeSlice = createSlice({
	name: "store",
	initialState,
	reducers: {
		storeLogin: (state, action) => {
			state._id = action.payload.data._id;
			state.storeName = action.payload.data.storeName;
			state.email = action.payload.data.email;
		},
		storeLogout: (state) => {
			state._id = "";
			state.storeName = "";
			state.email = "";
		},
	},
});

export const { storeLogin, storeLogout } = storeSlice.actions;
export default storeSlice.reducer;
