import React, { useState, useRef } from 'react';
import { Box, Typography, Button, Stack, Card, CardContent, Container, IconButton } from '@mui/material';
import { Link } from 'react-router-dom';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';

// --- ASSETS ---
// Se han reemplazado las rutas locales con URLs de marcador de posición para la previsualización.
// Descomenta tus imports locales cuando uses este código en tu proyecto.
// import isotipoPurpura from '../assets/isotipo-purpura.png';
// import homeVideo from '../assets/home_video.mp4'; 
// import videoPoster from '../assets/video_poster.jpg';

import isotipoPurpura from '../assets/isotipo-purpura.png';
import homeVideo from '../assets/home_video.mp4';

export const HeroSection = () => {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  // Función para activar/desactivar el sonido del video
  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 2, md: 6 } }}>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: { xs: 'auto', md: 'calc(100vh - 120px)' }, // Ajustado para evitar tocar navbar
      }}>

        {/* --- CARD PRINCIPAL CON VIDEO INTEGRADO --- */}
        <Box sx={{ 
          width: { xs: '100%', md: '70%' }, // Más ancho en PC para acomodar el video
          maxWidth: { md: '800px' } // Limita el ancho máximo en PC
        }}>
          <Card sx={{
            borderRadius: 3,
            backgroundColor: 'background.paper',
            boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
            height: '100%',
            minHeight: { md: '600px' }, // Altura mínima en PC para mejor balance
          }}>
            <CardContent sx={{ 
              p: { xs: 3, md: 6 }, // Más padding en PC
              height: '100%', 
              display: 'flex', 
              flexDirection: 'column', 
              justifyContent: 'center' 
            }}>
              <Stack spacing={3} alignItems="center"> {/* Centrado en ambas versiones */}
                
                <Typography component="h1" fontWeight="900" color="white" sx={{ typography: { xs: 'h4', md: 'h2' }, textAlign: 'center' }}>
                  Nicolás Garzón
                </Typography>

                {/* --- VIDEO INTEGRADO EN LUGAR DEL ISOTIPO --- */}
                <Box sx={{ 
                  width: { xs: '100%', md: '60%' }, // Responsive para el video
                  maxWidth: { xs: '300px', md: '400px' } // Limita el ancho máximo
                }}>
                  <Box sx={{
                    position: 'relative',
                    paddingTop: { xs: '140%', md: '120%' }, // Proporción ajustada
                    borderRadius: 3,
                    overflow: 'hidden',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.7)',
                    backgroundColor: '#000',
                  }}>
                    <video
                      ref={videoRef}
                      style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'contain',
                      }}
                      src={homeVideo}
                      autoPlay
                      muted
                      loop
                      playsInline
                    >
                      Tu navegador no soporta el elemento de video.
                    </video>
                    
                    {/* Botón de control de sonido */}
                    <Box sx={{ position: 'absolute', bottom: '16px', right: '16px' }}>
                      <IconButton 
                        onClick={toggleMute} 
                        sx={{ 
                          backgroundColor: 'rgba(0, 0, 0, 0.5)', 
                          '&:hover': { backgroundColor: 'rgba(0, 0, 0, 0.7)' } 
                        }}
                        aria-label={isMuted ? "Activar sonido" : "Desactivar sonido"}
                      >
                        {isMuted ? <VolumeOffIcon sx={{ color: 'white' }} /> : <VolumeUpIcon sx={{ color: 'white' }} />}
                      </IconButton>
                    </Box>
                  </Box>
                </Box>
                
                <Typography variant="h6" color="secondary.main" sx={{ textAlign: 'center', pb: 1, fontFamily: 'Montserrat', fontWeight: '700' }}>
                  Comediante | Conferencista | Coach | Presentador | Financiero
                </Typography>

                <Typography variant="body1" color="text.secondary" sx={{ my: 2, textAlign: 'center', fontSize: { xs: '1rem', md: '1.1rem' } }}>
                  "La comedia y el stand-up son mi esencia, y me alegra saber que mi misión va más allá de las risas: inspirar, motivar y dejar una huella, eso me hace feliz".
                </Typography>

                <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                  <Stack direction="row" spacing={3} sx={{ pt: 2 }}>
                    <Button component={Link} to="/taller-mas-risas-menos-miedos" variant="contained" color="primary" size="large" sx={{ fontWeight: 'bold' }}>
                      Ver Talleres
                    </Button>
                    <Button component={Link} to="/servicios" variant="contained" color="secondary" size="large" sx={{ fontWeight: 'bold', color: 'black' }}>
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

