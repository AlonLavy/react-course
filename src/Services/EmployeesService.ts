import axios from "axios";
import EmployeeModel from "../Models/EmployeeModel";
import appConfig from "../Utils/AppConfig";

class EmployeeService {
	public async getAllEmployees(): Promise<Array<EmployeeModel>> {
		const response = await axios.get<Array<EmployeeModel>>(
			appConfig.employeesURL
		);
		return response.data;
	}

	public async getOneEmployee(id: number): Promise<EmployeeModel> {
		const response = await axios.get<EmployeeModel>(
			appConfig.employeesURL + id
		);
		return response.data;
	}
}

const employeesService = new EmployeeService();

export default employeesService;
