import { Routes, Route, Navigate } from 'react-router-dom';
import { HomePage } from '../pages';

export const HomeRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage />} />
    </Routes>
  )
}
