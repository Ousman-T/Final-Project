// * The users-service.js module will definitely need to make AJAX requests to the Express server.

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)


const BASE_URL = '/api/users';

// * Export Api/Users/Todos
export function createTodos(todoData){
  console.log("Create Todos UserAPI");
  return sendRequest(`${BASE_URL}/orders/new`, 'POST', todoData)
}

// * Get todos
export function getTodos(userData){
  console.log("Create Todos UserAPI");
  return sendRequest(`${BASE_URL}/orders/todos`, 'POST', userData)
}
// * Update Todos
export function updateTodos(todoData){
console.log("Updating Todos");
return sendRequest(`${BASE_URL}/orders/todos`, 'POST', todoData)
}

// * Delete Todos
export function removeTodos(todoData){
    console.log("Removing Todos");
    return sendRequest(`${BASE_URL}/orders/todos/delete`, 'POST', todoData)
}

