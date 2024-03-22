const { Router } = require('express');

const driverController = require('../controllers/driverController');

const routerDriver = Router();


routerDriver.get('/', driverController.getAllDrivers);
routerDriver.get('/:id', driverController.getDriverById);
routerDriver.post('/', driverController.createDriver);
routerDriver.put('/:id', driverController.updateDriver);
routerDriver.delete('/:id', driverController.deleteDriver);

module.exports = routerDriver;



