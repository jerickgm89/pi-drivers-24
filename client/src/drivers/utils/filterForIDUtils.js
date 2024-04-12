export function filterForIDDrivers(drivers, search) {
  
  drivers = Array.isArray(drivers) ? drivers : [drivers];

  if (search) {
    const isNumeric = !isNaN(search);
    if (isNumeric) {
      // Search by ID
      drivers = drivers.filter(driver => driver.id == search);
    } else {
      // Search by name
      search = search.charAt(0).toUpperCase() + search.slice(1);
      drivers = drivers.filter(driver => driver.name?.includes(search));search = search.charAt(0).toUpperCase() + search.slice(1);
    }
  }

  return drivers;
}