import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';

// Importación de todas tus páginas
import { HomePage } from './pages/HomePage';
import { WorkshopsPage } from './pages/WorkshopsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

// Importamos el CSS actualizado
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <WhatsAppButton />
      <main>
        <Routes>
          {/* Todas las páginas ahora ocupan el ancho completo */}
          <Route path="/" element={<HomePage />} />
          <Route path="/servicios" element={<ServicesPage />} />
          <Route path="/galeria" element={<GalleryPage />} />
          <Route path="/acerca" element={<AboutPage />} />
          <Route path="/contacto" element={<ContactPage />} />
          
          {/* Ruta de Workshops ya ocupa toda la pantalla */}
          <Route path="/taller-mas-risas-menos-miedos" element={<WorkshopsPage />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

