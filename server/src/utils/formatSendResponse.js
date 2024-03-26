
const formatSendResponse = (driver) => {

    const imageUrl = "https://cdn.pixabay.com/photo/2023/08/12/08/46/ai-generated-8185136_1280.png"

    let sendResponse = {};

    // Formateo de los drivers si vienen de la API o base de datos

    if (!driver.name.forename) {
        const formattedTeams = driver.Teams.map(team => team.name).join(', ')
        sendResponse = {
            id: driver.id,
			name: driver.name,
			surname: driver.surname,
			description: driver.description || '',
			nationality: driver.nationality,
			image: driver.image,
			teams: formattedTeams,
			date: driver.date,
			isApi: false,
        }
    } else {

        sendResponse = {
            id: driver.id,
            name: driver.name.forename,
            surname: driver.name.surname,
            description: driver.description || '',
            nationality: driver.nationality,
            image: driver.image.url,
            teams: driver.teams,
            date: driver.dob,
            isApi: true,
        }
    }

    if(driver.image.url === '') {
        return {
            ...sendResponse,
            image: imageUrl,
        }
    }

    return sendResponse;

}

module.exports = {
    formatSendResponse
}