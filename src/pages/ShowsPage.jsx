// Ejemplo para src/pages/ShowsPage.jsx
import React from 'react';
import { Box, Typography } from '@mui/material';

export const ShowsPage = () => { // <-- Cambia "ShowsPage" según el archivo
  return (
    <Box sx={{ minHeight: 'calc(100vh - 68px)', py: 4, px: 2 }}>
      <Typography variant="h2" color="white" align="center">
        Página de Shows 
      </Typography>
    </Box>
  );
};