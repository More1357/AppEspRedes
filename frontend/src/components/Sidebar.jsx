// src/components/Sidebar.jsx
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { logout } from '../services/api';

function Sidebar() {
  const location = useLocation();
  const [mostrarModal, setMostrarModal] = useState(false);
  const [usuario, setUsuario] = useState(null);

  // ✅ Cargar datos del usuario desde localStorage al montar el componente (recarga)
  useEffect(() => {
    const usuarioStorage = localStorage.getItem('usuario');
    if (usuarioStorage) {
      try {
        const datos = JSON.parse(usuarioStorage);
        setUsuario(datos);
      } catch (error) {
        console.error('Error al parsear usuario:', error);
      }
    }
  }, []);

  // ✅ Escuchar el evento para abrir el modal desde el Header
  useEffect(() => {
    const handleAbrirModal = () => {
      setMostrarModal(true);
    };
    window.addEventListener('abrirModalPerfil', handleAbrirModal);
    return () => {
      window.removeEventListener('abrirModalPerfil', handleAbrirModal);
    };
  }, []);

  // ✅ Escuchar el evento para actualizar los datos cuando se editan en ConfigurarPerfil
  useEffect(() => {
    const handleActualizarDatos = () => {
      const usuarioStorage = localStorage.getItem('usuario');
      if (usuarioStorage) {
        try {
          const datos = JSON.parse(usuarioStorage);
          setUsuario(datos);
        } catch (error) {
          console.error('Error al parsear usuario:', error);
        }
      }
    };
    window.addEventListener('datosPerfilActualizados', handleActualizarDatos);
    return () => {
      window.removeEventListener('datosPerfilActualizados', handleActualizarDatos);
    };
  }, []);

  const handleLogout = () => {
    logout();
    window.location.href = '/';
  };

  const toggleModal = () => {
    setMostrarModal(!mostrarModal);
  };

  const menuItems = [
    { path: '/panel', icon: 'dashboard', label: 'Panel' },
    { path: '/constructor-rutinas', icon: 'fitness_center', label: 'Constructor de Rutinas' },
    { path: '/biblioteca', icon: 'menu_book', label: 'Biblioteca de Ejercicios' },
    { path: '/calendario', icon: 'calendar_month', label: 'Calendario de Entrenamiento' },
    { path: '/mis-rutinas', icon: 'folder_special', label: 'Mis Rutinas' },
  ];

  return (
    <>
      <aside className="fixed left-0 top-0 h-full w-64 z-50 flex flex-col pt-20 pb-8 bg-surface-container border-r border-outline-variant/30">
        <div className="px-6 mb-10">
          <h1 className="font-headline-md text-headline-md text-primary tracking-tight">FitFlow Pro</h1>
          <p className="text-label-md font-label-md text-on-surface-variant opacity-70">Rendimiento Élite</p>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto custom-scrollbar">
          {menuItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary border-r-4 border-primary scale-[0.98]'
                    : 'text-on-surface-variant hover:bg-surface-variant/50'
                }`}
              >
                <span className="material-symbols-outlined text-[20px]">{item.icon}</span>
                <span className="font-label-md text-label-md">{item.label}</span>
              </Link>
            );
          })}
        </nav>
        <div className="px-6 mt-auto">
          <button className="w-full bg-primary text-on-primary-fixed font-bold py-3 rounded-xl hover:opacity-90 transition-all active:scale-95 shadow-[0_0_20px_rgba(138,235,255,0.2)]">
            Comenzar Entrenamiento
          </button>
        </div>
        <div className="px-4 mt-8 space-y-1">
          {/* ✅ Botón de Configuración ahora lleva a /ajustes */}
          <Link to="/ajustes" className="flex items-center gap-3 px-4 py-2 text-on-surface-variant hover:text-primary transition-colors">
            <span className="material-symbols-outlined text-[18px]">settings</span>
            <span className="font-label-md text-label-md">Configuración</span>
          </Link>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2 text-on-surface-variant hover:text-primary transition-colors text-left"
          >
            <span className="material-symbols-outlined text-[18px]">logout</span>
            <span className="font-label-md text-label-md">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* MODAL DE PERFIL */}
      {mostrarModal && (
        <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm" 
            onClick={toggleModal}
          ></div>
          
          <div className="relative w-full max-w-sm bg-surface-container border border-outline-variant/30 rounded-2xl p-6 shadow-2xl animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-headline-md text-headline-md text-primary">Mi Perfil</h3>
              <button 
                onClick={toggleModal}
                className="text-on-surface-variant hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-4 mb-4">
                <img 
                  className="w-16 h-16 rounded-full object-cover border-2 border-primary/30" 
                  alt="Perfil" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3KB3-0N-iax1npRi8GOYzZybUB001LrSoSAZ8Hhx_qXkeMT99at4fuA3WV5H8ohKV711cIhFc8Y7JF-eLFDD-CAS7gKg6ETlk2Wh4Bp-juIZqCrjC_qVkJCbd1gZgdBbXOL8GgAAnIYRg6RX1_tbgrhctbGyiLa04NRRwaAujOZqIIhud1mGNq1bqsh99SsvLS5qDX9IU62Bx7GTWWEuT-eq3edBdXTz2ZhzdhXlz4k7VwBMaYrkqJIduPfd8hOR5ExlHmxOsTE"
                />
                <div>
                  <h4 className="font-headline-md text-on-surface font-bold">
                    {usuario?.nombre || 'Usuario'}
                  </h4>
                  <p className="text-on-surface-variant text-sm">
                    {usuario?.email || 'correo@ejemplo.com'}
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div className="bg-surface-container-high/50 p-3 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Edad</p>
                  <p className="font-headline-md text-on-surface">
                    {usuario?.edad ? `${usuario.edad} años` : '—'}
                  </p>
                </div>
                <div className="bg-surface-container-high/50 p-3 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Peso</p>
                  <p className="font-headline-md text-on-surface">
                    {usuario?.peso ? `${usuario.peso} kg` : '—'}
                  </p>
                </div>
                <div className="bg-surface-container-high/50 p-3 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Altura</p>
                  <p className="font-headline-md text-on-surface">
                    {usuario?.altura ? `${usuario.altura} cm` : '—'}
                  </p>
                </div>
                <div className="bg-surface-container-high/50 p-3 rounded-lg">
                  <p className="text-xs text-on-surface-variant uppercase tracking-wider">Nivel</p>
                  <p className="font-headline-md text-on-surface">
                    {usuario?.nivelActividad || '—'}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6">
              {/* ✅ Botón "Editar Datos Personales" lleva a /configurar-perfil */}
              <Link
                to="/configurar-perfil"
                onClick={toggleModal}
                className="w-full flex items-center justify-center gap-2 py-3 bg-primary text-on-primary-fixed rounded-xl font-bold hover:opacity-90 transition-all"
              >
                <span className="material-symbols-outlined">edit</span>
                Editar Datos Personales
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sidebar;