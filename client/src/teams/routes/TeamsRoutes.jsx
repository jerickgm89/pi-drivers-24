import { Routes, Route, Navigate } from 'react-router-dom'
import { TeamsPage } from '../page'

export const TeamsRoutes = () => {
  return (
    <Routes>
      <Route path="*" element={<TeamsPage />} />
    </Routes>
  )
}
