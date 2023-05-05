import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import storeSliceReducer from "./storeSlice";

export const store = configureStore({
	reducer: {
		user: userSliceReducer,
		store: storeSliceReducer,
	},
});
