import ProductModel from "../Models/ProductModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";

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
		const response = await axios.get<Array<ProductModel>>(
			appConfig.productsURL
		);
		return response.data;
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
	}

	public async deleteProduct(id: number): Promise<void> {
		await axios.delete(appConfig.productsURL + id.toString());
	}
}

const productsService = new ProductsService();

export default productsService;
