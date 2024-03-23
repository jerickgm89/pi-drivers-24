const { Router } = require('express');

const { 
    getDrivers, 
    getDriverById
} = require('../controllers/driverController');

const routerDriver = Router();


routerDriver.get('/', getDrivers);
routerDriver.get('/:id', getDriverById);


module.exports = routerDriver;



