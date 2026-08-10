// frontend/src/page/Panel.jsx
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function Panel() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      
      <Sidebar />
      <Header />

      <main className="lg:ml-64 pt-24 px-gutter pb-stack-lg min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-stack-md">
            <div>
              <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Panel de Control</h1>
              <div className="flex items-center gap-3 text-on-surface-variant">
                <span className="material-symbols-outlined text-primary">dashboard</span>
                <span className="font-label-md">Bienvenido de vuelta, ¡a entrenar!</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
    </div>
  );
}

export default Panel;