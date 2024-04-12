import { useState } from 'react';

import { useGetDriversQuery, useGetIdDriverQuery, useGetNameDriverQuery, useGetAllDriversQuery } from '../../store/api';

import { PageLayout } from '../../layout';
import { Card, Sort, Pagination, SearchBar } from '../../components';
import { filterForIDDrivers, sortDrivers } from '../utils/';

export const DriversPage = () => {
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('');

  // Fetching
  let query;
  if(!search) {
    query = useGetDriversQuery(page);
  } else if (parseInt(search)) {
    query = useGetIdDriverQuery(search);
  } else {
    query = useGetNameDriverQuery(search);
  }

  // Filtering
  let { data: drivers = [], isLoading } = query;
  console.log(query);
  drivers = filterForIDDrivers(drivers, search);


  // Sorting
  let sortedDrivers = sortDrivers(drivers, sortOrder);

  // Pagination
  const nextPage = () => {
    if (drivers.length < 9) return;
    let nextPage = page + 1;
    setPage(nextPage);
  }
  const prevPage = () => {
    if (page === 0) return;
    let prevPage = page - 1;
    setPage(prevPage);
  }

  // Handlers
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  }

  return (
    <>
      <PageLayout numberContainer={3}>
        <h1 className="titleDriver">F1 Drivers 2024</h1>

        <Sort
          handleSearchChange={handleSearchChange}
          setSortOrder={setSortOrder}
        />
        <SearchBar handleSearchChange={handleSearchChange} />
        <Pagination prevPage={prevPage} nextPage={nextPage} page={page} />
        <div className="reponsiveCard ">
          {
            isLoading ? (
              <div className="lds-ripple"><div></div><div></div></div>
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
      </PageLayout>    
    </>
  )
}
