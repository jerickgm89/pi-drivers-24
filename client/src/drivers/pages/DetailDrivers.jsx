import { useGetIdDriverQuery } from '../../store/api';
import { NavBar } from '../../components/navbar/NavBar';
import { Navigate, useParams } from 'react-router-dom';
import { CardDetail } from '../../components/card/CardDetail';


export const DetailDrivers = () => {

  const { id } = useParams();
  if (isNaN(id)) {
    return <Navigate to="/" />; // Redirige a una página de error o a donde prefieras
  }
  const { data: driver = [], isLoading } = useGetIdDriverQuery(id);
  
  return (
    <>
      <NavBar />

      <div className="container-2xl mx-auto pt-16">
        
      {
          driver && (
            <CardDetail
              id={driver.id}
              image={driver.image}
              name={driver.name}
              surname={driver.surname}
              description={driver.description}
              nationality={driver.nationality}
              teams={driver.teams}
              date={driver.date}
            />
          )
        }


        
      </div>
    </>
  )
}
