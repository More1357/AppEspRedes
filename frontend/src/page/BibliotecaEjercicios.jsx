// Archivo: src/page/BibliotecaEjercicios.jsx
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { logout } from '../services/api';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function BibliotecaEjercicios() {
  const navigate = useNavigate();

  const [modalAbierto, setModalAbierto] = useState(false);
  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState({
    titulo: '',
    musculo: '',
    dificultad: '',
    equipo: '',
    instrucciones: ''
  });

  const abrirModal = (titulo, musculo, dificultad, equipo, instrucciones) => {
    setEjercicioSeleccionado({
      titulo,
      musculo,
      dificultad,
      equipo,
      instrucciones
    });
    setModalAbierto(true);
  };

  const cerrarModal = () => {
    setModalAbierto(false);
  };

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  useEffect(() => {
    if (!modalAbierto) return;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, [modalAbierto]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape' && modalAbierto) {
        cerrarModal();
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [modalAbierto]);

  return (
    <div className="bg-background text-on-surface font-body-md selection:bg-primary selection:text-on-primary-fixed overflow-hidden h-screen flex">
      
      <Sidebar />
      <Header />

      <main className="flex-1 ml-64 pt-16 flex flex-col h-screen">
        
        <section className="px-gutter pt-8 pb-4">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
            <div>
              <h2 className="font-headline-lg text-headline-lg text-on-surface">Biblioteca de Ejercicios</h2>
              <p className="text-on-surface-variant mt-1">Explora más de 500 movimientos profesionales con indicaciones técnicas.</p>
            </div>
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 bg-surface-container-high px-4 py-2 rounded-lg border border-outline-variant/30 hover:border-primary transition-all">
                <span className="material-symbols-outlined text-[18px]">filter_list</span>
                <span className="text-label-md font-label-md">Filtrar</span>
              </button>
              <button className="flex items-center gap-2 bg-primary text-on-primary-fixed px-4 py-2 rounded-lg font-bold hover:opacity-90 transition-all">
                <span className="material-symbols-outlined text-[18px]">add</span>
                <span className="text-label-md font-label-md">Movimiento Personalizado</span>
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 overflow-x-auto pb-4 custom-scrollbar">
            <button className="px-6 py-2 rounded-full bg-primary text-on-primary-fixed font-bold text-label-md whitespace-nowrap active-pill transition-all">Todo el Cuerpo</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Pecho</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Espalda</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Piernas</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Hombros</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Brazos</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Core</button>
            <button className="px-6 py-2 rounded-full bg-surface-container-high border border-outline-variant/30 text-on-surface-variant font-medium text-label-md whitespace-nowrap hover:border-primary transition-all">Cardio</button>
          </div>
        </section>

        <section className="flex-1 overflow-y-auto px-gutter pb-stack-lg custom-scrollbar">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6">
            
            {/* Tarjeta de Ejercicio 1 */}
            <div 
              className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer" 
              onClick={() => abrirModal(
                'Press de Banca con Barra', 
                'Pecho', 
                'Avanzado', 
                'Barra, Banco', 
                'Acuéstate en el banco con los pies apoyados en el suelo. Agarra la barra ligeramente más ancha que el ancho de los hombros. Baja la barra lentamente hacia tu pecho, luego empuja hacia arriba con fuerza manteniendo los codos en un ángulo de 45 grados.'
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Press de Banca con Barra" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAuO2t4OuCayoSFa--gHZdRvMeFQJnMpoOXNOLr7QiLVVjLv1Ykyip_AOwV9ApCkfEE-FAgShVNfB-XStnKtkajM5oQa0ugd3NSJCrCaRG27kcZn0DS-BuAl3P-FfH5-EpgnReF7lCrNhYvW6DZ4WQ6_SzFsStEyj13FdEcySpvb5rul4fezp_NgpQJCPej8EUvlHbrdY2S2QQN4gq-U4n13SXF9Q0eTPc_pStrQJd2zarv0vqo1bfRPvjJ0BqUknQj-s2G_bgJHyQ"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-secondary text-on-secondary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Avanzado</span>
                </div>
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined bg-primary/20 backdrop-blur-md text-primary p-2 rounded-full">play_arrow</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-1">Press de Banca con Barra</h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  <p className="text-label-md font-label-md">Pecho • Barra</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ejercicio 2 */}
            <div 
              className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer" 
              onClick={() => abrirModal(
                'Sentadilla Copa con Mancuerna',
                'Piernas',
                'Principiante',
                'Mancuerna',
                'Sostén una mancuerna verticalmente contra tu pecho con ambas manos. Párate con los pies ligeramente más anchos que el ancho de los hombros. Baja las caderas hasta que tus muslos estén al menos paralelos al suelo, manteniendo la espalda recta y el pecho erguido.'
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Sentadilla Copa con Mancuerna" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKMPvw49OXbJAmAUFVq0ku8VP_KtoPOWB348zZdGdNFR9RMbS1hwf6ffHJR06eZhZSfbU8OzQtPRngNrfUbhUvMHMZDv5rJVizgqsNPSlQ2tHgp-P5wT8ISeC24SVut6VKmj8wkAkJ662k3lmQE7-ZaxP1xd7_v7BFGYJsE3AFdfToN5u9FUU2aT6cSKWBV2irnYknWvViiHwglc4lOY-zBaoD2Kk9EitBzZ6gp4TRiXNAt0e1xc6SeLxCVh4KVJc72bFORH6EqEI"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-primary text-on-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Principiante</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-1">Sentadilla Copa con Mancuerna</h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  <p className="text-label-md font-label-md">Piernas • Mancuerna</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ejercicio 3 */}
            <div 
              className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer" 
              onClick={() => abrirModal(
                'Dominadas',
                'Espalda',
                'Intermedio',
                'Barra de Dominadas',
                'Agarra la barra con las manos más anchas que el ancho de los hombros y las palmas mirando hacia afuera. Levanta tu cuerpo hasta que la barbilla esté por encima de la barra. Concéntrate en llevar los codos hacia abajo y hacia las caderas. Baja con control hasta colgar completamente.'
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Dominadas" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuC0WbKQjXRLkxgWBW-M1Y1tzZnR5b0g_3nzgypDhzXUgxlcu1IZKWpNiJc25lPY758ypN7R7SZ-XvmHv8r9oK-QHDqXcUm8Z17yi93-Dhk6V2AcGJZ3pJcLoOoSfOm6FAOG1lPS4lrC9UVMD8P4uQQYQHdf1kTJWVZIoMjclyjQKjS-zo4l2P7KZ2GWhscTt7US9ASg38Q0nM6P-jDpcbfHYaG0yfnFfoTgrpSuJS_rVfICy3KAnR74l0AqB1GGg016rRDoTGeRH5Y"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Intermedio</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-1">Dominadas</h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  <p className="text-label-md font-label-md">Espalda • Peso Corporal</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ejercicio 4 */}
            <div 
              className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer" 
              onClick={() => abrirModal(
                'Peso Muerto Convencional',
                'Espalda',
                'Avanzado',
                'Barra',
                'Párate con los pies a la altura de las caderas, la barra sobre el empeine. Agarra la barra justo fuera de las espinillas. Mantén la espalda recta, el pecho hacia arriba y empuja a través de los talones para levantar la barra, manteniéndola cerca de tus espinillas.'
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Peso Muerto" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwiTkWaL1cYuJdfqX0R2eZLLI41ZAeKYDgLxkLhasyCwhcEVRU1ibHwX_j588an6XnM2MtZ-3kVrxu6BE6HfKK6zuVpQDglWEbe__VKbbKsYzdF_CxL1rN1C3TNp0tbg14UX64FJ2riq41dmvDSIj2T3EqmP1yv8Pn9Njyx2pmRiG4xcbF8smdbMEfgd1THoAoBeyU5cw6tbzpH1m7IhvWXRCqhaSkUPOwR8Bp0_M67dJ30xVGwyPIy7Vqs7Tnrb3WVw6tzLQEDtA"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-secondary text-on-secondary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Avanzado</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-1">Peso Muerto Convencional</h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  <p className="text-label-md font-label-md">Espalda • Barra</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ejercicio 5 */}
            <div 
              className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer" 
              onClick={() => abrirModal(
                'Press de Hombros con Mancuerna',
                'Hombros',
                'Intermedio',
                'Mancuernas',
                'Siéntate en un banco con respaldo vertical. Sostén una mancuerna en cada mano a la altura de los hombros con las palmas hacia adelante. Presiona las mancuernas hacia arriba hasta extender completamente los brazos, luego baja controladamente.'
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Press de Hombros con Mancuerna" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuASEvx9hzfL4g2vQ9sTZ-Llrfy5hvb2kjOEPZQ_dQgZrYK92wqnCXiNRuoK4tzyLYhUONbaAdxPjm3XiQsyzeAEbyYg-m2bq2dWq5C0ZbDP6S6ShCCpf9nmfPrB1xNnpB9qtDsajP-7sBAoWQ3us8_yO4erNVBq1ZwH6ZN4k0bpRYuHzw7gMxKJhpiFbpLfphxuu13uI3AOFFo1Lgsyg9ShvRWC9qwu-JVsBQReSdFpaxH3RBPzyQFVtWThEihmhsBqwO1qbP9AaA0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-tertiary-container text-on-tertiary-container px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Intermedio</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-1">Press de Hombros con Mancuerna</h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  <p className="text-label-md font-label-md">Hombros • Mancuerna</p>
                </div>
              </div>
            </div>

            {/* Tarjeta de Ejercicio 6 */}
            <div 
              className="group bg-surface-container rounded-xl overflow-hidden border border-outline-variant/20 hover:border-primary/50 transition-all cursor-pointer" 
              onClick={() => abrirModal(
                'Plancha Antebrazos',
                'Core',
                'Principiante',
                'Peso Corporal',
                'Apóyate sobre tus antebrazos y dedos de los pies, manteniendo el cuerpo en línea recta desde la cabeza hasta los talones. Contrae el abdomen y mantén la posición sin dejar caer las caderas.'
              )}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  alt="Plancha" 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKlUsGyd6leIZr86GnVUOQ8tIHeqY2ea0lbbbJsU5tEKHHwKaJcwkSnsHNeI1zQavXKkgllcUj7weK3Ymy9SntMmrDGy5DRqJTe2u-Ish4gngpQDsbJGcf7EJART2lJp1cCQl7qMH8O_fzQsVfNAir-t8z7PDyxdBNDtIJjSgFc5cMYAYNKivu_6c4uR0bRqs2p81QnxnbAzT_-mF5WRZGSbNCvQWWdL5c60-7BjHWqzC-b0LC9dve0Urcb7B4AcjIdXFmbsy7J5M"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-surface-container/90 via-transparent to-transparent"></div>
                <div className="absolute bottom-3 left-3 flex gap-2">
                  <span className="bg-primary text-on-primary px-2 py-1 rounded text-[10px] font-bold uppercase tracking-wider">Principiante</span>
                </div>
              </div>
              <div className="p-4">
                <h3 className="font-headline-md text-headline-md text-on-surface text-lg leading-tight mb-1">Plancha Antebrazos</h3>
                <div className="flex items-center gap-2 text-on-surface-variant">
                  <span className="material-symbols-outlined text-sm">fitness_center</span>
                  <p className="text-label-md font-label-md">Core • Peso Corporal</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Modal de detalles */}
      {modalAbierto && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          <div className="absolute inset-0 bg-background/80 backdrop-blur-md" onClick={cerrarModal}></div>
          <div className="relative w-full max-w-4xl bg-surface-container border border-outline-variant/30 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row animate-in fade-in zoom-in duration-300">
            
            {/* Lado izquierdo: Media */}
            <div className="w-full md:w-1/2 bg-surface-container-low relative">
              <img 
                className="w-full h-full object-cover" 
                alt="Vista cinemática del ejercicio" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDSfIbrZyl40jxY7RTGvCjbnuujle_MqKU8k6fVrR-2XUnh9leoLhYQYgSb1SQLFHMwKtnagrGiQu4uEhlaxuGWa0iQBn0DMJzY9v_RGrdtSQjN2yJBQGjsGpUOyMcAz6Ajenipsf_gLS7UltZODtJxLdaYIRaSU-PsJhv8ZNEt6G0dCEW_lDER_nmOhXDp7R9HaiaCk6q6FMcEq44QP-MH4jwNHDgEy0ah7eUPEHSL-IfinFANznKzRS-HaK2X3WeSWh6eeZvpvE"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface-container-low to-transparent md:bg-gradient-to-r"></div>
              <button 
                className="absolute top-4 left-4 bg-surface-container-highest/60 backdrop-blur-md p-2 rounded-full text-on-surface hover:text-primary transition-colors" 
                onClick={cerrarModal}
              >
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>

            {/* Lado derecho: Contenido */}
            <div className="w-full md:w-1/2 p-8 flex flex-col">
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-2">
                  <span className="bg-secondary text-on-secondary px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider" id="modalDifficulty">
                    {ejercicioSeleccionado.dificultad}
                  </span>
                  <span className="text-primary text-xs font-bold uppercase tracking-widest" id="modalMuscle">
                    {ejercicioSeleccionado.musculo}
                  </span>
                </div>
                <h2 className="font-headline-lg text-headline-lg text-on-surface leading-tight" id="modalTitle">
                  {ejercicioSeleccionado.titulo}
                </h2>
              </div>
              <div className="space-y-6 flex-1 overflow-y-auto custom-scrollbar pr-2">
                <div>
                  <h4 className="text-on-surface font-bold text-label-md mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">construction</span> Equipo
                  </h4>
                  <p className="text-on-surface-variant text-body-md" id="modalEquipment">
                    {ejercicioSeleccionado.equipo}
                  </p>
                </div>
                <div>
                  <h4 className="text-on-surface font-bold text-label-md mb-2 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-sm">list_alt</span> Ejecución
                  </h4>
                  <p className="text-on-surface-variant text-body-md leading-relaxed" id="modalInstructions">
                    {ejercicioSeleccionado.instrucciones}
                  </p>
                </div>
                <div className="bg-surface-container-high/50 p-4 rounded-xl border border-outline-variant/20">
                  <h4 className="text-on-surface font-bold text-xs uppercase tracking-widest mb-2">Consejo Profesional</h4>
                  <p className="text-on-surface-variant text-sm italic">"Mantén las escápulas retraídas y 'ancladas' al banco durante todo el movimiento para maximizar el trabajo del pecho y proteger tus hombros."</p>
                </div>
              </div>
              <div className="mt-8 flex gap-3">
                <button className="flex-1 bg-primary text-on-primary-fixed py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:opacity-90 active:scale-95 transition-all">
                  <span className="material-symbols-outlined text-[20px]">add_circle</span> Agregar a Rutina
                </button>
                <button className="p-3 border border-outline-variant rounded-xl text-on-surface hover:border-primary transition-colors">
                  <span className="material-symbols-outlined">favorite</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default BibliotecaEjercicios;