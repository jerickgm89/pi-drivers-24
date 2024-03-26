const { formatSendResponse } = require('../utils/formatSendResponse')
const { fetchApi, fetchApiById, fetchApiByName } = require('../utils/fetchApi')
const { getAllDrivers, getDriverById, getDriverByName, createDriver, updateDriver, deleteDriver } = require('../repositories/driversRepository')
const { getTeamByName, createTeam } = require('../repositories/teamRepository')


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
const createDriverServices = async (driverData) => {

    const newDriver = await createDriver({
        name: driverData.name,
        surname: driverData.surname,
        description: driverData.description,
        image: driverData.image,
        nationality: driverData.nationality,
        date: driverData.date,
    })

    const teamsArray = driverData.team.split(',');

    for (const newTeams of teamsArray) {
        let team = await getTeamByName(newTeams.trim());

        if (!team) {
            team = await createTeam({ name: newTeams.trim() });
        }

        await newDriver.addTeam(team);
    }

    const driverWithTeam = await getDriverById(newDriver.id);

    const teams = driverWithTeam.Teams.map((team) => team.name).join(', ');
    return { ...driverWithTeam.dataValues, Teams: teams };

}

const updateDriverServices = async (id, driver) => {
    // Verificar si existe el Driver
    const driverOnly = await getDriverById(id)

    if(!driverOnly) {
        throw new Error('Driver not found')
    }   

    const updatedDriver = await updateDriver(id, {
        name: driver.name,
        surname: driver.surname,
        description: driver.description,
        image: driver.image,
        nationality: driver.nationality,
    })

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