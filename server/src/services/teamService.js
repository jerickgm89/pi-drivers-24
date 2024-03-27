const { getAllTeams, createTeam } = require('../repositories/teamRepository');
const { fetchApi } = require('../utils/fetchApi')

// Obtener todos los equipos
const getAllTeamsServices = async () => {
    const teams = await getAllTeams();
    return teams;
}

// Crear un nuevo equipo
const createTeamServices = async (team) => {
    
    const teamData = {
        name: team.name
    }
    const newTeam = await createTeam(teamData);
    return newTeam;
}


// Funcion para obtener los equipos de la API
// Se obtienen los equipos de los drivers y se guardan en la tabla de Teams
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

// Verifica si hay datos en la tabla de Teams
// Si no hay, llama a la función getTeamsFromApi
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