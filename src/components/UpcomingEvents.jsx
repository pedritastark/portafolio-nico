// src/components/UpcomingEvents.jsx
import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Button, Stack } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// --- CAMBIO: Se actualizan los datos de los eventos ---
const phoneNumber = '573194914403'; // Tu número de WhatsApp
const whatsappMessage = encodeURIComponent("¡Hola! Estoy interesado en comprar entradas para el show. ¿Me podrías dar más información?");
const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

const upcomingShows = [
  {
    date: { month: 'FEB', day: '22' },
    city: 'Bogotá, CO',
    venue: 'Evento Especial de Comedia',
    ticketUrl: whatsappUrl, // El botón ahora apunta a WhatsApp
  },
  // Puedes añadir más eventos aquí en el futuro
];

export const UpcomingEvents = () => {
  return (
    <Box sx={{ py: 8 }}>
      <Typography variant="h3" component="h2" fontWeight="900" align="center" sx={{ color: 'white', mb: 6 }}>
        Próximas Fechas
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {upcomingShows.map((show, index) => (
          <Grid item xs={12} sm={8} md={4} key={index}>
            {/* La propiedad height: '100%' asegura que todas las cards en una fila tengan la misma altura */}
            <Card sx={{
              borderRadius: 4,
              backgroundColor: 'rgba(30, 30, 30, 0.7)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: 'white',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center'
            }}>
              <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', p: 4 }}>
                <Typography variant="h2" fontWeight="900" color="secondary.main">
                  {show.date.day}
                </Typography>
                <Typography variant="h5" sx={{ mb: 2 }}>
                  {show.date.month}
                </Typography>
                <Typography variant="h6" fontWeight="bold" sx={{ mt: 2, flexGrow: 1 }}>
                  {show.venue}
                </Typography>
                <Stack direction="row" spacing={1} alignItems="center" sx={{ color: 'text.secondary' }}>
                  <LocationOnIcon fontSize="small" />
                  <Typography variant="body1">{show.city}</Typography>
                </Stack>
              </CardContent>
              {show.ticketUrl && (
                <Box sx={{ p: 2, pt:0 }}>
                  <Button
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="secondary"
                    sx={{ color: 'black', fontWeight: 'bold' }}
                  >
                    Contactar
                  </Button>
                </Box>
              )}
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};