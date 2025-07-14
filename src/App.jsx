// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';

// 1. Importamos todos nuestros nuevos componentes de página
import { HomePage } from './pages/HomePage';
import { ShowsPage } from './pages/ShowsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        {/* 2. Reemplazamos los 'element' con nuestros componentes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      
      {/* Aquí pondremos el Footer más adelante */}
    </BrowserRouter>
  );
}

export default App;