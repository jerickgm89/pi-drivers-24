import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getDrivers } from '../../store/drivers';

import { NavBar } from "../../components/navbar"
import { CardDrives } from "../../components/card/CardDrives"
import { useGetDriversQuery, useGetAllDriversQuery, useGetIdDriverQuery, useGetNameDriverQuery } from '../../store/api';



export const DriversPage = () => {


  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [isSearchById, setIsSearchById] = useState(false);
  const [sortOrder, setSortOrder] = useState('');




  let query;
  if (isSearchById && search) {
    query = useGetIdDriverQuery(search);
  } else if (search) {
    query = useGetNameDriverQuery(search);
  } else {
    query = useGetDriversQuery(page);
  }

  let { data: drivers = [], isLoading } = query;

  // ensure drivers is always an array
  if (!Array.isArray(drivers)) {
    drivers = [drivers];
  }

  if (!isSearchById && search) {
    drivers = drivers.filter(driver => driver.name.includes(search) || driver.surname.includes(search));
  }

  // sort drivers based on sortOrder
  let sortedDrivers = [...drivers]; // create a copy of drivers
  if (sortOrder === 'name-asc') {
    sortedDrivers.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortOrder === 'name-desc') {
    sortedDrivers.sort((a, b) => b.name.localeCompare(a.name));
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

  const nextPage = () => {
    if( drivers.length < 9 ) return;
    setPage( page + 1 );
  }

  const prevPage = () => {
    if( page === 0 ) return;
    setPage( page - 1 );
  }

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  const handleCheckboxChange = (event) => {
    setIsSearchById(event.target.checked);
  }
  


  return (
    <>
        <NavBar />
        {/* <CardDrives /> */}

        {/* <span>Loading: { isLoading ? 'True': 'False'}</span> */}
        <br />
        <br />
        
        <input type="checkbox" onChange={handleCheckboxChange} />
        <label>Search by ID</label>
        <input type="text" onChange={handleSearchChange} placeholder="Search" />

        <br />
        <br />
        <button className='btn btn-outline' onClick={ prevPage }>Anterior</button>
        <button className='btn btn-outline' onClick={ nextPage }>Siguiente</button>

        {/* new sort buttons */}
        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by name</option>
          <option value="name-asc">Ascending</option>
          <option value="name-desc">Descending</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by birth year</option>
          <option value="birth-asc">Ascending</option>
          <option value="birth-desc">Descending</option>
        </select>

        {
          isLoading ? (
            <h1>Cargando...</h1>
          ) : (
            <ul>
              {
                sortedDrivers.map( driver => (
                  <li key={ driver.id }>
                    <strong>id:</strong> { driver.id }
                    <br />
                    <strong>name:</strong> { driver.name }
                    <br />
                    <strong>apellido:</strong> { driver.surname }
                    <br />
                    <strong>equipos:</strong>{ driver.teams }
                    <br />
                    <strong>descripcion:</strong> { driver.description }
                    <br />
                    <strong>Fecha:</strong> { driver.date }
                    <br />

                    <br />
                  </li>
                ) )
              }
            </ul>
          )
        }
        


    </>
  )
}
