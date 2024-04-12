import { useGetTeamsQuery } from "../../store/api";
import { PageLayout } from "../../layout";
import { Card } from "../../components";


export const TeamsPage = () => {

  const { data, error, isLoading } = useGetTeamsQuery();
  console.log(data);

  return (
    <>
      <PageLayout>
        <h1>Teams List</h1>
        <div  className="container-3xl mx-auto">
          <div className="grid grid-cols-5 gap-2 text-center">
            {data?.map((team) => (
                <div key={team.id}>
                  <div>
                    <img src="https://tse1.mm.bing.net/th?q=F1%202024%20Logo&w=1280&h=720&c=5&rs=1&p=0" width={300} />
                  </div>
                  <h2>{team.name}</h2>
                </div>
            ))}
            
          </div>
         </div>

      </PageLayout>
    </>
  )
}
