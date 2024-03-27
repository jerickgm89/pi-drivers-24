const { Router } = require('express');
const routerTeam = Router();
const { getAllTeams } = require('../controllers/teamController');

// Rutas para teams
routerTeam.get('/', getAllTeams);

module.exports = routerTeam;