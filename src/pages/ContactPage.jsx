// src/pages/ContactPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';
import fondoSecundario from '../assets/fondo-secundario.jpg';

export const ContactPage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoSecundario})`,
      backgroundRepeat: 'repeat',
      minHeight: 'calc(100vh - 68px)',
      py: 4,
      px: 2,
    }}>
      <Typography variant="h2" color="white" align="center">
        Página de Contacto
      </Typography>
    </Box>
  );
};