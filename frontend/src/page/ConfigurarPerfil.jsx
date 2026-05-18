import { useState } from 'react';
import { updatePerfil } from '../services/api';

function ConfigurarPerfil() {
  const [pasoActual, setPasoActual] = useState(1);
  const [formData, setFormData] = useState({
    nombre: '',
    edad: '',
    peso: '',
    altura: '',
    nivelActividad: 'ACTIVO'
  });
  const [loading, setLoading] = useState(false);
  const totalPasos = 3;

  const siguientePaso = () => {
    setPasoActual(pasoActual + 1);
  };

  const volverPaso = () => {
    setPasoActual(pasoActual - 1);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const terminarConfiguracion = async () => {
    setLoading(true);
    try {
      const resultado = await updatePerfil({
        nombre: formData.nombre,
        edad: parseInt(formData.edad),
        peso: parseFloat(formData.peso),
        altura: parseInt(formData.altura),
        nivelActividad: formData.nivelActividad
      });
      
      if (resultado.success) {
        // Actualizar usuario en localStorage
        const usuarioActual = JSON.parse(localStorage.getItem('usuario') || '{}');
        usuarioActual.nombre = formData.nombre;
        localStorage.setItem('usuario', JSON.stringify(usuarioActual));
        
        alert('✅ Perfil configurado correctamente');
        window.location.href = '/calendario';
      } else {
        alert('❌ Error al guardar el perfil');
      }
    } catch (error) {
      alert('❌ ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-surface font-body-md text-on-surface overflow-x-hidden antialiased min-h-screen">
      
      {/* Header - fijo arriba */}
      <header className="fixed top-0 left-0 w-full z-40 flex justify-between items-center px-gutter h-16 bg-surface/80 backdrop-blur-xl border-b border-outline-variant/20">
        <div className="font-headline-lg text-headline-lg font-extrabold text-primary">FitFlow</div>
        <div className="flex items-center gap-4"></div>
      </header>

      <main className="min-h-screen pt-24 pb-12 flex flex-col items-center px-container-margin">
        
        {/* Indicador de progreso */}
        <div className="w-full max-w-xl mb-stack-lg">
          <div className="flex justify-between mb-stack-sm">
            <span className="font-label-md text-label-md text-primary">
              Paso {pasoActual} de {totalPasos}
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant">
              {Math.round((pasoActual / totalPasos) * 100)}% Completo
            </span>
          </div>
          <div className="h-2 w-full bg-surface-container-highest rounded-full overflow-hidden">
            <div 
              className="h-full bg-primary-container glow-cyan transition-all duration-700 ease-in-out" 
              style={{ width: `${(pasoActual / totalPasos) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Contenedor de pasos */}
        <div className="w-full max-w-xl relative min-h-[500px]">
          
          {/* PASO 1: Datos personales */}
          {pasoActual === 1 && (
            <section className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-lg flex flex-col gap-stack-md">
              <div className="flex flex-col gap-base">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Bienvenido a FitFlow</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Vamos a comenzar con lo básico. ¿A quién estamos entrenando hoy?
                </p>
              </div>
              
              <div className="flex flex-col gap-stack-sm">
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-primary">Nombre Completo</label>
                  <input 
                    type="text"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="bg-surface border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg p-4 text-on-surface outline-none transition-all" 
                    placeholder="Ej: Alex Rivera"
                  />
                </div>
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-primary">Edad</label>
                  <input 
                    type="number"
                    name="edad"
                    value={formData.edad}
                    onChange={handleInputChange}
                    className="bg-surface border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg p-4 text-on-surface outline-none transition-all" 
                    placeholder="25"
                  />
                </div>
              </div>
              
              <div className="mt-stack-sm">
                <button 
                  onClick={siguientePaso}
                  disabled={!formData.nombre || !formData.edad}
                  className="w-full py-4 bg-primary-container text-on-primary-container font-headline-md text-headline-md rounded-xl glow-cyan hover:glow-cyan-intense active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Continuar
                </button>
              </div>
            </section>
          )}

          {/* PASO 2: Métricas */}
          {pasoActual === 2 && (
            <section className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-lg flex flex-col gap-stack-md">
              <div className="flex flex-col gap-base">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Métricas de Precisión</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  Usamos tu altura y peso para calcular zonas de rendimiento personalizadas.
                </p>
              </div>
              
              <div className="grid grid-cols-2 gap-stack-sm">
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-primary">Peso (kg)</label>
                  <input 
                    type="number"
                    name="peso"
                    value={formData.peso}
                    onChange={handleInputChange}
                    className="bg-surface border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg p-4 text-on-surface outline-none transition-all" 
                    placeholder="70"
                  />
                </div>
                <div className="flex flex-col gap-base">
                  <label className="font-label-md text-label-md text-primary">Altura (cm)</label>
                  <input 
                    type="number"
                    name="altura"
                    value={formData.altura}
                    onChange={handleInputChange}
                    className="bg-surface border border-outline-variant focus:border-primary-container focus:ring-1 focus:ring-primary-container rounded-lg p-4 text-on-surface outline-none transition-all" 
                    placeholder="175"
                  />
                </div>
              </div>
              
              <div className="flex flex-col gap-stack-sm pt-stack-sm">
                <button 
                  onClick={siguientePaso}
                  disabled={!formData.peso || !formData.altura}
                  className="w-full py-4 bg-primary-container text-on-primary-container font-headline-md text-headline-md rounded-xl glow-cyan hover:glow-cyan-intense active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Siguiente Paso
                </button>
                <button 
                  onClick={volverPaso}
                  className="w-full py-2 text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors"
                >
                  Volver
                </button>
              </div>
            </section>
          )}

          {/* PASO 3: Nivel de actividad */}
          {pasoActual === 3 && (
            <section className="w-full bg-surface-container-low border border-outline-variant/30 rounded-xl p-stack-lg flex flex-col gap-stack-md">
              <div className="flex flex-col gap-base">
                <h1 className="font-headline-lg text-headline-lg text-on-surface">Nivel de Actividad</h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  ¿Cómo describirías tu ritmo de movimiento semanal?
                </p>
              </div>
              
              <div className="flex flex-col gap-stack-sm">
                <label className="group cursor-pointer">
                  <input 
                    type="radio" 
                    name="nivelActividad" 
                    value="SEDENTARIO"
                    checked={formData.nivelActividad === 'SEDENTARIO'}
                    onChange={handleInputChange}
                    className="hidden peer" 
                  />
                  <div className="p-4 bg-surface border border-outline-variant rounded-xl flex items-center gap-4 transition-all peer-checked:border-primary-container peer-checked:bg-primary-container/10">
                    <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant peer-checked:text-primary">
                      <span className="material-symbols-outlined">chair</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-on-surface">Sedentario</p>
                      <p className="text-sm text-on-surface-variant">Trabajo en escritorio, ejercicio mínimo</p>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary-container flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-container scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                  </div>
                </label>

                <label className="group cursor-pointer">
                  <input 
                    type="radio" 
                    name="nivelActividad" 
                    value="ACTIVO"
                    checked={formData.nivelActividad === 'ACTIVO'}
                    onChange={handleInputChange}
                    className="hidden peer" 
                  />
                  <div className="p-4 bg-surface border border-outline-variant rounded-xl flex items-center gap-4 transition-all peer-checked:border-primary-container peer-checked:bg-primary-container/10">
                    <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant peer-checked:text-primary">
                      <span className="material-symbols-outlined">directions_walk</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-on-surface">Activo/a</p>
                      <p className="text-sm text-on-surface-variant">3-5 días de entrenamiento por semana</p>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary-container flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-container scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                  </div>
                </label>

                <label className="group cursor-pointer">
                  <input 
                    type="radio" 
                    name="nivelActividad" 
                    value="MUY_ACTIVO"
                    checked={formData.nivelActividad === 'MUY_ACTIVO'}
                    onChange={handleInputChange}
                    className="hidden peer" 
                  />
                  <div className="p-4 bg-surface border border-outline-variant rounded-xl flex items-center gap-4 transition-all peer-checked:border-primary-container peer-checked:bg-primary-container/10">
                    <div className="w-12 h-12 bg-surface-container rounded-lg flex items-center justify-center text-on-surface-variant peer-checked:text-primary">
                      <span className="material-symbols-outlined">bolt</span>
                    </div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md text-on-surface">Muy Activo/a</p>
                      <p className="text-sm text-on-surface-variant">Nivel alto, actividad intensiva diariamente</p>
                    </div>
                    <div className="w-4 h-4 rounded-full border-2 border-outline-variant peer-checked:border-primary-container flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-primary-container scale-0 peer-checked:scale-100 transition-transform"></div>
                    </div>
                  </div>
                </label>
              </div>
              
              <div className="flex flex-col gap-stack-sm pt-stack-sm">
                <button 
                  onClick={terminarConfiguracion}
                  disabled={loading}
                  className="w-full py-4 bg-primary-container text-on-primary-container font-headline-md text-headline-md rounded-xl glow-cyan hover:glow-cyan-intense active:scale-95 transition-all disabled:opacity-50"
                >
                  {loading ? 'Guardando...' : 'Terminar Configuración'}
                </button>
                <button 
                  onClick={volverPaso}
                  className="w-full py-2 text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-colors"
                >
                  Volver
                </button>
              </div>
            </section>
          )}
        </div>

        {/* Elementos visuales de fondo */}
        <div className="fixed bottom-0 left-0 w-full h-1/3 pointer-events-none opacity-20 bg-gradient-to-t from-primary-container/20 to-transparent"></div>
        <div className="fixed top-20 right-[-100px] w-[300px] h-[300px] bg-primary-container/10 blur-[120px] rounded-full pointer-events-none"></div>
      </main>
    </div>
  );
}

export default ConfigurarPerfil;
