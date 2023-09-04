import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";

function EmployeeList(): JSX.Element {
	const [allEmployees, setAllEmployees] = useState<Array<EmployeeModel>>([]);
	const [newAllEmployees, setNewAllEmployees] = useState<
		Array<Array<EmployeeModel>>
	>([]);
	useEffect(() => {
		employeesService
			.getAllEmployees()
			.then((employees) => {
				setAllEmployees(employees);
			})
			.catch((error) => alert(error.message));
	}, []);

	useEffect(() => {
		const employeeRow: Array<EmployeeModel> = [];
		for (const employee of allEmployees) {
			if (employee.id % 5 === 0) {
				const copyNewAllEmployees = newAllEmployees;
				copyNewAllEmployees.push(employeeRow);
				setNewAllEmployees(copyNewAllEmployees);
				employeeRow.length = 0;
			} else {
				employeeRow.push(employee);
			}
		}
	}, [allEmployees]);

	return (
		<div className="EmployeeList">
			{!newAllEmployees ? (
				<></>
			) : (
				newAllEmployees.map((employeeRow: Array<EmployeeModel>) => {
					return (
						<tr>
							{employeeRow.map((employee) => {
								return (
									<td>
										First Name: {employee.firstName}
										<br></br>
										Last Name: {employee.lastName}
										<br></br>
										Birthday: {employee.birthDate}
										<br></br>
										Country: {employee.country}
										<br></br>
										City: {employee.city}
										<br></br>
										Title: {employee.title}
										<br></br>
										<img src={employee.imageUrl}></img>
									</td>
								);
							})}
						</tr>
					);
				})
			)}
		</div>
	);
}

export default EmployeeList;
