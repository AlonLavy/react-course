import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import UserModel from "../Models/UserModel";

const register = (
	currentState: UserModel,
	action: PayloadAction<UserModel>
): UserModel => {
	const newState = action.payload;
	return newState;
};

const login = (
	currentState: UserModel,
	action: PayloadAction<UserModel>
): UserModel => {
	const newState = action.payload;
	return newState;
};

const logout = (
	currentState: UserModel,
	action: PayloadAction<UserModel>
): null => {
	return null;
};

const authSlice = createSlice({
	name: "auth",
	initialState: null,
	reducers: { register, login, logout },
});

export const authActions = authSlice.actions;
export const authReducer = authSlice.reducer;
