const axios = require('axios');
const API = 'http://localhost:5000/drivers';

// Peticion a la API de drivers
const fetchApi = async (offset) => {
    try {
        const url = offset ? `${API}?_limit=10&_start=${offset}` : API;
        const dataApi = await axios.get(url);
        return dataApi.data;
    }
    catch (error) {
        console.log(error);
    }
}

// Petición por id
const fetchApiById = async (id) => {
    try {
        const dataApi = await axios.get(`${API}/${id}`);
        return dataApi.data;
    }
    catch (error) {
        console.log(error);
    }
}

// Petición por nombre
const fetchApiByName = async (name) => {
    try {
        const dataApi = await axios.get(`${API}?name.forename=${name}`);
        return dataApi.data;
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    fetchApi,
    fetchApiById,
    fetchApiByName
}