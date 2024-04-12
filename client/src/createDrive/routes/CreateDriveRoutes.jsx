import { Route, Routes } from "react-router-dom"
import { CreateDrive } from "../page"

export const CreateDriveRoutes = () => {
  return (
    <Routes>
        <Route path="*" element={<CreateDrive/>} />
    </Routes>
  )
}
