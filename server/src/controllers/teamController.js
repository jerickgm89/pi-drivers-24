// Obtiene un arreglo con todos los teams existentes de la API. 
// En una primera instancia, cuando la base de datos este vacía, deberás guardar todos los teams que encuentres en la API.
// Estos deben ser obtenidos de la API (se evaluará que no haya hardcodeo). Luego de obtenerlos de la API, deben ser guardados en la base de datos para su posterior consumo desde allí.

const { getAllTeamsServices } = require('../services/teamService');

// Obteniendo los teams de la base de datos
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