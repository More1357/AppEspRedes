// src/page/Ajustes.jsx
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Ajustes() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  // Estado para ajustes (simulados, después puedes conectarlos al backend)
  const [notificaciones, setNotificaciones] = useState(true);
  const [recordatorios, setRecordatorios] = useState(true);
  const [temaOscuro, setTemaOscuro] = useState(true);

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      <Sidebar />
      <Header />

      <main className="lg:ml-64 pt-24 px-gutter pb-stack-lg min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-stack-md">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Ajustes Generales</h1>
              <p className="text-body-lg text-on-surface-variant">
                Configura tu experiencia en FitFlow.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tarjeta: Notificaciones */}
            <div className="glass-card p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">notifications</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Notificaciones</h3>
                  <p className="text-sm text-on-surface-variant">Recibir alertas de entrenamiento</p>
                </div>
              </div>
              <button 
                onClick={() => setNotificaciones(!notificaciones)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${notificaciones ? 'bg-primary' : 'bg-outline-variant'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-surface-bright transition-transform ${notificaciones ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </button>
            </div>

            {/* Tarjeta: Recordatorios */}
            <div className="glass-card p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-secondary text-3xl">alarm</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Recordatorios</h3>
                  <p className="text-sm text-on-surface-variant">Recordatorios de sesiones programadas</p>
                </div>
              </div>
              <button 
                onClick={() => setRecordatorios(!recordatorios)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${recordatorios ? 'bg-primary' : 'bg-outline-variant'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-surface-bright transition-transform ${recordatorios ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </button>
            </div>

            {/* Tarjeta: Tema Oscuro */}
            <div className="glass-card p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-tertiary text-3xl">dark_mode</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Modo Oscuro</h3>
                  <p className="text-sm text-on-surface-variant">Activar tema oscuro</p>
                </div>
              </div>
              <button 
                onClick={() => setTemaOscuro(!temaOscuro)}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${temaOscuro ? 'bg-primary' : 'bg-outline-variant'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-surface-bright transition-transform ${temaOscuro ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </button>
            </div>

            {/* Tarjeta: Acerca de */}
            <div className="glass-card p-6 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-primary text-3xl">info</span>
                <div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">Acerca de FitFlow</h3>
                  <p className="text-sm text-on-surface-variant">Versión 1.0.0 - 2026</p>
                </div>
              </div>
              <button className="px-4 py-2 bg-surface-container-high rounded-lg hover:bg-surface-container-highest transition-colors">
                <span className="material-symbols-outlined text-on-surface-variant">arrow_forward</span>
              </button>
            </div>
          </div>

          {/* Botón para cerrar sesión */}
          <div className="mt-8 flex justify-center">
            <button 
              onClick={handleLogout}
              className="px-8 py-3 bg-red-500/20 text-red-400 rounded-xl hover:bg-red-500/30 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined">logout</span>
              Cerrar Sesión
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Ajustes;