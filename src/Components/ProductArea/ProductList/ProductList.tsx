import { createContext, useEffect, useState } from "react";
import "./ProductList.css";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../../Models/ProductModel";
import ProductCard from "../../ProductsArea/ProductCard/ProductCard";

function ProductList(): JSX.Element {
	const [allProducts, setAllProducts] = useState<Array<ProductModel>>([]);
	useEffect(() => {
		productsService
			.getAllProducts()
			.then((products) => {
				setAllProducts(products);
			})
			.catch((error) => alert(error.message));
	}, []);

	return (
		<div className="ProductList">
			{allProducts.map((product) => (
				<>
					<ProductCard product={product} />
				</>
			))}
		</div>
	);
}

export default ProductList;
