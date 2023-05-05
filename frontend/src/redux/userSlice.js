import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	_id: "",
	nickName: "",
	email: "",
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		login: (state, action) => {
			console.log(action.payload.data);
			state._id = action.payload.data._id;
			state.nickName = action.payload.data.nickName;
			state.email = action.payload.data.email;
		},
		logout: (state) => {
			state._id = "";
			state.nickName = "";
			state.email = "";
		},
	},
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
