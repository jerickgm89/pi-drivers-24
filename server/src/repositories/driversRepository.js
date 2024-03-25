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

const createDriver = async (driver) => {
    const newDriver = await Driver.create({
        name: driver.name,
        surname: driver.surname,
        description: driver.description,
        image: driver.image,
        nationality: driver.nationality,
        date: driver.date
    });
    return newDriver;
}

module.exports = {
    getAllDrivers,
    getDriverById,
    getDriverByName,
    createDriver
}