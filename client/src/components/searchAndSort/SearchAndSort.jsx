export const SearchAndSort = ({ handleCheckboxChange, handleSearchChange, setSortOrder, prevPage, nextPage }) => {
 
  return (
    <>
      <div className="grid grid-cols-3 place-items-center">

        <select onChange={(e) => setSortOrder(e.target.value)}>
          <option value="">Sort by name</option>
          <option value="name-asc">Ascending</option>
          <option value="name-desc">Descending</option>
        </select>

        <div className="text-2xl text-color-400">
          <input type="checkbox" onChange={handleCheckboxChange} />
          <label>Por ID</label>
          <input type="text" onChange={handleSearchChange} placeholder="Buscar" className="boxSearch" />
        </div>

        <select onChange={(e) => setSortOrder(e.target.value)}>
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
