import { Routes, Route, Navigate } from 'react-router-dom'
import { DetailDrivers, DriversPage } from '../pages'

export const DriversRoutes = () => {
  return (
    <Routes>
      <Route path="drivers" element={<DriversPage />} />
      <Route path='drivers/:id' element={<DetailDrivers />} />
      <Route path="drivers/:id/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
