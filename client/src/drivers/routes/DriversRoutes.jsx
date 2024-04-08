import { Routes, Route, Navigate } from 'react-router-dom'
import { DetailDrivers, DriversPage, NewDrive } from '../pages'

export const DriversRoutes = () => {
  return (
    <Routes>
      <Route path="drivers" element={<DriversPage />} />
      <Route path='drivers/:id' element={<DetailDrivers />} />
      <Route path="drivers/newDrive" element={<NewDrive />} />
      <Route path="*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
