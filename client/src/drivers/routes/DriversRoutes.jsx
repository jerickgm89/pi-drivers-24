import { Routes, Route, Navigate } from 'react-router-dom'
import { DriversPage } from '../pages'

export const DriversRoutes = () => {
  return (
    <Routes>
      <Route path="drivers" element={<DriversPage />} />
      <Route path="drivers/*" element={ <Navigate to="/" />} />
    </Routes>
  )
}
