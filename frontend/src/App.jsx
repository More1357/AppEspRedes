import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './page/Inicio';

console.log("✅ App.jsx se está ejecutando");

function App() {
  console.log("✅ Componente App renderizando");
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Inicio />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;