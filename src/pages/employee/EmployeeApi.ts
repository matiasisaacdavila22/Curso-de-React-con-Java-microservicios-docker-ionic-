import Employee from "./Employee";

export function searchEmployees() {
   
    if(!localStorage['employees']){
        localStorage[('employees')] = '[]';
    }
    let employees = localStorage['employees'];
    employees = JSON.parse(employees);
    return employees;
}

export function removeEmployee(id: string) {
    let employees = searchEmployees();
    let indice = employees.findIndex( (employee:Employee) => employee.id === id);
    employees.splice(indice,1);
    localStorage['employees'] = JSON.stringify(employees);
}

export function saveEmployee(employee:Employee) {
    let employees = searchEmployees();
    if(employee.id){
        let indice = employees.findIndex( (element:Employee) => element.id == employee.id);
        employees[indice] = employee;
    }else{
        employee.id = Math.round(Math.random() * 100000).toString();
        employees.push(employee);
    }
 
    localStorage['employees'] = JSON.stringify(employees);
}

export function searchEmployeeById(id: string) {
    let employees = searchEmployees();
    return employees.find((employee:Employee) => employee.id == id);
}