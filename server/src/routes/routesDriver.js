const { Router } = require('express');

const { 
    getDrivers, 
    getDriverById,
    createDriver
} = require('../controllers/driverController');

const routerDriver = Router();


routerDriver.get('/', getDrivers);
routerDriver.get('/:id', getDriverById);
routerDriver.post('/', createDriver);
// routerDriver.put('/:id', updateDriver);
// routerDriver.delete('/:id', deleteDriver);


module.exports = routerDriver;



