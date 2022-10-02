import axios from 'axios';
/*create an instance of axios with a default base URI when sending HTTP 
requests*/
/*JSON Server has CORS Policy by default.*/
const api = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL
    : 'https://jsonplaceholder.typicode.com/',
});

const api2 = axios.create({
  baseURL: process.env.NODE_ENV === 'production' ? process.env.REACT_APP_URL
    : 'https://localhost:5000/',
});

export default { api, api2 };

export const EndPoints = {
  todos: 'todos',
};
