import { Routes, Route, Navigate } from 'react-router-dom'
import { DriversPage } from '../pages'
import { DetailDrivers } from '../pages/DetailDrivers'

export const DriversRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<DriversPage />} />
    </Routes>
  )
}
