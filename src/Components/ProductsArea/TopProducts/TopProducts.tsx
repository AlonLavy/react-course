import { useEffect, useState } from "react";
import "./TopProducts.css";
import productsService from "../../../Services/ProductsServices";
import ProductModel from "../../../Models/ProductModel";
import Spinner from "../../SharedArea/Spinner/Spinner";
import ProductCard from "../ProductCard/ProductCard";

function TopProducts(): JSX.Element {
	const [products, setProducts] = useState<Array<ProductModel>>([]);
	useEffect(() => {
		productsService
			.getTopThreeProducts()
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

export default TopProducts;
