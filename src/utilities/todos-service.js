// * We will use a src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)

import * as usersApi from './users-api';

//* Get User

//* SignUp
export async function createTodos(todoData) {
     // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    // console.log('[From SignUP function]', userData);
    console.log("Create todos In service");
    const token = await usersApi.createTodos(todoData);
    // saves token to localStorage   
    return token; 
}

