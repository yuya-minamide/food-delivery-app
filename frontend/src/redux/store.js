import foodSliceReducer from "./foodSlice";
import { configureStore } from "@reduxjs/toolkit";
import storeSliceReducer from "./storeSlice";
import userSliceReducer from "./userSlice";

export const store = configureStore({
	reducer: {
		user: userSliceReducer,
		store: storeSliceReducer,
		food: foodSliceReducer,
	},
});
