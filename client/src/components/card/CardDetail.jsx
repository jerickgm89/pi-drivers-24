import { useNavigate } from 'react-router-dom';

export const CardDetail = ({id, image, name, surname, description, nationality, teams, date}) => {

  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }

  return (
    <>
      <div className="grid grid-cols-2 gap-5 mt-10 border-t-2 border-r-2 border-500 rounded-tr-lg cardDetail">

        <div className='text-center p-4'>
          <img src={image} alt={name} className="imgDetail fadeIn rounded-xl"/>
        </div>

        <div className="text-left p-3">
          <h1 className="fadeInName text-3xl font-bold mb-3">{id} {name} {surname}</h1>
          <table className="border-collapse">
            <tr>
              <th className="fadeInNationality text-xl">Country</th>
              <td className="fadeInNationality text-xl font-normal">{nationality ? nationality : "Sin informacion"}</td>
            </tr>
            <tr>
              <th className='fadeInDescription text-xl'>Biography</th>
              <td className='fadeInDescription text-xl text-justify mt-2 mb-2'>{description ? description : "Sin informacion"}</td>
            </tr>
            <tr>
              <th className='fadeInDate text-xl'>Date</th>
              <td className='fadeInDate text-xl ont-normal mt-2 mb-2'>{date}</td>
            </tr>
            <tr>
              <th className='fadeInTeams text-xl'>Teams </th>
              <td className='fadeInTeams text-xl font-normal mt-2 mb-4'>{teams ? teams : "Sin informacion"}</td>
            </tr>
          </table>
          <button className="fadeInButton btn btn-outline w-full mt-4" onClick={goBack}>Regresar</button>
        </div>

      </div>
    </>
  )
}
