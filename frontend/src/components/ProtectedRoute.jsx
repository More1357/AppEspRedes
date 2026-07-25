import { Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const isTokenExpired = (token) => {
  if (!token) return true;
  try {
    const payload = JSON.parse(atob(token.split('.')[1]));
    if (payload.exp) {
      return Date.now() >= payload.exp * 1000;
    }
    return false;
  } catch {
    return true;
  }
};

function ProtectedRoute({ children }) {
  const [verificando, setVerificando] = useState(true);
  const [valido, setValido] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token || isTokenExpired(token)) {
      if (token && isTokenExpired(token)) {
        localStorage.removeItem('token');
        localStorage.removeItem('usuario');
      }
      setValido(false);
    } else {
      setValido(true);
    }
    setVerificando(false);
  }, []);

  if (verificando) {
    return <div className="min-h-screen flex items-center justify-center">Verificando sesión...</div>;
  }

  return valido ? children : <Navigate to="/" replace />;
}

export default ProtectedRoute;