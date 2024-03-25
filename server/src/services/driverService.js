const axios = require('axios')
const { formatSendResponse } = require('../utils/formatSendResponse')
const { getAllDrivers, getDriverByName, createDriver } = require('../repositories/driversRepository')

const api = "http://localhost:5000/drivers"

const getAllDriversServices = async () => {
    const apiFetch = await axios.get(api)

    const allDriversApi = apiFetch.data
    const allDriversDB = await getAllDrivers()
    
    const drivers = [ ...allDriversApi, ...allDriversDB ]

    let formattedDrivers = drivers.map(driver => formatSendResponse(driver))

    return formattedDrivers
}

const getDriverByIdServices = async (id) => {
    const apiFetch = await axios.get(`${api}/${id}`)

    const driverApi = formatSendResponse(apiFetch.data)

    return driverApi
}

const getDriverByNameServices = async (name) => {
    
    const apiFetch = await axios.get(`${api}?name.forename=${name}`)

    const driverApi = apiFetch.data
    const driverDB = await getDriverByName(name)

    const driver = [ ...driverApi, ...driverDB ]

    let formattedDriver = driver.map(driver => formatSendResponse(driver))

    return formattedDriver

}

// Servicio para crear driver en la base de datos
const createDriverServices = async (driver) => {
    const newDriver = await createDriver(driver)

    return newDriver
}

module.exports = {
    getAllDriversServices,
    getDriverByIdServices,
    getDriverByNameServices,
    createDriverServices
}