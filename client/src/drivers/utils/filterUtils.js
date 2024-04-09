export function filterAndFormatDrivers(drivers, search) {
  
  drivers = Array.isArray(drivers) ? drivers : [drivers];

  if (search) {
    const isNumeric = !isNaN(search);
    if (isNumeric) {
      // Search by ID
      drivers = drivers.filter(driver => driver.id == search);
    } else {
      // Search by name or surname
      drivers = drivers.filter(driver => driver.name?.includes(search) || driver.surname?.includes(search));
    }
  }

  return drivers;
}