import { Routes, Route } from 'react-router-dom';
import { HomeRoutes } from '../home/routes';
import { DriversRoutes } from '../drivers/routes';

export const AppRouter = () => {
  return (
    <Routes>
        {/* Pagina de Bienvenida */}
        <Route path="/" element={<HomeRoutes />} />

        <Route path="*" element={<DriversRoutes />} />
    </Routes>
  )
}
