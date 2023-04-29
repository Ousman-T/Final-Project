// * We will use a src/utilities/users-service.js module to organize functions used to sign-up, log in, log out, etc.

//* SignUpForm.jsx <--> users-service.js <--> users-api.js <-Internet-> server.js (Express)

//* handleSubmit <--> [signUp]-users-service <--> [signUp]-users-api <-Internet-> server.js (Express)

import * as usersApi from './users-api';

//* Get User
export function getUser() {
    const token = getToken();
    return token ? JSON.parse(atob(token.split('.')[1])).user : null;
}

//* SignUp
export async function createTodos(todoData) {
     // Delegate the network request code to the users-api.js API module
    // which will ultimately return a JSON Web Token (JWT)
    // console.log('[From SignUP function]', userData);
    const token = await usersApi.createTodos(todoData);
    // saves token to localStorage
    localStorage.setItem('token', token);
    
    return getUser();
}

//* LogOut
export function logOut() {
    localStorage.removeItem('token')
}

export async function login(credentials) {
    const token = await usersApi.login(credentials)
    localStorage.setItem('token', token);
    return getUser();
}

export async function checkToken() {
    return usersApi.checkToken().then(dateStr => new Date(dateStr))
}