export function sortDrivers(drivers, sortOrder) {
    let sortedDrivers = [...drivers]; // create a copy of drivers
    if (sortOrder === 'name-asc') {
      sortedDrivers.sort((a, b) => a.name?.localeCompare(b.name));
    } else if (sortOrder === 'name-desc') {
      sortedDrivers.sort((a, b) => b.name?.localeCompare(a.name));
    } else if (sortOrder === 'birth-asc') {
      sortedDrivers.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        const [yearA, monthA, dayA] = a.date.split('-');
        const [yearB, monthB, dayB] = b.date.split('-');
        return new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
      });
    } else if (sortOrder === 'birth-desc') {
      sortedDrivers.sort((a, b) => {
        if (!a.date || !b.date) return 0;
        const [yearA, monthA, dayA] = a.date.split('-');
        const [yearB, monthB, dayB] = b.date.split('-');
        return new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
      });
    }
  
    return sortedDrivers;
}