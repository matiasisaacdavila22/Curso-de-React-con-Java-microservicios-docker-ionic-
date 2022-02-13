import Supplier from "./Supplier";

export async function searchSuppliers() {
    let url = process.env.REACT_APP_API + 'suppliers';
    let response = await fetch( url , {
         "method": 'GET',
         "headers": {
             'content-type': 'application/json'
         }
     });
 
     return await response.json();
     
 }
 
 export async function removeSupplier(id: string) {
     let url = process.env.REACT_APP_API + 'suppliers/' + id;
     let response = await fetch( url , {
          "method": 'DELETE',
          "headers": {
              'content-type': 'application/json'
          }
      });
  
      return await response.status;
 }
 
 export async function saveSupplier(supplier:Supplier) {
     let url = process.env.REACT_APP_API + 'suppliers';
     let response = await fetch( url , {
          "method": 'POST',
          "body":JSON.stringify(supplier),
          "headers": {
              'content-type': 'application/json'
          }
      });
  
      return response.status;
 }
 
 export async function searchSupplierById(id: string) {
     let url = process.env.REACT_APP_API + 'suppliers/' + id;
     let response = await fetch( url , {
          "method": 'GET',
          "headers": {
              'content-type': 'application/json'
          }
      });
  
      return await response.json();
 }