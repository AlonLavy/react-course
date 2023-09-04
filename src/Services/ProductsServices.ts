import ProductModel from "../Models/ProductModel";
import axios from "axios";
import appConfig from "../Utils/AppConfig";

class ProductsService {
	public async getAllProducts(): Promise<Array<ProductModel>> {
		const response = await axios.get<Array<ProductModel>>(
			appConfig.productsURL
		);
		return response.data;
	}
}

const productsService = new ProductsService();

export default productsService;
