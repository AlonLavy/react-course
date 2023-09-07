import { useForm } from "react-hook-form";
import ProductModel from "../../../Models/ProductModel";
import "./EditProduct.css";
import productsService from "../../../Services/ProductsServices";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { appStore } from "../../../Redux/AppState";

function EditProduct(): JSX.Element {
	const { register, handleSubmit, formState, setValue, watch } =
		useForm<ProductModel>();
	const navigate = useNavigate();
	const params = useParams<{ id: string }>();
	useEffect(() => {
		const id = +params.id;
		if (appStore.getState().products.length === 0) {
			productsService
				.getOneProduct(id)
				.then((product) => {
					setValue("name", product.name);
					setValue("price", product.price);
					setValue("stock", product.stock);
					setValue("id", id);
					setValue("imageUrl", product.imageUrl);
				})
				.catch((error) => alert(error.message));
		} else {
			const product =
				appStore.getState().products[
					appStore.getState().products.findIndex((product) => product.id === id)
				];
			setValue("name", product.name);
			setValue("price", product.price);
			setValue("stock", product.stock);
			setValue("id", id);
			setValue("imageUrl", product.imageUrl);
		}
	}, []);

	const send = async (product: ProductModel) => {
		product.image = (product.image as unknown as FileList)[0];
		try {
			console.log(product);
			await productsService.updateProduct(product, watch("id"));
			console.log("Product has been updated");
			navigate("/products");
		} catch (error: any) {
			alert(error.message);
		}
	};
	return (
		<div className="EditProduct">
			<form onSubmit={handleSubmit(send)}>
				<h2>Edit Product</h2>

				<label>Name: </label>
				<input type="text" {...register("name", ProductModel.nameValidation)} />
				<label>Price: </label>
				<input
					type="number"
					step={0.01}
					{...register("price", ProductModel.priceValidation)}
				/>
				<label>Stock: </label>
				<input
					type="number"
					step={1}
					{...register("stock", ProductModel.stockValidation)}
				/>
				<label>Image: </label>
				<img src={watch("imageUrl")} />
				<input type="file" accept="image/*" {...register("image")} />

				<button>Update</button>

				<span>{formState.errors?.name?.message}</span>
			</form>
		</div>
	);
}

export default EditProduct;
