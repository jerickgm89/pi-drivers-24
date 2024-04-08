import { Link } from "react-router-dom"


export const Card = ({ id, image, name, surname, teams, date}) => {
  return (
    <Link to={`/drivers/${id}`} className="LinkStyle">
      <div className="border-t-2 border-r-2 border-500 rounded-tr-lg">
        <div className="ml-3 mr-3">
          <span className="font-black text-6xl">{id}</span>
        </div>
        <div className="text-left nameCard ml-3 mr-3">
          <h4 className="font-light text-xl">{name}</h4>
          <h3 className="font-black text-3xl">{surname}</h3>
        </div>
        <div className="text-left m-3">
          <span className="font-thin text-sm">{teams}</span>
        </div>
        <div className="text-center bg-cover">
          <img src={image} alt={name} className="imageCard"/>
        </div>      
      </div>
    </Link>
  )
}   
