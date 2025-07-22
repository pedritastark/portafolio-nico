// src/pages/ShowsPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import EventIcon from '@mui/icons-material/Event';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// Fondos e Imágenes
import fondoSecundario from '../assets/fondo-principal.jpg';
import showImage from '../assets/show-image.jpeg'; // Usamos la imagen principal del show

// --- DATOS DE EJEMPLO PARA LOS PRÓXIMOS EVENTOS ---
// Más adelante, puedes reemplazar esto con tus fechas reales.
const upcomingShows = [
  {
    date: { month: 'AGO', day: '15' },
    city: 'Bogotá, CO',
    venue: 'Teatro Astor Plaza',
    time: '8:00 PM',
    ticketUrl: '#', // URL de la tiquetera
  },
  {
    date: { month: 'SEP', day: '05' },
    city: 'Medellín, CO',
    venue: 'Teatro Pablo Tobón Uribe',
    time: '9:00 PM',
    ticketUrl: '#',
  },
  {
    date: { month: 'SEP', day: '20' },
    city: 'Evento Privado',
    venue: 'Empresas S.A.S',
    time: '7:30 PM',
    ticketUrl: null, // Si no hay link, el botón no aparecerá
  },
];

export const WorkshopsPage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoSecundario})`,
      backgroundRepeat: 'repeat',
      color: 'white',
      py: { xs: 5, md: 8 },
    }}>
      <Container maxWidth="lg">
        {/* --- 1. SECCIÓN DEL SHOW DESTACADO --- */}
        <Typography variant="h2" component="h1" fontWeight="900" align="center" sx={{ mb: 8 }}>
          Shows
        </Typography>
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={6}>
            <Card sx={{ borderRadius: 3, boxShadow: '0 10px 40px rgba(0,0,0,0.5)' }}>
              <CardMedia component="img" image={showImage} alt="Show Cada Día Más Top" />
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" color="secondary.main" fontWeight="bold">SHOW DESTACADO</Typography>
            <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mt: 1, mb: 2 }}>"Cada Día Más Top"</Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Ideal para cualquier tipo de evento que busque transformar momentos comunes en experiencias extraordinarias.            
            </Typography>
            <Button
              component={Link}
              to="/contacto"
              variant="contained"
              color="primary"
              size="large"
              sx={{ fontWeight: 'bold' }}
            >
              Contratar para Evento Privado
            </Button>
          </Grid>
        </Grid>

        {/* --- 2. LISTA DE PRÓXIMOS EVENTOS --- */}
        <Typography variant="h3" component="h2" fontWeight="bold" align="center" sx={{ mb: 6 }}>
          Agenda de Próximos Eventos
        </Typography>
        <Stack spacing={4}>
          {upcomingShows.map((show, index) => (
            <Card key={index} sx={{
              display: 'flex',
              borderRadius: 3,
              backgroundColor: 'rgba(0, 0, 0, 0.2)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              flexDirection: { xs: 'column', sm: 'row' }
            }}>
              {/* Sección de la Fecha */}
              <Box sx={{
                backgroundColor: 'primary.main',
                p: 3,
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                minWidth: { sm: 150 }
              }}>
                <Typography variant="h4" fontWeight="900">{show.date.day}</Typography>
                <Typography variant="h6">{show.date.month}</Typography>
              </Box>
              {/* Sección de la Información */}
              <Box sx={{ p: 3, flexGrow: 1 }}>
                <Typography variant="h5" fontWeight="bold">{show.venue}</Typography>
                <Stack direction="row" spacing={2} sx={{ my: 1 }} alignItems="center">
                  <LocationOnIcon color="secondary" fontSize="small" />
                  <Typography variant="body1" color="text.secondary">{show.city}</Typography>
                </Stack>
                <Stack direction="row" spacing={2} alignItems="center">
                  <AccessTimeIcon color="secondary" fontSize="small" />
                  <Typography variant="body1" color="text.secondary">{show.time}</Typography>
                </Stack>
              </Box>
              {/* Sección del Botón */}
              {show.ticketUrl && (
                <Box sx={{ p: 3, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Button
                    href={show.ticketUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    color="secondary"
                    sx={{ color: 'black', fontWeight: 'bold' }}
                  >
                    Comprar Entradas
                  </Button>
                </Box>
              )}
            </Card>
          ))}
        </Stack>

      </Container>
    </Box>
  );
};