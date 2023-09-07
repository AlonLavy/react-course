import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";

const setAll = (
	currentState: ProductModel[],
	action: PayloadAction<ProductModel[]>
): ProductModel[] => {
	return [...action.payload];
};

function addOne(
	currentState: ProductModel[],
	action: PayloadAction<ProductModel>
): ProductModel[] {
	const newState = [...currentState];
	newState.push(action.payload);
	return newState;
}

function updateOne(
	currentState: ProductModel[],
	action: PayloadAction<ProductModel>
): ProductModel[] {
	const newState = [...currentState];
	newState[
		newState.findIndex(
			(product) => product.id === action.payload.id && product.id >= 0
		)
	] = action.payload;
	return newState;
}

function deleteOne(
	currentState: ProductModel[],
	action: PayloadAction<number>
): ProductModel[] {
	const newState = [...currentState];
	const index = newState.findIndex(
		(product) => product.id === action.payload && product.id >= 0
	);
	if (index) newState.splice(index, 1);
	return newState;
}

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: { setAll, addOne, deleteOne, updateOne },
});

export const productActions = productsSlice.actions;

export const productReducer = productsSlice.reducer;
