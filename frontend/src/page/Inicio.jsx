// Archivo: src/page/Inicio.jsx

import { useState, useEffect } from 'react';
import { getHealth, login, register } from '../services/api';

function Inicio() {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null);
  const [backendStatus, setBackendStatus] = useState(null);
  const [backendError, setBackendError] = useState(null);

  useEffect(() => {
    getHealth()
      .then((data) => setBackendStatus(data.status))
      .catch((error) => setBackendError(error.message))
  }, [])

  const handleGoogle = () => {
    alert('Continuar con Google');
  };

  const handleContinuar = async () => {
    if (metodoSeleccionado === 'login') {
      const email = prompt("Ingresá tu email:");
      const password = prompt("Ingresá tu contraseña:");
      
      if (!email || !password) {
        alert("Completá ambos campos");
        return;
      }
      
      try {
        const resultado = await login(email, password);
        if (resultado.success) {
          localStorage.setItem('token', resultado.data.token);
          localStorage.setItem('usuario', JSON.stringify(resultado.data.usuario));
          alert('✅ Login exitoso');
          window.location.href = '/calendario';
        } else {
          alert(resultado.message || 'Error en el login');
        }
      } catch (error) {
        alert('❌ ' + error.message);
      }
      
    } else if (metodoSeleccionado === 'registro') {
      const nombre = prompt("Ingresá tu nombre:");
      const email = prompt("Ingresá tu email:");
      const password = prompt("Ingresá tu contraseña:");
      
      if (!nombre || !email || !password) {
        alert("Completá todos los campos");
        return;
      }
      
      try {
        const resultado = await register(nombre, email, password);
        if (resultado.success) {
          localStorage.setItem('token', resultado.data.token);
          localStorage.setItem('usuario', JSON.stringify(resultado.data.usuario));
          alert('✅ Registro exitoso');
          window.location.href = '/configurar-perfil';
        } else {
          alert(resultado.message || 'Error en el registro');
        }
      } catch (error) {
        alert('❌ ' + error.message);
      }
    }
  };

  return (
    <div className="min-h-screen bg-surface font-body-md text-on-surface overflow-x-hidden antialiased">
      
      {/* Elementos decorativos de fondo */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[-100px] w-[300px] h-[300px] bg-primary-container/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-20 right-[-100px] w-[400px] h-[400px] bg-tertiary/10 blur-[120px] rounded-full"></div>
      </div>

      {/* Contenedor principal */}
      <div className="relative z-10 min-h-screen flex flex-col items-center justify-center px-container-margin py-12">
        
        {/* Tarjeta principal */}
        <div className="w-full max-w-md">
          <div className="bg-surface-container-low border border-outline-variant/30 rounded-2xl p-stack-lg backdrop-blur-sm">
            
            {/* Título principal */}
            <div className="text-center mb-stack-md">
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">
                Bienvenido a la <span className="text-primary">Élite</span>
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Elige tu camino para comenzar tu sesión.
              </p>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-2">
                Estado del backend: {backendStatus ? backendStatus : backendError ? `Error: ${backendError}` : 'Cargando...'}
              </p>
            </div>

            {/* Opción: Iniciar Sesión */}
            <button
              onClick={() => setMetodoSeleccionado('login')}
              className="w-full text-left p-5 bg-surface border border-outline-variant rounded-xl hover:border-primary-container hover:bg-primary-container/5 transition-all group mb-4"
            >
              <h2 className="font-headline-md text-headline-md text-primary mb-1">
                Iniciar Sesión
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Accede directamente a tu <strong>Calendario Semanal</strong>.
              </p>
            </button>

            {/* Opción: Registrarse */}
            <button
              onClick={() => setMetodoSeleccionado('registro')}
              className="w-full text-left p-5 bg-surface border border-outline-variant rounded-xl hover:border-primary-container hover:bg-primary-container/5 transition-all group"
            >
              <h2 className="font-headline-md text-headline-md text-primary mb-1">
                Registrarse
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Crea tu <strong>Perfil de Rendimiento y Onboarding</strong>.
              </p>
            </button>

            {/* Si hay método seleccionado, mostrar confirmación */}
            {metodoSeleccionado && (
              <div className="flex flex-col gap-stack-md mt-6">
                <div className="text-center p-5 bg-primary-container/10 border border-primary-container/30 rounded-xl">
                  <span className="text-4xl mb-2 block">
                    {metodoSeleccionado === 'login' ? '🔐' : '📝'}
                  </span>
                  <h2 className="font-headline-md text-headline-md text-primary mb-2">
                    {metodoSeleccionado === 'login' ? 'Iniciar Sesión' : 'Registrarse'}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {metodoSeleccionado === 'login' 
                      ? 'Preparando tu Calendario Semanal...' 
                      : 'Comenzando configuración de tu perfil...'}
                  </p>
                </div>

                <div className="flex gap-stack-sm">
                  <button
                    onClick={() => setMetodoSeleccionado(null)}
                    className="flex-1 py-3 bg-surface border border-outline-variant rounded-xl text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    Volver
                  </button>
                  <button
                    onClick={handleContinuar}
                    className="flex-1 py-3 bg-primary-container text-on-primary-container rounded-xl glow-cyan hover:glow-cyan-intense transition-all"
                  >
                    Continuar
                  </button>
                </div>
              </div>
            )}

            {/* Términos y condiciones */}
            <p className="text-center text-xs text-on-surface-variant mt-stack-md">
              Al continuar, aceptas nuestros{" "}
              <button 
                type="button"
                className="text-primary hover:underline"
                onClick={() => alert('Términos de Servicio')}
              >
                Términos de Servicio
              </button>{" "}
              y{" "}
              <button 
                type="button"
                className="text-primary hover:underline"
                onClick={() => alert('Política de Privacidad')}
              >
                Política de Privacidad
              </button>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;
