import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './page/Inicio';
import CalendarioSemanal from './page/CalendarioSemanal';
import BibliotecaEjercicios from './page/BibliotecaEjercicios';
import MisRutinas from './page/MisRutinas';
import ConfigurarPerfil from './page/ConfigurarPerfil';
import ConstructorRutinas from './page/ConstructorRutinas';  // ← NUEVO

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/calendario" element={<CalendarioSemanal />} />
        <Route path="/biblioteca" element={<BibliotecaEjercicios />} />
        <Route path="/mis-rutinas" element={<MisRutinas />} />
        <Route path="/configurar-perfil" element={<ConfigurarPerfil />} />
        <Route path="/constructor-rutinas" element={<ConstructorRutinas />} />  {/* ← NUEVO */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
