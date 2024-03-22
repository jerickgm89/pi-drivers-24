const { Router } = require('express');

const teamController = require('../controllers/teamController');

const routerTeam = Router();

routerTeam.get('/', teamController.getAllTeams);
routerTeam.get('/:name', teamController.getTeamByName);
routerTeam.post('/', teamController.createTeam);
routerTeam.put('/:name', teamController.updateTeam);
routerTeam.delete('/:name', teamController.deleteTeam);

module.exports = routerTeam;