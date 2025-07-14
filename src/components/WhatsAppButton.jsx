// src/components/WhatsAppButton.jsx
import React from 'react';
import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

export const WhatsAppButton = () => {
  // Usamos el número de teléfono de tu brochure 
  const phoneNumber = '573194914403'; 
  const whatsappUrl = `https://wa.me/${phoneNumber}`;

  return (
    <Fab 
      aria-label="whatsapp"
      href={whatsappUrl}
      target="_blank" // Para que se abra en una nueva pestaña
      rel="noopener noreferrer" // Por seguridad
      sx={{
        position: 'fixed',
        // Posición en la esquina inferior izquierda
        bottom: { xs: 16, md: 32 }, // 16px desde abajo en móvil, 32px en desktop
        right: { xs: 16, md: 32 },   // 16px desde la izquierda en móvil, 32px en desktop
        // Colores oficiales de WhatsApp
        backgroundColor: '#25D366',
        color: 'white',
        '&:hover': {
          backgroundColor: '#128C7E', // Un verde más oscuro al pasar el mouse
        }
      }}
    >
      <WhatsAppIcon />
    </Fab>
  );
};