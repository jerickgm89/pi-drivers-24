import { useState } from 'react';

import { NavBar } from "../../components/navbar"
import { useGetDriversQuery, useGetIdDriverQuery, useGetNameDriverQuery, useGetTeamsQuery } from '../../store/api';

import { Card } from '../../components/card';
import { Footer } from '../../components/footer';
import { SearchAndSort } from '../../components/searchAndSort';

import { sortDrivers } from '../utils/sortUtils';
import { filterAndFormatDrivers } from '../utils/filterUtils';

export const DriversPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [isSearchById, setIsSearchById] = useState(false);
  const [sortOrder, setSortOrder] = useState('');

  // Fetching
  let query = isSearchById && search ? useGetIdDriverQuery(search) : 
                search ? useGetNameDriverQuery(search) : 
                useGetDriversQuery(page);

  // Filtering
  let { data: drivers = [], isLoading } = query;
  drivers = filterAndFormatDrivers(drivers, search);

  // Sorting
  let sortedDrivers = sortDrivers(drivers, sortOrder);

  // Pagination
  const nextPage = () => {
    if (drivers.length < 9) return;
    setPage(page + 1);
  }
  const prevPage = () => {
    if (page === 0) return;
    setPage(page - 1);
  }

  // Handlers
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }
  const handleCheckboxChange = (event) => {
    setIsSearchById(event.target.checked);
  }

  return (
    <>
      
      <NavBar />

      <div className="container-3xl mx-auto pt-16">
        
        <h1 className="titleDriver">F1 Drivers 2024</h1>

        <SearchAndSort
          handleCheckboxChange={handleCheckboxChange}
          handleSearchChange={handleSearchChange}
          setSortOrder={setSortOrder}
          prevPage={prevPage}
          nextPage={nextPage}
        />
        <div className="reponsiveCard ">
          {
            isLoading ? (
              <div class="lds-ripple"><div></div><div></div></div>
            ) : (
              sortedDrivers.map((driver) => (
                <Card 
                  key={driver.id}
                  isApi={driver.isApi} 
                  id={driver.id}
                  image={driver.image}
                  name={driver.name}
                  surname={driver.surname}
                  description={driver.description}
                  teams={driver.teams}
                  date={driver.date}
                />
              ))          
            )
          }
        </div>

      </div>
      
      <Footer />
    </>
  )
}
