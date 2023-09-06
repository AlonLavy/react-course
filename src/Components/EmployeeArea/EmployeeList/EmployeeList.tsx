import { useEffect, useState } from "react";
import EmployeeModel from "../../../Models/EmployeeModel";
import employeesService from "../../../Services/EmployeesService";
import useTitle from "../../../Utils/UseTitle";

function EmployeeList(): JSX.Element {
  useTitle("Northwind | Home");
  const [allEmployees, setAllEmployees] = useState<
    Array<EmployeeModel> | Array<Array<EmployeeModel>>
  >([]);
  let newAllEmployees: any = [];
  useEffect(() => {
    employeesService
      .getAllEmployees()
      .then((employees) => {
        setAllEmployees(employees);
        const employeeRow: Array<EmployeeModel> = [];
        for (const employee of employees) {
          if (employee.id % 5 === 0) {
            newAllEmployees.push(employeeRow);
            employeeRow.splice(0, employeeRow.length);
          } else if (employee.id === employees.length) {
            newAllEmployees.push(employeeRow);
          } else {
            employeeRow.push(employee);
          }
        }
        setAllEmployees(newAllEmployees);
      })
      .catch((error) => alert(error.message));
  }, []);

  return (
    <div className="EmployeeList">
      {!allEmployees ? (
        <></>
      ) : (
        allEmployees.map(
          (employeeRow: Array<EmployeeModel> | EmployeeModel) => {
            return (
              <tr>
                {(employeeRow as Array<EmployeeModel>).map((employee) => {
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
          },
        )
      )}
    </div>
  );
}

export default EmployeeList;
