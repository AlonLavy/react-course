import { useState, useEffect } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsServices";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";
import "./OutOfStock.css";

function OutOfStock(): JSX.Element {
	const [products, setProducts] = useState<Array<ProductModel>>([]);
	useEffect(() => {
		productsService
			.getOutOfStockProducts()
			.then((products) => {
				setProducts(products);
			})
			.catch((error) => console.log(error.message));
	}, []);
	return (
		<div className="TopProducts">
			{products.length === 0 && <Spinner />}
			{products.map((product) => (
				<>
					<ProductCard product={product} />
				</>
			))}
		</div>
	);
}

export default OutOfStock;
