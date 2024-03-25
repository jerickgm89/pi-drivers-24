const { 
    getAllDriversServices, 
    getDriverByIdServices, 
    getDriverByNameServices 
} = require('../services/driverService')


const getDrivers = async (req, res) => {
    try {
        const { name } = req.query
        
        if(name) {
            const driver = await getDriverByNameServices(name)
            res
                .status(200)
                .json(driver)
        } else {
            const drivers = await getAllDriversServices()
            res
                .status(200)
                .json(drivers)
        }

    }
    catch (error) {
        res
            .status(500)
            .json({ message: error.message })
    }
    
}
const getDriverById = async (req, res) => {
    try {
        const { id } = req.params
        const driver = await getDriverByIdServices(id)
        res
            .status(200)
            .json(driver)
    }
    catch (error) {
        res
            .status(500)
            .json({ message: error.message })
    }
}

const createDriver = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, team, date } = req.body

        const driver = await createDriverServices({
            name, surname, description, image, nationality, team, date
        })

        res
            .status(200)
            .json(driver)
    }
    catch (error) {
        res
            .status(500)
            .json({ message: error.message })
    }
}

module.exports = {
    getDrivers,
    getDriverById,
    createDriver
}
    