// Archivo: src/pages/inicio.jsx

import { useState, useEffect } from 'react';
import { getHealth } from '../services/api';

function inicio() {
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null); // 'login' o 'registro'
  const [backendStatus, setBackendStatus] = useState(null);
  const [backendError, setBackendError] = useState(null);

  useEffect(() => {
    getHealth()
      .then((data) => setBackendStatus(data.status))
      .catch((error) => setBackendError(error.message))
  }, [])

  const handleGoogle = () => {
    alert('Continuar con Google');
    // Aquí iría la lógica de autenticación con Google
  };

  const handleContinuar = () => {
    if (metodoSeleccionado === 'login') {
      alert('Iniciando sesión...');
      // Navegar a calendario semanal
    } else if (metodoSeleccionado === 'registro') {
      alert('Redirigiendo a configuración de perfil...');
      // Navegar a onboarding
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
                <button
                  onClick={() => setMetodoSeleccionado('login')}
                  className="w-full text-left p-5 bg-surface border border-outline-variant rounded-xl hover:border-primary-container hover:bg-primary-container/5 transition-all group"
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
              </div>

            {/* Si hay método seleccionado, mostrar confirmación */}
            {metodoSeleccionado && (
              <div className="flex flex-col gap-stack-md">
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

            {/* Separador */}
            <div className="relative flex items-center justify-center my-stack-md">
              <div className="absolute w-full h-px bg-outline-variant/30"></div>
              <span className="relative px-4 bg-surface-container-low text-on-surface-variant text-sm font-label-md">
                O CONTINUAR CON
              </span>
            </div>

            {/* Botón de Google */}
            <button
              onClick={handleGoogle}
              className="w-full py-3 flex items-center justify-center gap-3 bg-surface border border-outline-variant rounded-xl hover:bg-surface-container hover:border-primary-container/50 transition-all"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="currentColor" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="currentColor" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="currentColor" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              <span className="font-label-md text-label-md text-on-surface">Google</span>
            </button>

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

export default inicio;