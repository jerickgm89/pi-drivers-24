const { Op } = require('sequelize');
const { Driver, Teams } = require('../../src/db');

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

const createDriver = async (driverData) => {
    const driver = await Driver.create(driverData);
    return driver;
}

const updateDriver = async (id, driverData) => {
    const updatedDriver = await Driver.update(
        driverData, { where: {
                 id: id
               }
        }
    );
    return updatedDriver;
}

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