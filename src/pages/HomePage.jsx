// src/pages/HomePage.jsx
import React from 'react';
import { Box, Container } from '@mui/material';
import fondoPrincipal from '../assets/fondo-principal.jpg';

// Importamos los dos componentes de la página
import { HeroSection } from '../components/HeroSection';
import { UpcomingEvents } from '../components/UpcomingEvents'; // <-- NUEVA IMPORTACIÓN

export const HomePage = () => {
  return (
    // El Box principal ahora solo se encarga del fondo
    <Box sx={{
      backgroundImage: `url(${fondoPrincipal})`,
      backgroundRepeat: 'repeat',
    }}>
      {/* Contenedor para la HeroSection */}
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
        minHeight: 'calc(100vh - 68px)', // Ocupa al menos una pantalla de alto
      }}>
        <Container maxWidth="lg">
          <HeroSection />
        </Container>
      </Box>

      {/* Contenedor para la nueva sección de Próximos Eventos */}
      <Container maxWidth="lg" sx={{ pb: 8 }}>
        <UpcomingEvents />
      </Container>
    </Box>
  );
};