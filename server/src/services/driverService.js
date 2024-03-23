const axios = require('axios')
const { formatSendResponse } = require('../utils/formatSendResponse')

const getAllDriversServices = async () => {
    const apiFetch = await axios.get('http://localhost:5000/drivers')

    //Formateando la respuesta de apiFetch
    const allDriversApi = apiFetch.data.map(driver => formatSendResponse(driver))
    
    return allDriversApi

}
const getDriverByIdServices = async (id) => {
    const apiFetch = await axios.get(`http://localhost:5000/drivers/${id}`)

    //Formateando la respuesta de apiFetch
    const driverApi = formatSendResponse(apiFetch.data)

    return driverApi
}
const getDriverByNameServices = async (name) => {
    const apiFetch = await axios.get(`http://localhost:5000/drivers?name.forename=${name}`)

    //Formateando la respuesta de apiFetch
    const driverApi = apiFetch.data.map(driver => formatSendResponse(driver))

    return driverApi

}

module.exports = {
    getAllDriversServices,
    getDriverByIdServices,
    getDriverByNameServices
}