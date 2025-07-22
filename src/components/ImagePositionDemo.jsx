// src/components/ImagePositionDemo.jsx
import React from 'react';
import { Box, Card, CardMedia, Typography } from '@mui/material';

// Este componente recibe la imagen y el valor de objectPosition que queremos probar
export const ImagePositionDemo = ({ imageSrc, positionValue }) => {
  return (
    <Box>
      <Typography variant="h6" align="center" gutterBottom>{positionValue}</Typography>
      <Card sx={{ width: 300, height: 200, margin: 'auto' }}>
        <CardMedia
          component="img"
          image={imageSrc}
          alt={`Demo de ${positionValue}`}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Esencial para que el recorte funcione
            objectPosition: positionValue, // Aplicamos el valor dinámico aquí
          }}
        />
      </Card>
    </Box>
  );
};