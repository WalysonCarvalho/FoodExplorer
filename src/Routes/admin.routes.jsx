import { Routes, Route } from "react-router-dom";
import { NewDish } from "../Pages/NewDish";


export function AdmAuthRoutes() {
  return (
    <Routes>
    
      <Route path="/prato/:id" element={<NewDish />} />

    </Routes>
    
      )
}