const { Teams } = require('../../src/db');


// Enviar todos los teams de la base de datos
const getAllTeams = async () => {
        const teams = await Teams.findAll();
        return teams;
}

// Buscar si el team por nombre usando findOne
const getTeamByName = async (name) => {
    const team = await Teams.findOne({
        where: {
            name: name
        }
    });
    return team;
}

// Crear un nuevo team
const createTeam = async (team) => {
    const newTeam = await Teams.create(team);
    return newTeam;
   
}

// Actualizar un team
const updateTeam = async (team) => {
    const updatedTeam = await Teams.update({ name: team.name }, {
        where: {
            id: team.id
        }
    });
    return updatedTeam;
}

// Eliminar un team
const deleteTeam = async (id) => {
    const deletedTeam = await Teams.destroy({
        where: {
            id: id
        }
    });
    return deletedTeam;
}

module.exports = {
    getAllTeams,
    getTeamByName,
    createTeam,
    updateTeam,
    deleteTeam
}
