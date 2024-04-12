export function filterForIDDrivers(drivers, search) {
  
  drivers = Array.isArray(drivers) ? drivers : [drivers];

  if (search) {
    const isNumeric = !isNaN(search);
    if (isNumeric) {
      // Search by ID
      drivers = drivers.filter(driver => driver.id == search);
    } else {
      // Search by name;
        drivers = drivers?.filter(driver => driver.name.includes(search));
    }
  } 

 
  console.log(drivers);
  return drivers;
}