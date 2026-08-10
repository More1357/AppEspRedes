// src/components/Header.jsx
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api';

function Header() {
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const abrirModalPerfil = () => {
    window.dispatchEvent(new CustomEvent('abrirModalPerfil'));
  };

  return (
    <header className="fixed top-0 left-0 w-full z-40 h-16 flex justify-between items-center px-gutter bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20 ml-0 md:pl-72">
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
          <button 
            onClick={abrirModalPerfil}
            className="w-8 h-8 rounded-full overflow-hidden border border-primary/30 cursor-pointer hover:ring-2 hover:ring-primary transition-all"
          >
            <img 
              className="w-full h-full object-cover" 
              alt="Perfil" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF3KB3-0N-iax1npRi8GOYzZybUB001LrSoSAZ8Hhx_qXkeMT99at4fuA3WV5H8ohKV711cIhFc8Y7JF-eLFDD-CAS7gKg6ETlk2Wh4Bp-juIZqCrjC_qVkJCbd1gZgdBbXOL8GgAAnIYRg6RX1_tbgrhctbGyiLa04NRRwaAujOZqIIhud1mGNq1bqsh99SsvLS5qDX9IU62Bx7GTWWEuT-eq3edBdXTz2ZhzdhXlz4k7VwBMaYrkqJIduPfd8hOR5ExlHmxOsTE"
            />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;