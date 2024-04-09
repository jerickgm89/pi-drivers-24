export function sortDrivers(drivers, sortOrder) {
  let sortedDrivers = [...drivers];
  if (sortOrder === 'name-asc') {
    sortedDrivers.sort((a, b) => a.name?.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    sortedDrivers.sort((a, b) => b.name?.localeCompare(a.name));
  } else if (sortOrder === 'birth-asc') {
    sortedDrivers.sort((a, b) => {
      if (!a.date || !b.date) return a.name?.localeCompare(b.name);
      const [yearA, monthA, dayA] = a.date.split('-');
      const [yearB, monthB, dayB] = b.date.split('-');
      const dateComparison = new Date(yearA, monthA - 1, dayA) - new Date(yearB, monthB - 1, dayB);
      return dateComparison === 0 ? a.name?.localeCompare(b.name) : dateComparison;
    });
  } else if (sortOrder === 'birth-desc') {
    sortedDrivers.sort((a, b) => {
      if (!a.date || !b.date) return b.name?.localeCompare(a.name);
      const [yearA, monthA, dayA] = a.date.split('-');
      const [yearB, monthB, dayB] = b.date.split('-');
      const dateComparison = new Date(yearB, monthB - 1, dayB) - new Date(yearA, monthA - 1, dayA);
      return dateComparison === 0 ? b.name?.localeCompare(a.name) : dateComparison;
    });
  }

  return sortedDrivers;
}