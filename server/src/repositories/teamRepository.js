const { Teams } = require('../../src/db');


// Enviar todos los teams de la base de datos
const getAllTeams = async () => {
        const teams = await Teams.findAll();
        return teams;
}

const createTeam = async (team) => {
    const newTeam = await Teams.create({ name: team });
    return newTeam;
}


module.exports = {
    getAllTeams,
    createTeam
}
