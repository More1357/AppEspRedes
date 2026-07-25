import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHealth, login, register } from '../services/api';

function Inicio() {
  const navigate = useNavigate();
  const [metodoSeleccionado, setMetodoSeleccionado] = useState(null); // 'login' o 'registro'
  const [backendStatus, setBackendStatus] = useState(null);
  const [backendError, setBackendError] = useState(null);
  
  // Estado del formulario
  const [formData, setFormData] = useState({ nombre: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Verificar que el backend esté funcionando al cargar el componente
  useEffect(() => {
    getHealth()
      .then((data) => setBackendStatus(data.status))
      .catch((err) => setBackendError(err.message));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleContinuar = async (e) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      let resultado;
      if (metodoSeleccionado === 'login') {
        resultado = await login(formData.email, formData.password);
      } else {
        resultado = await register(formData.nombre, formData.email, formData.password);
      }

      if (resultado.success) {
        // Redirigir según corresponda (sin recargar página)
        if (metodoSeleccionado === 'login') {
          navigate('/calendario');
        } else {
          navigate('/configurar-perfil');
        }
      } else {
        setError(resultado.message || 'Algo salió mal');
      }
    } catch (err) {
      setError(err.message || 'Error de conexión con el servidor');
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = () => {
    // Por ahora solo alert, después se puede implementar con OAuth
    alert('Continuar con Google (próximamente)');
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
                Bienvenido a la <span className="text-primary">FitFlow</span>
              </h1>
              <p className="font-body-md text-body-md text-on-surface-variant">
                Elige tu camino para comenzar tu sesión.
              </p>
              
              {/* Indicador de estado del backend (solo para desarrollo) */}
              {backendError && (
                <p className="text-red-400 text-xs mt-2">
                  ⚠️ Backend no disponible: {backendError}
                </p>
              )}
              {backendStatus === 'ok' && (
                <p className="text-green-400 text-xs mt-2">
                  ✅ Backend conectado
                </p>
              )}
            </div>

            {/* Si NO hay método seleccionado, mostrar las dos opciones */}
            {!metodoSeleccionado && (
              <div className="flex flex-col gap-stack-md">
                
                {/* Opción: Iniciar Sesión */}
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
            )}

            {/* Si hay método seleccionado, mostrar el FORMULARIO */}
            {metodoSeleccionado && (
              <form onSubmit={handleContinuar} className="flex flex-col gap-stack-md mt-6">
                
                {/* Campo Nombre (solo para registro) */}
                {metodoSeleccionado === 'registro' && (
                  <input
                    type="text"
                    name="nombre"
                    placeholder="Nombre completo"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                    className="bg-surface border border-outline-variant rounded-lg p-4 text-on-surface outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                  />
                )}
                
                {/* Campo Email */}
                <input
                  type="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-surface border border-outline-variant rounded-lg p-4 text-on-surface outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                />
                
                {/* Campo Password */}
                <input
                  type="password"
                  name="password"
                  placeholder="Contraseña"
                  value={formData.password}
                  onChange={handleChange}
                  required
                  minLength={6}
                  className="bg-surface border border-outline-variant rounded-lg p-4 text-on-surface outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-all"
                />

                {/* Mensaje de error */}
                {error && (
                  <p className="text-red-400 text-sm text-center">{error}</p>
                )}

                {/* Botones */}
                <div className="flex gap-stack-sm">
                  <button
                    type="button"
                    onClick={() => {
                      setMetodoSeleccionado(null);
                      setFormData({ nombre: '', email: '', password: '' });
                      setError(null);
                    }}
                    className="flex-1 py-3 bg-surface border border-outline-variant rounded-xl text-on-surface-variant hover:text-on-surface transition-colors"
                  >
                    Volver
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    className="flex-1 py-3 bg-primary-container text-on-primary-container rounded-xl glow-cyan hover:glow-cyan-intense transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {loading ? 'Cargando...' : 'Continuar'}
                  </button>
                </div>
              </form>
            )}

            {/* Separador - solo visible cuando NO hay método seleccionado */}
            {!metodoSeleccionado && (
              <>
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
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Inicio;