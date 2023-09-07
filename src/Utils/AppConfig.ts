class AppConfig {
	public productsURL = "http://localhost:3030/api/products/";
	public topProductsURL = "http://localhost:3030/api/products/top-three";
	public registerURL = "http://localhost:3030/api/register/";
	public loginURL = "http://localhost:3030/api/login/";
    public employeesURL = "http://localhost:3030/api/employees/";
    public outOfStockURL = "http://localhost:3030/api/products/out-of-stock";
}

const appConfig = new AppConfig();

export default appConfig;
