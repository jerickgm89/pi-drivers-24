import { useGetIdDriverQuery } from '../../store/api';
import { useParams } from 'react-router-dom';
import { CardDetail } from '../../components/card/';
import { PageLayout } from '../../layout';


export const DetailDrivers = () => {

  const { id } = useParams();

  const { data: driver = [], isLoading } = useGetIdDriverQuery(id);
  
  return (
    <>
      <PageLayout numberContainer={2}>
        {
          isLoading ? <h1>Loading...</h1> :
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
      </PageLayout>
    </>
  )
}
