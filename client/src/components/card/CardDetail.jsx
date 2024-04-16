import { useNavigate } from 'react-router-dom';

export const CardDetail = ({id, image, name, surname, description, nationality, teams, date}) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="grid gap-5 mt-10 border-t-2 border-r-2 border-500 rounded-tr-lg cardDetail">

        <div className='text-center p-4'>
          <img src={image} alt={name} className="imgDetail fadeIn rounded-xl"/>
        </div>

        <div className="text-left p-3">
          <h1 className="fadeInName text-3xl font-bold">{name} {surname}</h1>
          <h2 className="fadeInName text-3xl font-bold mb-3">Id: {id}</h2>
          
          <div className="fadeIn" >
                <h3 className="text-2xl font-bold">Country</h3>
                <p className="text-xl font-normal">{nationality ? nationality : "Sin informacion"}</p>
          </div>

          <div className="fadeIn">
                <h3 className="text-2xl font-bold">Biography</h3>
                <p className="text-xl font-normal text-justify mt-2 mb-2">{description ? description : "Sin informacion"}</p>
          </div>

          <div className="fadeIn">
                <h3 className="text-2xl font-bold">Teams</h3>
                <p className="text-xl font-normal mt-2 mb-2">{teams ? teams : "Sin informacion"}</p>
          </div>      
          <button className="fadeInButton btn btn-outline w-full mt-4" onClick={goBack}>Regresar</button>
        </div>

      </div>
    </>
  )
}
