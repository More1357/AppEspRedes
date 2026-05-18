import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './page/Inicio';
import BibliotecaEjercicios from './page/BibliotecaEjercicios';
import CalendarioSemanal from './page/CalendarioSemanal';
import MisRutinas from './page/MisRutinas';
import ConfigurarPerfil from './page/ConfigurarPerfil';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/biblioteca" element={<BibliotecaEjercicios />} />
        <Route path="/calendario" element={<CalendarioSemanal />} />
        <Route path="/mis-rutinas" element={<MisRutinas />} />
        <Route path="/configurar-perfil" element={<ConfigurarPerfil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
