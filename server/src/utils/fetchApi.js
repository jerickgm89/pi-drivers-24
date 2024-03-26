//Peticion de datos a la API
const axios = require('axios');
const API = 'http://localhost:5000/drivers';

const fetchApi = async () => {
    try {
        const dataApi = await axios.get(API);
        return dataApi.data;
    }
    catch (error) {
        console.log(error);
    }
}

// por Id
const fetchApiById = async (id) => {
    try {
        const dataApi = await axios.get(`${API}/${id}`);
        return dataApi.data;
    }
    catch (error) {
        console.log(error);
    }
}

// Por nombre
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