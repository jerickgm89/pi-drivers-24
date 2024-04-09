import { useEffect, useState } from "react"
import { Link } from "react-router-dom"


export const Card = ({ id, image, name, surname, teams, date, isApi}) => {
  
  const [longIdCount, setLongIdCount] = useState(0)

  useEffect(() => {
    if (id.length > 5) {
      setLongIdCount(prevCount => prevCount + 1)
    }
  }, [id])
  


  return (
    <Link to={`/drivers/${id}`} className="LinkStyle">
      <div className="border-t-2 border-r-2 border-500 rounded-tr-lg cardContainer">
        
        <div className="text-left nameCard ml-3 mr-3">
          <h4 className="font-bold text-xl">{name}</h4>
          <h3 className="font-black text-3xl">{surname}</h3>
        </div>
        <div className="text-left m-3 teamsCard">
          <span className="font-normal text-md">{teams}</span>
        </div>
        <div className="text-center bg-cover">
          <img src={image} alt={name} className="imageCard"/>
          <p className="text-lg font-bold">Year of Birth: {new Date(date).getFullYear()}</p>
        </div>      
      </div>
    </Link>
  )
}   
