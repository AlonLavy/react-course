import ProductModel from "../Models/ProductModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";
import { appStore } from "../Redux/AppState";
import { productActions } from "../Redux/ProductsSlice";

class ProductsService {
	public async updateProduct(product: ProductModel, productId: number) {
		const options = {
			headers: { "content-Type": "multipart/form-data" },
		};
		const response = await axios.put<ProductModel>(
			appConfig.productsURL + productId,
			product,
			options
		);
		const updatedProduct = response.data;
	}

	public async getAllProducts(): Promise<Array<ProductModel>> {
		const products =
			appStore.getState().products.length === 0
				? (await axios.get<Array<ProductModel>>(appConfig.productsURL)).data
				: appStore.getState().products;
		appStore.dispatch(productActions.setAll(products));
		return products;
	}
	public async getTopThreeProducts(): Promise<Array<ProductModel>> {
		const products = (
			await axios.get<Array<ProductModel>>(appConfig.topProductsURL)
		).data;
		return products;
	}
	public async getOutOfStockProducts(): Promise<Array<ProductModel>> {
		const products = (
			await axios.get<Array<ProductModel>>(appConfig.outOfStockURL)
		).data;
		return products;
	}

	public async getOneProduct(id: number): Promise<ProductModel> {
		const response = await axios.get<ProductModel>(appConfig.productsURL + id);
		return response.data;
	}

	public async addProduct(product: ProductModel): Promise<void> {
		const options = {
			headers: { "content-Type": "multipart/form-data" },
		};
		const response = await axios.post<ProductModel>(
			appConfig.productsURL,
			product,
			options
		);
		const addedProduct = response.data;
		appStore.dispatch(productActions.addOne(addedProduct));
	}

	public async deleteProduct(id: number): Promise<void> {
		await axios
			.delete(appConfig.productsURL + id.toString())
			.then(() => {
				appStore.dispatch(productActions.deleteOne(id));
			})
			.catch((error: any) => alert(error.message));
	}
}

const productsService = new ProductsService();

export default productsService;
