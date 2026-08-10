import { HashRouter, Routes, Route } from 'react-router-dom';
import Inicio from './page/Inicio';
import Panel from './page/Panel';
import Ajustes from './page/Ajustes'; // ✅ NUEVO
import CalendarioSemanal from './page/CalendarioSemanal';
import BibliotecaEjercicios from './page/BibliotecaEjercicios';
import MisRutinas from './page/MisRutinas';
import ConfigurarPerfil from './page/ConfigurarPerfil';
import ConstructorRutinas from './page/ConstructorRutinas';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
        
        <Route path="/panel" element={
          <ProtectedRoute>
            <Panel />
          </ProtectedRoute>
        } />

        {/* ✅ Nueva ruta Ajustes */}
        <Route path="/ajustes" element={
          <ProtectedRoute>
            <Ajustes />
          </ProtectedRoute>
        } />

        <Route path="/calendario" element={
          <ProtectedRoute>
            <CalendarioSemanal />
          </ProtectedRoute>
        } />
        <Route path="/biblioteca" element={
          <ProtectedRoute>
            <BibliotecaEjercicios />
          </ProtectedRoute>
        } />
        <Route path="/mis-rutinas" element={
          <ProtectedRoute>
            <MisRutinas />
          </ProtectedRoute>
        } />
        <Route path="/configurar-perfil" element={
          <ProtectedRoute>
            <ConfigurarPerfil />
          </ProtectedRoute>
        } />
        <Route path="/constructor-rutinas" element={
          <ProtectedRoute>
            <ConstructorRutinas />
          </ProtectedRoute>
        } />
        <Route path="*" element={<Inicio />} />
      </Routes>
    </HashRouter>
  );
}

export default App;