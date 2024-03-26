const { getAllTeams, createTeam } = require('../repositories/teamRepository');
const { fetchApi } = require('../utils/fetchApi')

const getAllTeamsServices = async () => {
    const teams = await getAllTeams();
    return teams;
}

const createTeamServices = async (team) => {
    
    const teamData = {
        name: team.name
    }
    const newTeam = await createTeam(teamData);
    return newTeam;
}


//Obtener los equipos de la API y guardarlos en la base de datos

const getTeamsFromApi = async () => {
    try {
        const drivers = await fetchApi();
        const teams = drivers.map((driver) => {
            const splittedTeams = driver.teams?.split(',') || [];
            return splittedTeams;
        });

        const uniqueTeams = teams
            .flat()
            .map((value) => value.trim())
            .filter((value, index, self) => {
                return self.indexOf(value) === index;
            })
            .sort();

        const teamsInDb = await Promise.all(
            uniqueTeams.map((name) => createTeamServices({ name }))
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