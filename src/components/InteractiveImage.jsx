// src/components/InteractiveImage.jsx
import React, { useState } from 'react';
import { Box, Typography, Slider, Paper } from '@mui/material';

// Usaremos tu isotipo como imagen de ejemplo
import isotipoPurpura from '../assets/isotipo-purpura.png';

export const InteractiveImage = () => {
  // 1. Creamos las dos variables de estado para los ejes X e Y
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  // Funciones para manejar el cambio en los sliders
  const handleXChange = (event, newValue) => {
    setOffsetX(newValue);
  };

  const handleYChange = (event, newValue) => {
    setOffsetY(newValue);
  };

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>Control Interactivo de Imagen</Typography>
      
      {/* El contenedor donde se mostrará la imagen */}
      <Paper 
        elevation={4}
        sx={{
          width: '100%',
          maxWidth: 500,
          height: 500,
          margin: 'auto',
          position: 'relative', // Necesario para el posicionamiento absoluto de la imagen
          overflow: 'hidden', // Para que la imagen no se salga del cuadro
          border: '1px solid grey'
        }}
      >
        {/* La imagen que se moverá */}
        <img
          src={isotipoPurpura}
          alt="Isotipo Interactivo"
          style={{
            position: 'absolute',
            // 2. La imagen se centra cuando X e Y son 0
            top: '50%',
            left: '50%',
            width: '150px',
            // 3. La magia está aquí: movemos la imagen desde el centro usando las variables
            transform: `translate(calc(-50% + ${offsetX}px), calc(-50% + ${offsetY}px))`,
            transition: 'transform 0.1s linear' // Una pequeña transición para suavidad
          }}
        />
      </Paper>

      {/* Controles para modificar las variables X e Y */}
      <Box sx={{ maxWidth: 500, margin: '2rem auto' }}>
        <Typography id="x-slider" gutterBottom>
          Mover en Eje X: {offsetX}px
        </Typography>
        <Slider
          aria-labelledby="x-slider"
          value={offsetX}
          onChange={handleXChange}
          min={-150}
          max={150}
          color="primary"
        />
        <Typography id="y-slider" gutterBottom sx={{ mt: 2 }}>
          Mover en Eje Y: {offsetY}px
        </Typography>
        <Slider
          aria-labelledby="y-slider"
          value={offsetY}
          onChange={handleYChange}
          min={-150}
          max={150}
          color="secondary"
        />
      </Box>
    </Box>
  );
};