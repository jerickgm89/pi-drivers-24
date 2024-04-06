export function filterAndFormatDrivers(drivers, isSearchById, search) {
  // ensure drivers is always an array
  drivers = Array.isArray(drivers) ? drivers : [drivers];

  if (!isSearchById && search) {
    drivers = drivers.filter(driver => driver.name?.includes(search) || driver.surname?.includes(search));
  }

  return drivers;
}