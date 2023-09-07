import { configureStore } from "@reduxjs/toolkit";
import ProductModel from "../Models/ProductModel";
import { productReducer } from "./ProductsSlice";

export type AppState = {
    products: ProductModel[]
}

export const appStore = configureStore<AppState>({
    reducer: {
        products: productReducer
    }
})