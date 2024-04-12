import { Routes, Route } from 'react-router-dom';
import { HomeRoutes } from '../home/routes';
import { DriversRoutes } from '../drivers';
import { TeamsRoutes } from '../teams';
import { CreateDriveRoutes } from '../createDrive';
import { DetailDrivers } from '../drivers/pages/DetailDrivers';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Pagina de Bienvenida */}
        <Route path="*" element={<HomeRoutes />} />

        <Route path="drivers" element={<DriversRoutes />} />
        <Route path="drivers/:id" element={<DetailDrivers />} />
        <Route path="teams" element={ <TeamsRoutes /> } />
        <Route path="createDrive" element={ <CreateDriveRoutes />} />
        
    </Routes>
  )
}
