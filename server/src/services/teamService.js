const { getAllTeams } = require('../repositories/teamRepository');

const getAllTeamsServices = async () => {
    const teams = await getAllTeams();
    return teams;
}

module.exports = {
    getAllTeamsServices
}