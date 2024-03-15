import axios from "axios";

const url = 'http://localhost:8080/lab4-1.0-SNAPSHOT';
export const api = axios.create({baseURL:  `${url}/api`, withCredentials: false});
