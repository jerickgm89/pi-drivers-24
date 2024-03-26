const { Teams } = require('../../src/db');


// Enviar todos los teams de la base de datos
const getAllTeams = async () => {
        const teams = await Teams.findAll();
        return teams;
}

const createTeam = async (team) => {
    const newTeam = await Teams.create(team);
    return newTeam;
   
}

const updateTeam = async (team) => {
    const updatedTeam = await Teams.update({ name: team.name }, {
        where: {
            id: team.id
        }
    });
    return updatedTeam;
}

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
    createTeam,
    updateTeam,
    deleteTeam
}
