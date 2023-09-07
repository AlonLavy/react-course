import { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import ProductModel from "../../../Models/ProductModel";
import productsService from "../../../Services/ProductsServices";
import "./ProductDetails.css";
import ProductsService from "../../../Services/ProductsServices";
import { appStore } from "../../../Redux/AppState";

function ProductDetails(): JSX.Element {
	const params = useParams();
	const [product, setProduct] = useState<ProductModel>();

	useEffect(() => {
		(async () => {
			try {
				const id = +params.id;
				// const product = await productsService.getOneProduct(id);
				const product =
					appStore.getState().products.length !== 0
						? appStore.getState().products[
								appStore
									.getState()
									.products.findIndex((product) => product.id === id)
						  ]
						: await productsService.getOneProduct(id);
				setProduct(product);
			} catch (error: any) {
				alert(error.message);
			}
		})();

		// const id = +params.id;
		// productsService
		// 	.getOneProduct(id)
		// 	.then((product) => setProduct(product))
		// 	.catch((error) => alert(error.message));
	}, []);
	const navigator = useNavigate();
	const deleteMe = async () => {
		try {
			await productsService.deleteProduct(params.id as unknown as number);
			console.log("Product deleted");
			navigator("/products");
		} catch (error: any) {
			alert(error.message);
		}
	};

	return (
		<div className="ProductDetails">
			<h3>Name: {product?.name}</h3>
			<h3>Price: {product?.price}</h3>
			<h3>Stock: {product?.stock}</h3>
			<img src={product?.imageUrl} />
			<br />
			<NavLink to="#" onClick={deleteMe}>
				Delete
			</NavLink>
			<br />
			<NavLink to={"/products/edit/" + product?.id}>Edit</NavLink>
		</div>
	);
}

export default ProductDetails;
