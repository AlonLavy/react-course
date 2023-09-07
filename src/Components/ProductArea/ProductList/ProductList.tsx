import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsServices";
import ProductCard from "../../ProductsArea/ProductCard/ProductCard";
import "./ProductList.css";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";
import { useSelector } from "react-redux";
import { AppState } from "../../../Redux/AppState";
import TotalProducts from "../../ProductsArea/TotalProducts/TotalProducts";

function ProductList(): JSX.Element {
	useTitle("Northwind | Product");
	const allProducts = useSelector((appState: AppState) => appState.products);
	useEffect(() => {
		productsService.getAllProducts().catch((error) => alert(error.message));
	}, []);

	return (
		<div className="ProductList">
			{allProducts.length === 0 && <Spinner />}
			{allProducts.map((product) => (
				<>
					<ProductCard product={product} />
				</>
			))}

			<TotalProducts />
		</div>
	);
}

export default ProductList;
