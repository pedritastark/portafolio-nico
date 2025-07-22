// src/components/HeroSection.jsx
import React from 'react';
import { Box, Typography, Button, Stack, Card, CardContent, Container } from '@mui/material';
import { Link } from 'react-router-dom';

export const HeroSection = () => {
  // --- CAMBIO AQUÍ: Pega la URL de "Incorporar" de tu video de YouTube ---
  const videoEmbedUrl = "https://www.youtube.com/embed/8CHdR1hhMBQ&t=4s"; // Reemplaza VIDEO_ID_AQUI

  return (
    <Container maxWidth="lg">
      <Box sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' }, 
        alignItems: 'center',
        gap: 5,
      }}>

        {/* --- COLUMNA 1: VIDEO PLAYER --- */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          {/* Este Box crea un contenedor responsivo con aspecto 16:9 para el video */}
          <Box sx={{
            position: 'relative',
            paddingTop: '56.25%', // Proporción 16:9 (9 / 16 = 0.5625)
            borderRadius: 3,
            overflow: 'hidden',
            boxShadow: '0 10px 40px rgba(0,0,0,0.7)',
          }}>
            <iframe
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                border: 0,
              }}
              src={videoEmbedUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Box>
        </Box>

        {/* --- COLUMNA 2: CARD DE TEXTO (Se mantiene igual) --- */}
        <Box sx={{ width: { xs: '100%', md: '50%' } }}>
          <Card sx={{
            borderRadius: 3,
            backgroundColor: 'background.paper',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            height: '100%',
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
                  variant="h6"
                  color="secondary.main"
                  sx={{
                    textAlign: { xs: 'center', md: 'left' },
                    pb: 1,
                    fontFamily: 'Montserrat',
                    fontWeight: '700'
                  }}
                >
                  Comediante | Conferencista | Coach | Presentador | Financiero
                </Typography>

                <Typography
                  variant="body1"
                  color="text.secondary"
                  sx={{ my: 2, textAlign: { xs: 'center', md: 'left' }, fontSize: '1rem' }}
                >
                  "La comedia y el stand-up son mi esencia, y me alegra saber que
                    mi misión va más allá de las risas: inspirar, motivar y dejar una
                    huella, eso me hace feliz".
                </Typography>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                  <Stack direction="row" spacing={2} sx={{ pt: 2 }}>
                    <Button
                      component={Link}
                      to="/talleres" // Corregido para apuntar a talleres
                      variant="contained"
                      color="primary"
                      size="large"
                      sx={{ fontWeight: 'bold' }}
                    >
                      Ver Talleres
                    </Button>
                    <Button
                      component={Link} 
                      to="/servicios"
                      variant="contained"
                      color="secondary" // Cambiado para que use el color dorado
                      size="large"
                      sx={{ fontWeight: 'bold', color: 'black' }}
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