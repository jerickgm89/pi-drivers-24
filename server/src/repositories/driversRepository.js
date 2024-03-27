const { Op } = require('sequelize');
const { Driver, Teams } = require('../../src/db');

// Buscando todos los drivers en la base de datos
const getAllDrivers = async () => {
    const drivers = await Driver.findAll({
        include: {
            model: Teams,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    return drivers;
}

// Buscando driver por id
const getDriverById = async (id) => {
    const driver = await Driver.findOne({
        where: {
            id: id
        },
        include: {
            model: Teams,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    return driver;
}

// Buscando driver por nombre o si coincide con la base de datos
const getDriverByName = async (name) => {
    const driver = await Driver.findAll({
        where: {
            name: {
                [Op.like]: `%${name}%`
            }
        },
        include: {
            model: Teams,
            attributes: ['name'],
            through: {
                attributes: []
            }
        }
    });

    return driver;
}

// Creando un nuevo driver
const createDriver = async (driverData) => {
    const driver = await Driver.create(driverData);
    return driver;
}

// Actualizando un driver
const updateDriver = async (id, driverData) => {
    const updatedDriver = await Driver.update(
        driverData, { where: {
                 id: id
               }
        }
    );
    return updatedDriver;
}

// Eliminando un driver
const deleteDriver = async (id) => {
    const deletedDriver = await Driver.destroy({
        where: {
            id: id
        }
    });
    return deletedDriver;
}

module.exports = {
    getAllDrivers,
    getDriverById,
    getDriverByName,
    createDriver,
    updateDriver,
    deleteDriver
}