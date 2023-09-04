import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useContext, useEffect, useState } from "react";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsServices";

function ProductDetails(): JSX.Element {
	const params = useParams();
	const [product, setProduct] = useState<ProductModel>();

	useEffect(() => {
		const id = +params.id;
		productsService
			.getOneProduct(id)
			.then((product) => setProduct(product))
			.catch((error) => alert(error.message));
	}, []);
	return (
		<div className="ProductDetails">
			<h3>Name: {product?.name}</h3>
			<h3>Price: {product?.price}</h3>
			<h3>Stock: {product?.stock}</h3>
			<h3>
				<img src={product?.imageUrl} />
			</h3>
		</div>
	);
}

export default ProductDetails;
