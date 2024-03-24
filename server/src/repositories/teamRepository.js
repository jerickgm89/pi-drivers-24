const { Teams } = require('../../src/db');
const { getAllDriversServices } = require('../services/driverService');

//Crear base de datos de Teams
const getTeamsFromApi = async () => {
    try {
        const dataApi = await getAllDriversServices();
        
        for( let team of dataApi ){
           const mappedTeam = {
            apiId: team.id,
            name: team.teams ? team.teams: 'No team',
           }
           await Teams.create(mappedTeam);
        }  
        
    }
    catch (error) {
        console.log(error);
    }
}



// Enviar todos los teams de la base de datos
const getAllTeams = async () => {
        const teams = await Teams.findAll();
        return teams;
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
    getTeamsFromApi,
    getAllTeams,
    checkTeamsDB
}
