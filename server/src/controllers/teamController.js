const { getAllTeamsServices } = require('../services/teamService');

// Controlador para obtener todos los equipos
// Retorna un array con todos los equipos
const getAllTeams = async (req, res) => {
    try {
        const teams = await getAllTeamsServices();
        res
            .status(200)
            .json(teams)
    }
    catch (error) {
        res
            .status(500)
            .json({ message: error.message })
    }
}

module.exports = {
    getAllTeams,
}