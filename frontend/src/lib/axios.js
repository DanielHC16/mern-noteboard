import axios from 'axios';

// in producttion, there's no local host -- we have to make the BASE_URL dynamic (depending on the domain we deploy it to)
const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api"

const api = axios.create({
    baseURL: BASE_URL 
})

export default api;