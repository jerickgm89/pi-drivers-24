const axios = require('axios');
const { getAllTeams, createTeam } = require('../repositories/teamRepository');

const getAllTeamsServices = async () => {
    const teams = await getAllTeams();
    return teams;
}

const createTeamServices = async (team) => {
    const newTeam = await createTeam(team);
    return newTeam;
}

const getTeamsFromApi = async () => {
    try {
        const dataApi = await axios.get('http://localhost:5000/drivers');
        const drivers = dataApi.data;
        const teams = drivers.flatMap((driver) => {
            const splittedTeams = driver.teams?.split(',') || [];
            return splittedTeams;
        });

        const uniqueTeams = teams
            .map((value) => value.trim())
            .filter((value, index, self) => self.indexOf(value) === index)
            .sort();

        const teamsInDb = await Promise.all(
            uniqueTeams.map((name) => createTeam(name))
        );

        return teamsInDb; 
        
    }
    catch (error) {
        console.log(error);
    }
}

//Verificar si la tabla Teams este vacio
const checkTeamsDB = async () => {
    try {
        const teams = await getAllTeams();      
        if ( teams == 0){
            await getTeamsFromApi();
        }
    }
    catch (error) {
        console.log(error);
    }
}

module.exports = {
    getAllTeamsServices,
    createTeamServices,
    getTeamsFromApi,
    checkTeamsDB
}