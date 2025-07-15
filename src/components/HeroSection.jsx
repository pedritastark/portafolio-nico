// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Stack, Card, CardContent, CardMedia, Container } from '@mui/material';
import { Link } from 'react-router-dom';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
// CORRECCIÓN: Usamos la imagen .png como indicaste. 
// Asegúrate de que tu archivo en la carpeta 'src/assets/' se llame 'hero-image.png'.
import heroImage from '../assets/hero-image.png';

export const HeroSection = () => {
  return (
    <Container maxWidth="lg">
      {/* --- ESTRUCTURA DE LAYOUT DEFINITIVA --- */}
      <Box sx={{
        display: 'flex',
        // CORRECCIÓN: Forzamos la dirección de los elementos. 'column' en móvil y 'row' en desktop.
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center',
        gap: 5, // Aumentamos un poco el espacio entre columnas
      }}>

        {/* --- COLUMNA 1: CARD DE IMAGEN/VIDEO --- */}
        {/* Usamos 'width' para que ocupe todo el ancho en móvil y la mitad en desktop */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Card sx={{
            borderRadius: 3,
            overflow: 'hidden',
            position: 'relative',
            boxShadow: '0 10px 40px rgba(0,0,0,0.7)',
          }}>
            <CardMedia
              component="img"
              image={heroImage}
              alt="Nicolás Garzón en el escenario"
            />
            <Box sx={{
              position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}>
              <PlayCircleOutlineIcon sx={{ fontSize: { xs: 70, md: 90 }, color: 'white' }} />
            </Box>
          </Card>
        </Box>

        {/* --- COLUMNA 2: CARD DE TEXTO --- */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Card sx={{
            borderRadius: 3,
            backgroundColor: 'background.paper',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            height: '100%', // Hacemos que la card ocupe toda la altura de la columna
          }}>
            <CardContent sx={{ p: { xs: 3, md: 5 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
              <Stack spacing={2} alignItems={{ xs: 'center', md: 'flex-start' }}>
                
                <Typography
                  component="h1"
                  fontWeight="900"
                  color="white"
                  sx={{ typography: { xs: 'h4', md: 'h3' }, textAlign: { xs: 'center', md: 'left' } }}
                >
                  Nicolás Garzón
                </Typography>
                
                <Typography
                  variant="h6" // CORRECCIÓN: Tamaño de subtítulo reducido
                  color="secondary.main"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    pb: 1,
                    fontFamily: 'Montserrat',
                    fontWeight: '700'
                  }}
                >
                  Comediante | Conferencista | Coach de Vida
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ my: 2, textAlign: { xs: 'center', md: 'left' }, fontSize: '1.1rem' }}
                >
                  "Mi misión va más allá de las risas: inspirar, motivar y dejar una huella".
                </Typography>

                {/* --- BOTONES CON ALINEACIÓN CORREGIDA --- */}
                <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                    <Button
                      component={Link}
                      to="/shows"
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ fontWeight: 'bold' }}
                    >
                      Ver Shows
                    </Button>
                    <Button
                      component={Link} 
                      to="/servicios"
                      variant="contained"
                      color="white"
                      size="large"
                      sx={{ fontWeight: 'bold', backgroundColor:"secondary.main" }}
                    >
                      Mis Servicios
                    </Button>
                  </Stack>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};