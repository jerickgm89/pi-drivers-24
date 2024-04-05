const { 
    getAllDriversServices, 
    getDriverByIdServices, 
    getDriverByNameServices,
    createDriverServices,
    updateDriverServices,
} = require('../services/driverService')

// Controlador para obtener todos los drivers de la base de datos
// Si se envía un query con el nombre del driver, se buscará por nombre
// Si no se envía un query, se obtendrán todos los drivers
const getDrivers = async (req, res) => {
    try {
        const { name, limit, offset } = req.query
        
        if(name) {
            const driver = await getDriverByNameServices(name)
            res
                .status(200)
                .json(driver)
        } else {
            const drivers = await getAllDriversServices(offset)
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

// Controlador para obtener un driver por su id
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

// Controlador para crear un nuevo driver en la base de datos
// Recibe los datos del driver en el body de la petición
// Si no se envía alguno de los datos requeridos, se retorna un error 500
const createDriver = async (req, res) => {
    try {
        const { name, surname, description, image, nationality, team, date } = req.body        

        if(!name || !surname || !description || !image || !nationality || !team || !date) {
            return res
                .status(400)
                .json({ message: 'Todos los campos son requeridos' })
        }

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

// Controlador para actualizar un driver en la base de datos
// Recibe el id del driver a actualizar y los datos a modificar
// Si no se envía alguno de los datos requeridos, se retorna un error 500
const updateDriver = async (req, res) => {
    try {
        const { id } = req.params
        const { name, surname, description, image, nationality } = req.body

        const driver = await updateDriverServices(id, {
            name, surname, description, image, nationality
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

// Controlador para eliminar un driver de la base de datos
// Recibe el id del driver a eliminar
const deleteDriver = async (req, res) => {
    try {
        const { id } = req.params

        await deleteDriverServices(id)

        res
            .status(200)
            .json({ message: 'Driver deleted' })
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
    createDriver,
    updateDriver,
    deleteDriver
}
    