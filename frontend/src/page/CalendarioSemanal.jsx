// Archivo: src/page/CalendarioSemanal.jsx
import { useState } from 'react';
import { logout } from '../services/api';

function CalendarioSemanal() {
  const [recordatoriosActivados, setRecordatoriosActivados] = useState(false);
  
  const alternarRecordatorios = () => {
    setRecordatoriosActivados(!recordatoriosActivados);
    console.log('Recordatorios:', !recordatoriosActivados ? 'Activados' : 'Desactivados');
  };

  // Manejadores de arrastrar y soltar
  const handleDragStart = (e) => {
    e.currentTarget.classList.add('opacity-40');
  };

  const handleDragEnd = (e) => {
    e.currentTarget.classList.remove('opacity-40');
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.currentTarget.classList.add('bg-primary/5');
  };

  const handleDragLeave = (e) => {
    e.currentTarget.classList.remove('bg-primary/5');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.currentTarget.classList.remove('bg-primary/5');
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary min-h-screen">
      
      {/* Barra de navegación superior */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-gutter h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="flex items-center gap-4">
          <span className="font-headline-lg text-headline-lg font-extrabold text-primary">FitFlow</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 items-center">
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Resumen</a>
            <a className="text-primary font-bold border-b-2 border-primary pb-1" href="#">Calendario de Entrenamiento</a>
            <a className="text-on-surface-variant font-medium hover:text-primary transition-colors" href="#">Comunidad</a>
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all">notifications</button>
            <button 
              onClick={handleLogout}
              className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-all"
              title="Cerrar sesión"
            >
              logout
            </button>
            <div className="w-8 h-8 rounded-full bg-surface-container-high border border-outline-variant overflow-hidden">
              <img 
                className="w-full h-full object-cover" 
                alt="Perfil de usuario" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3KB3-0N-iax1npRi8GOYzZybUB001LrSoSAZ8Hhx_qXkeMT99at4fuA3WV5H8ohKV711cIhFc8Y7JF-eLFDD-CAS7gKg6ETlk2Wh4Bp-juIZqCrjC_qVkJCbd1gZgdBbXOL8GgAAnIYRg6RX1_tbgrhctbGyiLa04NRRwaAujOZqIIhud1mGNq1bqsh99SsvLS5qDX9IU62Bx7GTWWEuT-eq3edBdXTz2ZhzdhXlz4k7VwBMaYrkqJIduPfd8hOR5ExlHmxOsTE"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Barra lateral de navegación */}
      <aside className="fixed left-0 top-0 h-full w-64 z-50 flex-col pt-20 pb-8 bg-surface-container border-r border-outline-variant/30 hidden lg:flex">
        <div className="px-6 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">FitFlow Pro</h2>
          <p className="text-on-surface-variant text-label-md">Rendimiento Élite</p>
        </div>
        <nav className="flex-grow space-y-2 px-3">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Panel</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="font-label-md">Constructor de Rutinas</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
            <span className="material-symbols-outlined">timer</span>
            <span className="font-label-md">Sesión Activa</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="font-label-md">Biblioteca de Ejercicios</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border-r-4 border-primary transition-all group" href="#">
            <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
            <span className="font-label-md">Calendario de Entrenamiento</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
            <span className="material-symbols-outlined">folder_special</span>
            <span className="font-label-md">Mis Rutinas</span>
          </a>
        </nav>
        <div className="px-6 mb-8">
          <button className="w-full bg-primary text-on-primary py-3 rounded-xl font-bold custom-glow transition-all active:scale-95">
            Comenzar Entrenamiento
          </button>
        </div>
        <div className="px-3 border-t border-outline-variant/20 pt-4 space-y-2">
          <a className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md">Soporte</span>
          </a>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-3 w-full px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all group text-left"
          >
            <span className="material-symbols-outlined">logout</span>
            <span className="font-label-md">Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* Contenido principal */}
      <main className="lg:ml-64 pt-24 px-gutter pb-stack-lg min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Sección del encabezado */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-stack-md">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Horario Semanal</h1>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">event</span>
                <span className="font-label-md">14 DE OCTUBRE - 20 DE OCTUBRE, 2024</span>
              </div>
            </div>
            <div className="flex items-center gap-4 bg-surface-container-low p-2 rounded-full border border-outline-variant/30">
              <span className="font-label-md text-on-surface-variant ml-4">Activar Recordatorios</span>
              <button 
                onClick={alternarRecordatorios}
                className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none ${recordatoriosActivados ? 'bg-primary' : 'bg-outline-variant'}`}
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-surface-bright transition-transform ${recordatoriosActivados ? 'translate-x-6' : 'translate-x-1'}`}></span>
              </button>
            </div>
          </div>

          {/* Diseño del Calendario */}
          <div className="calendar-grid gap-4">
            
            {/* Columna: Lunes */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-primary font-bold">LUN</span>
                  <span className="font-headline-md text-on-surface">14</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div 
                  className="bg-surface-container-highest p-4 rounded-lg border-l-4 border-secondary-container cursor-grab active:cursor-grabbing hover:bg-surface-variant transition-colors group"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Hipertrofia</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
                  </div>
                  <h3 className="font-headline-md text-[18px] leading-tight mb-1">Día de Piernas Pesado</h3>
                  <p className="text-on-surface-variant text-label-md mb-4">45 min • 320 kcal</p>
                  <div className="flex -space-x-2">
                    <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center border border-surface">
                      <span className="material-symbols-outlined text-[12px] text-primary">fitness_center</span>
                    </div>
                    <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center border border-surface">
                      <span className="material-symbols-outlined text-[12px] text-secondary">bolt</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Columna: Martes */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant">MAR</span>
                  <span className="font-headline-md text-on-surface">15</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div 
                  className="bg-surface-container-highest p-4 rounded-lg border-l-4 border-primary cursor-grab active:cursor-grabbing hover:bg-surface-variant transition-colors group"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Resistencia</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
                  </div>
                  <h3 className="font-headline-md text-[18px] leading-tight mb-1">Flujo Cardio AM</h3>
                  <p className="text-on-surface-variant text-label-md mb-4">30 min • 410 kcal</p>
                </div>
              </div>
            </div>

            {/* Columna: Miércoles (Hoy) */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-primary font-bold">MIÉ (HOY)</span>
                  <span className="font-headline-md text-on-surface">16</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3 border-primary/40 ring-1 ring-primary/20 shadow-[0_0_20px_rgba(47,217,244,0.05)]"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div 
                  className="bg-surface-container-highest p-4 rounded-lg border-l-4 border-tertiary cursor-grab active:cursor-grabbing hover:bg-surface-variant transition-colors group"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-tertiary/10 text-tertiary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Fuerza</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
                  </div>
                  <h3 className="font-headline-md text-[18px] leading-tight mb-1">Protocolo Push B</h3>
                  <p className="text-on-surface-variant text-label-md mb-4">60 min • 500 kcal</p>
                </div>
                <button className="w-full py-4 border-2 border-dashed border-outline-variant/30 rounded-lg hover:border-primary/50 hover:bg-primary/5 transition-all group">
                  <span className="material-symbols-outlined text-outline-variant group-hover:text-primary">add</span>
                </button>
              </div>
            </div>

            {/* Columna: Jueves */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant">JUE</span>
                  <span className="font-headline-md text-on-surface">17</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div className="flex-grow flex items-center justify-center flex-col opacity-30">
                  <span className="material-symbols-outlined text-4xl mb-2">bedtime</span>
                  <span className="text-label-md">DÍA DE DESCANSO</span>
                </div>
              </div>
            </div>

            {/* Columna: Viernes */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant">VIE</span>
                  <span className="font-headline-md text-on-surface">18</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div 
                  className="bg-surface-container-highest p-4 rounded-lg border-l-4 border-secondary-container cursor-grab active:cursor-grabbing hover:bg-surface-variant transition-colors group"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-secondary/10 text-secondary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Hipertrofia</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
                  </div>
                  <h3 className="font-headline-md text-[18px] leading-tight mb-1">Explosión de Cuerpo Completo</h3>
                  <p className="text-on-surface-variant text-label-md mb-4">50 min • 480 kcal</p>
                </div>
              </div>
            </div>

            {/* Columna: Sábado */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant">SÁB</span>
                  <span className="font-headline-md text-on-surface">19</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              />
            </div>

            {/* Columna: Domingo */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between px-2">
                <div className="flex flex-col">
                  <span className="text-label-md text-on-surface-variant">DOM</span>
                  <span className="font-headline-md text-on-surface">20</span>
                </div>
                <button className="material-symbols-outlined text-outline hover:text-primary transition-colors">add_circle</button>
              </div>
              <div 
                className="glass-card rounded-xl p-4 min-h-[300px] flex flex-col gap-3"
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
              >
                <div 
                  className="bg-surface-container-highest p-4 rounded-lg border-l-4 border-primary cursor-grab active:cursor-grabbing hover:bg-surface-variant transition-colors group"
                  draggable="true"
                  onDragStart={handleDragStart}
                  onDragEnd={handleDragEnd}
                >
                  <div className="flex justify-between items-start mb-2">
                    <span className="bg-primary/10 text-primary text-[10px] px-2 py-0.5 rounded font-bold uppercase tracking-wider">Aire Libre</span>
                    <span className="material-symbols-outlined text-on-surface-variant text-sm opacity-0 group-hover:opacity-100 transition-opacity">drag_indicator</span>
                  </div>
                  <h3 className="font-headline-md text-[18px] leading-tight mb-1">Carrera de Larga Distancia</h3>
                  <p className="text-on-surface-variant text-label-md mb-4">90 min • 850 kcal</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cuadrícula de acciones inferiores */}
          <div className="mt-stack-lg grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="glass-card p-6 rounded-xl flex items-center gap-6">
              <div className="w-16 h-16 rounded-full border-4 border-primary border-t-transparent animate-spin-slow"></div>
              <div>
                <p className="text-label-md text-on-surface-variant">PROGRESO SEMANAL</p>
                <h4 className="font-stats-xl text-on-surface">65%</h4>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex items-center gap-6">
              <div className="bg-secondary/20 p-4 rounded-full">
                <span className="material-symbols-outlined text-secondary text-3xl">local_fire_department</span>
              </div>
              <div>
                <p className="text-label-md text-on-surface-variant">CALORÍAS ESTIMADAS</p>
                <h4 className="font-stats-xl text-on-surface">2,490</h4>
              </div>
            </div>
            <div className="glass-card p-6 rounded-xl flex items-center gap-6">
              <div className="bg-tertiary/20 p-4 rounded-full">
                <span className="material-symbols-outlined text-tertiary text-3xl">timer</span>
              </div>
              <div>
                <p className="text-label-md text-on-surface-variant">VOLUMEN TOTAL</p>
                <h4 className="font-stats-xl text-on-surface">275m</h4>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Navegación Móvil */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface/90 backdrop-blur-xl flex justify-around items-center h-16 z-50 border-t border-outline-variant/10">
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-bold">Inicio</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>calendar_month</span>
          <span className="text-[10px] font-bold">Plan</span>
        </button>
        <button className="bg-primary text-on-primary w-12 h-12 rounded-full -mt-8 shadow-lg shadow-primary/20 flex items-center justify-center">
          <span className="material-symbols-outlined">add</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">menu_book</span>
          <span className="text-[10px] font-bold">Librería</span>
        </button>
        <button 
          onClick={handleLogout}
          className="flex flex-col items-center gap-1 text-on-surface-variant"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="text-[10px] font-bold">Salir</span>
        </button>
      </nav>
      
    </div>
  );
}

export default CalendarioSemanal;