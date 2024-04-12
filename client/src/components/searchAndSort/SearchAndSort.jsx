export const SearchAndSort = ({ setSortOrder}) => {
  
  return (
    <>
      <div className="searchSortResponsive">

        <select onChange={(e) => setSortOrder(e.target.value)} className="text-xl text-color-950 mr-2 mb-2">
          <option value="">Sort by Teams</option>
          <option value="name-asc">Ascending</option>
          <option value="name-desc">Descending</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} className="text-xl text-color-950 mr-2 mb-2">
          <option value="">Sort by name</option>
          <option value="name-asc">Ascending</option>
          <option value="name-desc">Descending</option>
        </select>

        <select onChange={(e) => setSortOrder(e.target.value)} className="text-xl text-color-950 mr-2 mb-2">
          <option value="">Sort by birth year</option>
          <option value="birth-asc">Ascending</option>
          <option value="birth-desc">Descending</option>
        </select>
       
      </div>
    </>
  )
}
