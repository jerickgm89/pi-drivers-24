const { formatSendResponse } = require('../utils/formatSendResponse')
const { fetchApi, fetchApiById, fetchApiByName } = require('../utils/fetchApi')
const { getAllDrivers, getDriverById, getDriverByName, createDriver, updateDriver, deleteDriver } = require('../repositories/driversRepository')


const getAllDriversServices = async () => {
    const driversApi = await fetchApi()

    const driversDB = await getAllDrivers()

    const drivers = [ ...driversApi, ...driversDB ]

    let formattedDrivers = drivers.map(driver => formatSendResponse(driver))

    return formattedDrivers
}

const getDriverByIdServices = async (id) => {
    try {
        const driverApi = await fetchApiById(id)

        let formattedDriver = formatSendResponse(driverApi)

        return formattedDriver
    
    } catch {
        const driverDB = await getDriverById(id)

        let formattedDriver = formatSendResponse(driverDB)

        return formattedDriver
    
    }
}

const getDriverByNameServices = async (name) => {
    const driverApi = await fetchApiByName(name)
    const driverDB = await getDriverByName(name)

    const driver = [ ...driverApi, ...driverDB ]

    let formattedDriver = driver.map(driver => formatSendResponse(driver))

    return formattedDriver

}

// Servicio para crear driver en la base de datos
const createDriverServices = async (driver, team) => {
    let driverData = {
        name: driver.name,
        surname: driver.surname,
        description: driver.description,
        image: driver.image,
        nationality: driver.nationality,
        date: driver.date
    }
    const newDriver = await createDriver(driverData, team)

    return newDriver

}

const updateDriverServices = async (id, driver) => {
    // Verificar si existe el Driver
    const driverOnly = await getDriverById(id)

    if(!driverOnly) {
        throw new Error('Driver not found')
    }   

    let driverData = {
        name: driver.name,
        surname: driver.surname,
        description: driver.description,
        image: driver.image,
        nationality: driver.nationality,
    }
    const updatedDriver = await updateDriver(id, driverData)

    return updatedDriver
}

const deleteDriverServices = async (id) => {
    // Verificar si existe el Driver
    const driver = await getDriverById(id)

    if(!driver) {
        throw new Error('Driver not found')
    }   

    const deletedDriver = await deleteDriver(id)

    return deletedDriver
}

module.exports = {
    getAllDriversServices,
    getDriverByIdServices,
    getDriverByNameServices,
    createDriverServices,
    updateDriverServices,
    deleteDriverServices
}