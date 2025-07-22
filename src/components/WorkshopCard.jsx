// src/components/WorkshopCard.jsx
import React from 'react';
import { Card, CardMedia, CardContent, CardActions, Button, Typography, List, ListItem, ListItemIcon } from '@mui/material';

// El componente recibe 'isMobile' para saber qué versión mostrar
export const WorkshopCard = ({ workshop, isMobile }) => {
  return (
    <Card sx={{
      borderRadius: 4,
      boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      height: '100%',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <CardMedia
        component="img"
        height={isMobile ? "180" : "220"} // Imagen un poco más pequeña en móvil
        image={workshop.image}
        alt={workshop.title}
      />
      <CardContent sx={{ textAlign: 'center', flexGrow: 1, pt: { xs: 2, md: 3 }, pb: { xs: 1, md: 2 } }}>
        <Typography gutterBottom variant="h5" component="div" fontWeight="bold">
          {workshop.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {workshop.description}
        </Typography>
        <List sx={{ textAlign: 'left', width: '100%', mt: isMobile ? 1 : 2, mb: isMobile ? 1 : 2 }}>
          {workshop.benefits.map((benefit, index) => (
            <ListItem key={index} disablePadding sx={{ mb: isMobile ? 0.5 : 1 }}>
              <ListItemIcon sx={{ minWidth: isMobile ? 32 : 40 }}>
                <img src={benefit.icon} alt="icon" style={{ width: isMobile ? '22px' : '28px', height: 'auto' }} />
              </ListItemIcon>
              <Typography variant="body2" color="text.secondary">{benefit.text}</Typography>
            </ListItem>
          ))}
        </List>
      </CardContent>
      <CardActions sx={{ justifyContent: 'center', p: 2, pt: { xs: 0, md: 0 } }}>
        <Button
          component="a"
          href={workshop.whatsappMessage}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          color="primary"
          sx={{ fontWeight: 'bold', mt: { xs: 0, md: 1 } }}
        >
          Me Interesa
        </Button>
      </CardActions>
    </Card>
  );
};