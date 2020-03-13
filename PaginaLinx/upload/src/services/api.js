import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:44343/api'});

export default API;