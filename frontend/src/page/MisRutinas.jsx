import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function MisRutinas() {
  const [searchTerm, setSearchTerm] = useState('');

  // Micro-interacciones para tarjetas de rutinas
  useEffect(() => {
    const cards = document.querySelectorAll('.routine-card');
    cards.forEach(card => {
      const handleMouseEnter = () => {
        card.classList.add('shadow-[0_10px_30px_-10px_rgba(47,217,244,0.1)]');
      };
      const handleMouseLeave = () => {
        card.classList.remove('shadow-[0_10px_30px_-10px_rgba(47,217,244,0.1)]');
      };
      card.addEventListener('mouseenter', handleMouseEnter);
      card.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        card.removeEventListener('mouseenter', handleMouseEnter);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

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
              placeholder="Buscar rutinas..." 
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
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

      {/* Barra lateral */}
      <aside className="fixed left-0 top-0 h-full w-64 z-50 flex flex-col pt-20 pb-8 bg-surface-container border-r border-outline-variant/30 hidden md:flex">
        <div className="px-6 mb-8">
          <h2 className="font-headline-md text-headline-md text-primary">FitFlow Pro</h2>
          <p className="text-label-md font-label-md text-on-surface-variant">Rendimiento Élite</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/">
            <span className="material-symbols-outlined">dashboard</span>
            <span className="font-label-md">Panel</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/constructor-rutinas">
            <span className="material-symbols-outlined">fitness_center</span>
            <span className="font-label-md">Constructor de Rutinas</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/sesion-activa">
            <span className="material-symbols-outlined">timer</span>
            <span className="font-label-md">Sesión Activa</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/biblioteca">
            <span className="material-symbols-outlined">menu_book</span>
            <span className="font-label-md">Biblioteca de Ejercicios</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/calendario">
            <span className="material-symbols-outlined">calendar_month</span>
            <span className="font-label-md">Calendario de Entrenamiento</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-3 rounded-xl bg-primary/10 text-primary border-r-4 border-primary transition-all scale-[0.98]" to="/mis-rutinas">
            <span className="material-symbols-outlined">folder_special</span>
            <span className="font-label-md">Mis Rutinas</span>
          </Link>
        </nav>
        <div className="px-4 mb-6">
          <button className="w-full py-4 bg-primary text-on-primary font-headline-md rounded-xl glow-primary hover:opacity-90 active:scale-95 transition-all">
            Comenzar Entrenamiento
          </button>
        </div>
        <div className="px-4 pt-4 border-t border-outline-variant/20 space-y-2">
          <Link className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/soporte">
            <span className="material-symbols-outlined">help</span>
            <span className="font-label-md">Soporte</span>
          </Link>
          <Link className="flex items-center gap-3 px-4 py-2 rounded-xl text-on-surface-variant hover:bg-surface-variant/50 transition-all" to="/configuracion">
            <span className="material-symbols-outlined">settings</span>
            <span className="font-label-md">Configuración</span>
          </Link>
        </div>
      </aside>

      {/* Contenido principal */}
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
              <Link className="text-secondary font-label-md flex items-center gap-2 hover:gap-3 transition-all mt-4" to="/analisis">
                Ver análisis <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Cuadrícula de rutinas */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Tarjeta de Rutina 1 */}
            <div className="routine-card group bg-surface-container-low border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:bg-surface-container">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Mancuernas pesadas en un gimnasio profesional" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDrDVLlfoAgxihXyLBgtzDli3HCQeWmoUJKlMkKAsBTBdwacNy1dGOV02CQW-0gVI6rXuPCJRFeU9gH-8dsKX981jJy37bzVVAzkNyNeqhG7xb2tREpseaP2uLFSM1WRT5Dfl_SzNcFl7rK1HrYfV6DPsicL2qnpKx-yMiTCyTtoJ1WKlq18gzXN3sMnzSkhTMYykNSJfA7B2DfmBL-vniuH5yqW_XxeQJuh8VQquWrYpFt-pfWf9Ig45QQr9O_1Kw9Yi-VGq3taVE"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-md text-xs">Avanzado</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md mb-2">Hipertrofia Lunes</h3>
                <div className="flex items-center gap-4 text-on-surface-variant font-label-md mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    75 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">fitness_center</span>
                    8 Ejercicios
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="col-span-2 py-3 bg-primary text-on-primary rounded-xl font-label-md glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">play_arrow</span>
                    Comenzar Ahora
                  </button>
                  <button className="py-3 border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span>
                    Editar
                  </button>
                  <button className="py-3 border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">share</span>
                    Compartir
                  </button>
                </div>
              </div>
            </div>

            {/* Tarjeta de Rutina 2 */}
            <div className="routine-card group bg-surface-container-low border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:bg-surface-container">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Atleta realizando movimiento funcional dinámico" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCq-LEiwZzeoBMek5RM-bMo2DZkwMnttbEI4rjoJwPfMJamJvuQODVs85Yh2jpdHt-MZXVWXBQXLYqqZucmMAyOoFyiGFToQz1srL1A6lFPAKKrw0C-n_VhYaFEO_liQeHgieUf7HUfK5R6Jk0jmPmZpegwxJziCSzz5CUZG_jHGXTgFsq4TF-ecl2F1e0zjKzf1rj2_nermKHOUS-HwZUu0q5_P1wkjQeozSKlIadkuOf4FpJitc1dExLXqxl-9jRf4K9acvptXeM"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-tertiary-container text-on-tertiary-container font-label-md text-xs">Principiante</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md mb-2">Yoga Flow y Core</h3>
                <div className="flex items-center gap-4 text-on-surface-variant font-label-md mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    45 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">fitness_center</span>
                    12 Ejercicios
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="col-span-2 py-3 bg-primary text-on-primary rounded-xl font-label-md glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">play_arrow</span>
                    Comenzar Ahora
                  </button>
                  <button className="py-3 border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span>
                    Editar
                  </button>
                  <button className="py-3 border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">share</span>
                    Compartir
                  </button>
                </div>
              </div>
            </div>

            {/* Tarjeta de Rutina 3 */}
            <div className="routine-card group bg-surface-container-low border border-outline-variant/30 rounded-2xl overflow-hidden hover:border-primary/50 transition-all hover:bg-surface-container">
              <div className="relative h-48 overflow-hidden">
                <img 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                  alt="Plataforma de levantamiento olímpico en gimnasio moderno" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxP575zlFtWkGE6f3JwZE26-wegLSMq11ndQxFV48JwaOgvm0M0teyF4ACoSPukggEoGr_2i_C8I0YtWtcaQq9KE0-85oaVfIwMj2C0_5NX1hWLHEvyyfKJrFXgKKZ3ZX_d5PnKOv2OTKlICzZAVt36jQ5kZupY_Im740KjGP7k-hCSZkqV-Tbxd15gh5wM2xtufVYwmWt1FviwPxCE2Gj42SgqU6fg9qAFlCD_3Tuz8tO2z4egOZtcZRPDvcpwT5vPmYMx75P8ak"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 rounded-full bg-secondary text-on-secondary font-label-md text-xs">Intermedio</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-headline-md text-headline-md mb-2">Día de Empuje Alfa</h3>
                <div className="flex items-center gap-4 text-on-surface-variant font-label-md mb-6">
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">schedule</span>
                    60 min
                  </div>
                  <div className="flex items-center gap-1">
                    <span className="material-symbols-outlined text-sm">fitness_center</span>
                    6 Ejercicios
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <button className="col-span-2 py-3 bg-primary text-on-primary rounded-xl font-label-md glow-primary hover:opacity-90 transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">play_arrow</span>
                    Comenzar Ahora
                  </button>
                  <button className="py-3 border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span>
                    Editar
                  </button>
                  <button className="py-3 border border-outline-variant rounded-xl text-on-surface font-label-md hover:bg-surface-variant transition-all flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">share</span>
                    Compartir
                  </button>
                </div>
              </div>
            </div>
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

      {/* Estilos personalizados */}
      <style jsx>{`
        .material-symbols-outlined {
          font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        }
        .glow-primary {
          box-shadow: 0 0 20px -5px rgba(138, 235, 255, 0.3);
        }
        .glass-panel {
          backdrop-filter: blur(20px);
          background: rgba(23, 31, 51, 0.7);
        }
      `}</style>
    </div>
  );
}

export default MisRutinas;
