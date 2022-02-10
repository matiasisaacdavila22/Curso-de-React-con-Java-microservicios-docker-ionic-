import Customer from "./Customer";

export async function searchCustomers() {
   let url = process.env.REACT_APP_API + 'customers';
   let response = await fetch( url , {
        "method": 'GET',
        "headers": {
            'content-type': 'application/json'
        }
    });

    return await response.json();
    
}

export async function removeCustomer(id: string) {
    let url = process.env.REACT_APP_API + 'customers/' + id;
    let response = await fetch( url , {
         "method": 'DELETE',
         "headers": {
             'content-type': 'application/json'
         }
     });
 
     return await response.status;
}

export async function saveCustomer(customer:Customer) {
    let url = process.env.REACT_APP_API + 'customers';
    let response = await fetch( url , {
         "method": 'POST',
         "body":JSON.stringify(customer),
         "headers": {
             'content-type': 'application/json'
         }
     });
 
     return response.status;
}

export async function searchCustomerById(id: string) {
    let url = process.env.REACT_APP_API + 'customers/' + id;
    let response = await fetch( url , {
         "method": 'GET',
         "headers": {
             'content-type': 'application/json'
         }
     });
 
     return await response.json();
}