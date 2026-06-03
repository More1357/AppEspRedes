import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProtectedRoute from './components/ProtectedRoute';
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

        <Route path="/biblioteca" element={
          <ProtectedRoute><BibliotecaEjercicios /></ProtectedRoute>
        } />
        <Route path="/calendario" element={
          <ProtectedRoute><CalendarioSemanal /></ProtectedRoute>
        } />
        <Route path="/mis-rutinas" element={
          <ProtectedRoute><MisRutinas /></ProtectedRoute>
        } />
        <Route path="/configurar-perfil" element={
          <ProtectedRoute><ConfigurarPerfil /></ProtectedRoute>
        } />

        {/* Catch-all: cualquier ruta desconocida redirige al inicio */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
