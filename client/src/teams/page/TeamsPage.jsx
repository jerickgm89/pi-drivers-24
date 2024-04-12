
import { useState } from "react";

import { useGetTeamsQuery } from "../../store/api";
import { PageLayout } from "../../layout";
import { Card, SearchBar } from "../../components";


export const TeamsPage = () => {

  const { data, error, isLoading } = useGetTeamsQuery();
  

  const [searchTeam, setsearchTeam] = useState('');

  const handleSearchChange = (e) => {
    setsearchTeam(e.target.value);
  }

  const filteredTeams = data?.filter(team => team.name.toLowerCase().includes(searchTeam.toLowerCase()));

  return (
    <>
      <PageLayout>

        <SearchBar
          handleSearchChange={handleSearchChange} 
        />

        <h1 className="text-5xl text-center pb-8 ">Teams List</h1>
        <div  className="container-3xl mx-auto ">
          <div className="teamsPage text-center">
            {filteredTeams?.map((team) => (
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
