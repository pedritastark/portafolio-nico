// src/pages/HomePage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

// Importamos nuestro fondo
import fondoPrincipal from '../assets/fondo-principal.jpg';

export const HomePage = () => {
  return (
    <Box sx={{
      // Aplicamos la imagen de fondo
      backgroundImage: `url(${fondoPrincipal})`,
      // Hacemos que la imagen se repita, creando el patrón
      backgroundRepeat: 'repeat',
      // Nos aseguramos de que el contenedor ocupe al menos toda la altura de la pantalla menos el navbar
      minHeight: 'calc(100vh - 68px)', // El navbar mide aprox. 68px de alto
      // Podemos añadir padding para que el contenido no se pegue a los bordes
      py: 4, // Padding vertical
      px: 2, // Padding horizontal
    }}>
      {/* Aquí irá el contenido de la página de inicio, como la sección Héroe */}
      <Typography variant="h2" color="white" align="center">
        
      </Typography>
    </Box>
  );
};