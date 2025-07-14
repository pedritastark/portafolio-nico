// src/components/ServiceCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Stack, List, ListItem, ListItemIcon } from '@mui/material';
import { Link } from 'react-router-dom';

// El componente ahora acepta una nueva prop opcional: 'imagePosition'
export const ServiceCard = ({ image, title, shortDescription, benefits, imagePosition }) => {
  return (
    <Card sx={{
      backgroundColor: '#ffffff',
      borderRadius: 4,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
    }}>
      {/* IMAGEN PRINCIPAL DEL SERVICIO */}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ 
          height: 220,
          // Lógica condicional: Usa 'imagePosition' si existe, si no, usa 'center' por defecto.
          objectPosition: imagePosition || 'center' 
        }}
      />

      <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3, textAlign: 'center' }}>
        <Stack spacing={2} sx={{ flexGrow: 1, alignItems: 'center' }}>
          <Typography variant="h5" component="div" fontWeight="bold" color="black">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ px: 2 }}>
            {shortDescription}
          </Typography>

          {/* LISTA DE BENEFICIOS CON ÍCONOS CORREGIDOS */}
          <List sx={{ textAlign: 'left', width: '100%' }}>
            {benefits.map((benefit, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 44 }}> {/* Espacio aumentado para el ícono */}
                  <img 
                    src={benefit.icon} 
                    alt="benefit icon" 
                    // Íconos más grandes y sin distorsión
                    style={{ width: '32px', height: 'auto' }}
                  />
                </ListItemIcon>
                <Typography variant="body2" color="text.secondary">{benefit.text}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
        <Button
          component={Link}
          to="/contacto"
          variant="contained"
          color="primary"
          sx={{ mt: 3, fontWeight: 'bold' }}
        >
          Me Interesa
        </Button>
      </CardContent>
    </Card>
  );
};