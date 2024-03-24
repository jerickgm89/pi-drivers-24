const { Router } = require('express');
const routerTeam = Router();
const { getAllTeams } = require('../controllers/teamController');

routerTeam.get('/', getAllTeams);

module.exports = routerTeam;