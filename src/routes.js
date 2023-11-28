import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './pages/Login';
import Logado from './pages/Logado';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/logado" element={<Logado />} />
      </Routes>
    </BrowserRouter>
  )
}
