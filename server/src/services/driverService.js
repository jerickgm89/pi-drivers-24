const axios = require('axios')
const { formatSendResponse } = require('../utils/formatSendResponse')

const api = "http://localhost:5000/drivers"

const getAllDriversServices = async () => {
    const apiFetch = await axios.get(api)

    const allDriversApi = apiFetch.data.map(driver => formatSendResponse(driver))
    
    return allDriversApi

}
const getDriverByIdServices = async (id) => {
    const apiFetch = await axios.get(`${api}/${id}`)

    const driverApi = formatSendResponse(apiFetch.data)

    return driverApi
}
const getDriverByNameServices = async (name) => {
    
    const apiFetch = await axios.get(`${api}?name.forename=${name}`)

    const driverApi = apiFetch.data.map(driver => formatSendResponse(driver))

    return driverApi

}

module.exports = {
    getAllDriversServices,
    getDriverByIdServices,
    getDriverByNameServices
}