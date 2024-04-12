
export const SearchBar = ({ handleSearchChange }) => {
  return (
      <div className="text-xl text-color-950 mr-2 grid grid-cols-1 mx-auto p-5">
        <input 
          type="text" 
          placeholder="Search for ID or Name" 
          className="text-xl text-color-950 m-3 p-3 border-t-2 border-r-2 border-500 rounded-tr-lg" 
          onChange={handleSearchChange} 
        />
      </div>
  )
}
