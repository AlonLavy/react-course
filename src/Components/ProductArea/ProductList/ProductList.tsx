import { useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsServices";
import ProductCard from "../../ProductsArea/ProductCard/ProductCard";
import "./ProductList.css";
import useTitle from "../../../Utils/UseTitle";
import Spinner from "../../SharedArea/Spinner/Spinner";

function ProductList(): JSX.Element {
	useTitle("Northwind | Product");
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
			{allProducts.length === 0 && <Spinner />}
			{allProducts.map((product) => (
				<>
					<ProductCard product={product} />
				</>
			))}
		</div>
	);
}

export default ProductList;
