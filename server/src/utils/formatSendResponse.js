

const formatSendResponse = (driver) => {

    const imageUrl = " Hola la imagen por defecto va aqui"

    let sendResponse = {};

    if (!driver.name.forename) {
        sendResponse = {
            id: driver.id,
			name: driver.name,
			surname: driver.surname,
			description: driver.description || '',
			nationality: driver.nationality,
			image: driver.image,
			// teams: formattedTeams,
			date: driver.date,
			// isFromApi: false,
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