export function sortDrivers(drivers, sortOrder) {
  let sortedDrivers = [...drivers];
  
  sortedDrivers.sort((a, b) => {
    // Primero, maneja la ordenación por fecha de nacimiento
    if (sortOrder === 'birth-asc' || sortOrder === 'birth-desc') {
      if (!a.date || !b.date) return a.name?.localeCompare(b.name);
      const [yearA, monthA, dayA] = a.date.split('-');
      const [yearB, monthB, dayB] = b.date.split('-');
      const dateComparison = sortOrder === 'birth-asc' 
        ? new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB)
        : new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
      if (dateComparison !== 0) return dateComparison;
    }

    // Luego, maneja la ordenación por nombre
    if (sortOrder === 'name-asc' || sortOrder === 'name-desc') {
      return sortOrder === 'name-asc'
        ? a.name?.localeCompare(b.name)
        : b.name?.localeCompare(a.name);
    }

    // Si las fechas de nacimiento son iguales, ordena por nombre
    if (a.date === b.date) {
      if (sortOrder === 'name-asc' || sortOrder === 'birth-asc') {
        return a.name?.localeCompare(b.name);
      } else {
        return b.name?.localeCompare(a.name);
      }
    }
  });

  return sortedDrivers;
}