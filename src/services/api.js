

import axios from 'axios';


const BASE_URL = process.env.REACT_APP_BASE_URL;

 const api = axios.create({
   baseURL: BASE_URL,  headers: {
    'Access-Control-Allow-Origin' : '*',
    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
 });

export default api;