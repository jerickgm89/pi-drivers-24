export const SearchAndSort = ({ handleCheckboxChange, handleSearchChange, setSortOrder, prevPage, nextPage }) => {
 
  return (
    <>
      <div className="searchSortResponsive">

        <select onChange={(e) => setSortOrder(e.target.value)} className="text-xl text-color-950 mr-2 mb-2">
          <option value="">Sort by name</option>
          <option value="name-asc">Ascending</option>
          <option value="name-desc">Descending</option>
        </select>

        <div className="text-xl text-color-950 mr-2">
          <input type="text" onChange={handleSearchChange} placeholder="Search for ID or Name" className="text-xl text-color-950 w-full mr-2 mb-2" />
        </div>

        <select onChange={(e) => setSortOrder(e.target.value)} className="text-xl text-color-950 mr-2 mb-2">
          <option value="">Sort by birth year</option>
          <option value="birth-asc">Ascending</option>
          <option value="birth-desc">Descending</option>
        </select>
      </div>
      
      <div className="grid grid-cols-2 place-items-center">
        <button className='btn btn-paginator' onClick={prevPage}>Anterior</button>
        <button className='btn btn-paginator' onClick={nextPage}>Siguiente</button>
      </div>
    </>
  )
}
