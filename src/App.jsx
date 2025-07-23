// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton'; // 1. Asegúrate de que esté importado

// Importación de todas tus páginas
import { HomePage } from './pages/HomePage';
import { WorkshopsPage } from './pages/WorkshopsPage'; // Usando WorkshopsPage como acordamos
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/talleres" element={<WorkshopsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/acerca" element={<AboutPage />} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      
      {/* Aquí irá el Footer que construiremos más adelante */}
    </BrowserRouter>
  );
}

export default App;