// src/page/ConstructorRutinas.jsx
import { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

function ConstructorRutinas() {
  const [rutinaActual, setRutinaActual] = useState({
    nombre: '',
    ejercicios: []
  });

  const [ejercicioSeleccionado, setEjercicioSeleccionado] = useState(null);

  // Lista de ejercicios disponibles (después vendrá de la API)
  const ejerciciosDisponibles = [
    { id: 1, nombre: 'Press de Banca', musculo: 'Pecho' },
    { id: 2, nombre: 'Sentadilla', musculo: 'Piernas' },
    { id: 3, nombre: 'Dominadas', musculo: 'Espalda' },
    { id: 4, nombre: 'Press militar', musculo: 'Hombros' },
    { id: 5, nombre: 'Peso muerto', musculo: 'Espalda' },
  ];

  const agregarEjercicio = (ejercicio) => {
    setRutinaActual({
      ...rutinaActual,
      ejercicios: [...rutinaActual.ejercicios, { ...ejercicio, series: 3, repeticiones: 10 }]
    });
  };

  const eliminarEjercicio = (index) => {
    const nuevosEjercicios = rutinaActual.ejercicios.filter((_, i) => i !== index);
    setRutinaActual({ ...rutinaActual, ejercicios: nuevosEjercicios });
  };

  const guardarRutina = async () => {
    // Aquí después se conectará con el backend
    console.log('Guardando rutina:', rutinaActual);
    alert('Rutina guardada (demo)');
  };

  return (
    <div className="bg-background text-on-surface font-body-md min-h-screen">
      
      <Header />
      <Sidebar />

      {/* Contenido principal */}
      <main className="lg:ml-64 pt-24 px-gutter pb-stack-lg min-h-screen">
        <div className="max-w-7xl mx-auto">
          
          {/* Encabezado */}
          <div className="mb-stack-md">
            <h1 className="font-headline-lg text-headline-lg text-on-surface mb-2">Constructor de Rutinas</h1>
            <p className="text-body-lg text-on-surface-variant">
              Armá tu rutina personalizada agregando ejercicios, series y repeticiones.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* Panel izquierdo: Nombre y lista de ejercicios */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Nueva Rutina</h2>
              
              <div className="mb-4">
                <label className="font-label-md text-label-md text-primary">Nombre de la rutina</label>
                <input
                  type="text"
                  value={rutinaActual.nombre}
                  onChange={(e) => setRutinaActual({ ...rutinaActual, nombre: e.target.value })}
                  className="w-full bg-surface border border-outline-variant rounded-lg p-3 text-on-surface focus:border-primary outline-none transition-all"
                  placeholder="Ej: Rutina de fuerza"
                />
              </div>

              <h3 className="font-label-md text-label-md text-primary mb-2">Ejercicios</h3>
              {rutinaActual.ejercicios.length === 0 ? (
                <p className="text-on-surface-variant text-sm">No hay ejercicios. Agregá desde la lista.</p>
              ) : (
                <div className="space-y-2">
                  {rutinaActual.ejercicios.map((ej, idx) => (
                    <div key={idx} className="bg-surface-container-low p-3 rounded-lg flex justify-between items-center">
                      <div>
                        <p className="font-bold text-on-surface">{ej.nombre}</p>
                        <p className="text-sm text-on-surface-variant">{ej.musculo} • {ej.series} series x {ej.repeticiones} reps</p>
                      </div>
                      <button onClick={() => eliminarEjercicio(idx)} className="text-red-400 hover:text-red-300">
                        <span className="material-symbols-outlined">delete</span>
                      </button>
                    </div>
                  ))}
                </div>
              )}

              <button
                onClick={guardarRutina}
                disabled={!rutinaActual.nombre || rutinaActual.ejercicios.length === 0}
                className="w-full mt-6 py-3 bg-primary text-on-primary rounded-xl font-bold disabled:opacity-50 disabled:cursor-not-allowed transition-all active:scale-95"
              >
                Guardar Rutina
              </button>
            </div>

            {/* Panel derecho: Lista de ejercicios disponibles */}
            <div className="glass-card rounded-xl p-6">
              <h2 className="font-headline-md text-headline-md text-primary mb-4">Ejercicios Disponibles</h2>
              <div className="space-y-2 max-h-[500px] overflow-y-auto custom-scrollbar">
                {ejerciciosDisponibles.map((ej) => (
                  <div
                    key={ej.id}
                    onClick={() => agregarEjercicio(ej)}
                    className="bg-surface-container-low p-3 rounded-lg cursor-pointer hover:bg-surface-container-highest transition-all flex justify-between items-center"
                  >
                    <div>
                      <p className="font-bold text-on-surface">{ej.nombre}</p>
                      <p className="text-sm text-on-surface-variant">{ej.musculo}</p>
                    </div>
                    <span className="material-symbols-outlined text-primary">add_circle</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default ConstructorRutinas;