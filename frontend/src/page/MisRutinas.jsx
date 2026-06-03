// Archivo: src/page/MisRutinas.jsx
import { useState } from 'react';

// TODO: implementar búsqueda cuando haya datos dinámicos de rutinas
// Por ahora el input de búsqueda está deshabilitado hasta que las rutinas vengan de una API
function MisRutinas() {
  // Estado para búsqueda (sin implementar aún)
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      
      {/* Barra superior */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-gutter h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="flex items-center gap-4">
          <span className="font-headline-lg text-headline-lg font-extrabold text-primary">FitFlow</span>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center bg-surface-container-highest/50 rounded-full px-4 py-1.5 border border-outline-variant/30 transition-all duration-200 focus-within:border-primary/50 focus-within:bg-surface-container-highest/80">
            <span className="material-symbols-outlined text-on-surface-variant mr-2" style={{ fontSize: '20px' }}>search</span>
            <input 
              className="bg-transparent border-none focus:ring-0 text-body-md text-on-surface w-48 placeholder:text-on-surface-variant outline-none" 
              placeholder="Buscar rutinas (próximamente)..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              disabled
            />
          </div>
          <div className="flex items-center gap-4">
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">notifications</button>
            <button className="material-symbols-outlined text-on-surface-variant hover:text-primary transition-colors">settings</button>
            <div className="w-8 h-8 rounded-full overflow-hidden border border-primary/30">
              <img 
                alt="Perfil de usuario" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCOCuZsU54A6YJr70rz4TAjFpeBgFx9pXmRc1gHEpb32LCyOnH_1huBRqxw52Ja6OBljDo66eoBEeHbSMV7rAXVDAoufeJVSUMkbuBDviIYEAoK1ufhfwel-EJ_c6fTqQT0-EEs0JJSJ39ywIjcBkle7HzCJu1NxerkN5G0vCJae_Fg5N0h1nBd-Mxc2rcTIcKTrRJU6D4C2e3VmAIj5dkk6SJ1pefGAk75UPFM5EdNPHlIZnila5a9RWBfDZo2qq89miL8XfAmhA"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Barra lateral - CORREGIDO: hidden md:flex sin flex suelto */}
      <aside className="fixed left-0 top-0 h-full w-64 z-50 flex-col pt-20 pb-8 bg-surface-container border-r border-outline-variant/30 hidden md:flex">
        <div className="px-6 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">FitFlow Pro</h2>
          <p className="text-label-md font-label-md text-on-surface-variant">Rendimiento Élite</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Panel</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="font-label-md">Constructor de Rutinas</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">timer</span>
            <span className="font-label-md">Sesión Activa</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="font-label-md">Biblioteca de Ejercicios</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="font-label-md">Calendario de Entrenamiento</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border-r-4 border-primary transition-all scale-[0.98]" href="#">
            <span className="material-symbols-outlined">folder_special</span>
            <span className="font-label-md">Mis Rutinas</span>
          </a>
        </nav>
        <div className="px-4 mb-6">
          <button className="w-full py-4 bg-primary text-on-primary font-headline-md rounded-xl glow-primary hover:opacity-90 active:scale-95 transition-all">
            Comenzar Entrenamiento
          </button>
        </div>
        <div className="px-4 pt-4 border-t border-outline-variant/20 space-y-2">
          <a className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md">Soporte</span>
          </a>
          <a className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" href="#">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Configuración</span>
          </a>
        </div>
      </aside>

      {/* Resto del componente igual... */}
      <main className="md:ml-64 pt-24 px-6 pb-24 min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-stack-lg">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Mis Rutinas</h1>
              <p className="text-body-lg text-on-surface-variant">Gestiona y organiza tus protocolos de entrenamiento personalizados.</p>
            </div>
            <div className="flex gap-3">
              <button className="flex items-center gap-2 px-6 py-3 rounded-full border-2 border-primary text-primary font-label-md hover:bg-primary/10 transition-all">
                <span className="material-symbols-outlined">filter_list</span>
                Filtrar
              </button>
              <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-on-primary font-label-md glow-primary hover:opacity-90 active:scale-95 transition-all">
                <span className="material-symbols-outlined">add</span>
                Nueva Rutina
              </button>
            </div>
          </div>

          {/* Estadísticas (diseño asimétrico) */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-stack-lg">
            <div className="md:col-span-8 bg-surface-container rounded-3xl p-8 border border-outline-variant/30 flex flex-col md:flex-row items-center gap-8 relative overflow-hidden">
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 text-center md:text-left">
                <span className="text-primary font-label-md uppercase tracking-widest mb-2 block">Objetivo Semanal</span>
                <h3 className="font-headline-lg text-headline-lg mb-4">Estás a 4 entrenamientos de tu objetivo</h3>
                <div className="w-full bg-surface-container-highest rounded-full h-3 mb-2">
                  <div className="bg-gradient-to-r from-primary to-secondary h-full rounded-full shadow-[0_0_10px_rgba(47,217,244,0.5)]" style={{ width: '33%' }}></div>
                </div>
                <p className="text-on-surface-variant font-body-md">2 de 6 rutinas completadas esta semana</p>
              </div>
              <div className="shrink-0 w-32 h-32 md:w-40 md:h-40 rounded-full border-8 border-surface-container-highest flex items-center justify-center relative">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle 
                    className="text-primary" 
                    cx="50%" 
                    cy="50%" 
                    fill="transparent" 
                    r="45%" 
                    stroke="currentColor" 
                    strokeDasharray="283" 
                    strokeDashoffset="188" 
                    strokeLinecap="round" 
                    strokeWidth="8"
                  ></circle>
                </svg>
                <span className="font-stats-xl text-stats-xl">33%</span>
              </div>
            </div>
            <div className="md:col-span-4 bg-secondary-container/10 border border-secondary/20 rounded-3xl p-8 flex flex-col justify-between">
              <div>
                <span className="material-symbols-outlined text-secondary text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>local_fire_department</span>
                <h4 className="font-headline-md text-headline-md text-on-surface">Mejor Rendimiento</h4>
                <p className="text-on-surface-variant mt-2 font-body-md">'Hipertrofia Lunes' es tu rutina más consistente.</p>
              </div>
              <a className="text-secondary font-label-md flex items-center gap-2 hover:gap-3 transition-all mt-4" href="#">
                Ver análisis <span className="material-symbols-outlined">arrow_forward</span>
              </a>
            </div>
          </div>

          {/* El resto de las tarjetas de rutinas se mantienen igual... */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Tarjeta de Rutina 1, 2, 3... (sin cambios) */}
          </div>
        </div>
      </main>

      {/* Navegación Móvil */}
      <nav className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container/90 backdrop-blur-xl border-t border-outline-variant/20 flex justify-around items-center h-16 z-50">
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">dashboard</span>
          <span className="text-[10px] font-label-md">Panel</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">fitness_center</span>
          <span className="text-[10px] font-label-md">Creador</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-primary">
          <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>folder_special</span>
          <span className="text-[10px] font-label-md">Rutinas</span>
        </button>
        <button className="flex flex-col items-center gap-1 text-on-surface-variant">
          <span className="material-symbols-outlined">calendar_month</span>
          <span className="text-[10px] font-label-md">Calendario</span>
        </button>
      </nav>
    </div>
  );
}

export default MisRutinas;
