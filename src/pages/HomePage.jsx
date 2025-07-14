// src/pages/HomePage.jsx
import React from 'react';
import { Box } from '@mui/material';
import fondoPrincipal from '../assets/fondo-principal.jpg';
import { HeroSection } from '../components/HeroSection';

export const HomePage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoPrincipal})`,
      backgroundRepeat: 'repeat',
      minHeight: 'calc(100vh - 68px)',
      // Padding vertical: 32px en móvil, 64px en desktop para el espacio superior
      pt: { xs: 4, md: 8 }, 
      // Padding inferior: 32px en móvil, 48px en desktop
      pb: { xs: 4, md: 6 }, 
    }}>
      <HeroSection />
    </Box>
  );
};