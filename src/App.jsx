// src/App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { WhatsAppButton } from './components/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { ShowsPage } from './pages/ShowsPage';
import { ServicesPage } from './pages/ServicesPage';
import { GalleryPage } from './pages/GalleryPage';
import { AboutPage} from './pages/AboutPage'
import { ContactPage } from './pages/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      
      <WhatsAppButton />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shows" element={<ShowsPage />} />
        <Route path="/servicios" element={<ServicesPage />} />
        <Route path="/galeria" element={<GalleryPage />} />
        <Route path="/acerca" element={<AboutPage/>} />
        <Route path="/contacto" element={<ContactPage />} />
      </Routes>
      
      {/* Aquí pondremos el Footer más adelante */}
    </BrowserRouter>
  );
}

export default App;