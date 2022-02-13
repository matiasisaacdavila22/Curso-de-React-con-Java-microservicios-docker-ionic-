import Employee from "./Employee";

export async function searchEmployees() {
    let url = process.env.REACT_APP_API + 'employees';
    let response = await fetch( url , {
         "method": 'GET',
         "headers": {
             'content-type': 'application/json'
         }
     });
 
     return await response.json();
     
 }
 
 export async function removeEmployee(id: string) {
     let url = process.env.REACT_APP_API + 'employees/' + id;
     let response = await fetch( url , {
          "method": 'DELETE',
          "headers": {
              'content-type': 'application/json'
          }
      });
  
      return await response.status;
 }
 
 export async function saveEmployee(employee:Employee) {
     let url = process.env.REACT_APP_API + 'employees';
     let response = await fetch( url , {
          "method": 'POST',
          "body":JSON.stringify(employee),
          "headers": {
              'content-type': 'application/json'
          }
      });
  
      return response.status;
 }
 
 export async function searchEmployeeById(id: string) {
     let url = process.env.REACT_APP_API + 'employees/' + id;
     let response = await fetch( url , {
          "method": 'GET',
          "headers": {
              'content-type': 'application/json'
          }
      });
  
      return await response.json();
 }