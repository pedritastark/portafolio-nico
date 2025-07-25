// src/components/ServiceCard.jsx
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Stack, List, ListItem, ListItemIcon, Box } from '@mui/material';

export const ServiceCard = ({ image, title, shortDescription, benefits, imagePosition, whatsappUrl, isTop }) => {
  return (
    <Card sx={{
      backgroundColor: '#ffffff',
      borderRadius: 4,
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
      position: 'relative', // Para posicionar la viñeta
    }}>
      {/* Viñeta TOP */}
      {isTop && (
        <Box sx={{
          position: 'absolute',
          top: 16,
          right: 16,
          background: 'linear-gradient(90deg, #ffab00 60%, #fffbe6 100%)',
          color: '#222',
          fontWeight: 'bold',
          fontSize: '0.95rem',
          px: 2,
          py: 0.5,
          borderRadius: '16px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
          zIndex: 2,
          letterSpacing: 1,
        }}>
          TOP
        </Box>
      )}
      <CardMedia
        component="img"
        image={image}
        alt={title}
        sx={{ 
          height: 220,
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
          <List sx={{ textAlign: 'left', width: '100%' }}>
            {benefits.map((benefit, index) => (
              <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                <ListItemIcon sx={{ minWidth: 44 }}>
                  <img src={benefit.icon} alt="icon" style={{ width: '50px', height: 'auto' }}/>
                </ListItemIcon>
                <Typography variant="body2" color="text.secondary">{benefit.text}</Typography>
              </ListItem>
            ))}
          </List>
        </Stack>
        <Button
          component="a" // Es un enlace
          href={whatsappUrl} // Usa la URL de WhatsApp
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ mt: { xs: 1, md: 3 }, fontWeight: 'bold' }}
        >
          ¡Quiero saber más!
        </Button>
      </CardContent>
    </Card>
  );
};