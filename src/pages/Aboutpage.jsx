// src/pages/AboutPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Stack, List, ListItem, ListItemIcon } from '@mui/material';

// --- 1. IMPORTACIONES DE SWIPER ---
import { Swiper, SwiperSlide } from 'swiper/react';
import { Mousewheel, Pagination, A11y } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

// Fondos e imágenes (se mantienen igual)
import fondoContacto from '../assets/fondo-secundario.jpg';
import isotipoPurpura from '../assets/isotipo-purpura.png';
import iconCorona from '../assets/icon-corona.jpg';
import iconEstrella from '../assets/icon-estrella.jpg';
import iconCorazon from '../assets/icon-corazon.png';

// Los datos de la trayectoria se mantienen igual
const trajectoryItems = {
    "Medios de Comunicación": [
      { text: "Participaciones en Sábados Felices (Canal Caracol), con victoria en uno de los episodios.", icon: iconEstrella },
      { text: "Aparición en Buen Día Colombia (Canal RCN), mostrando versatilidad como comunicador.", icon: iconEstrella },
    ],
    "Liderazgo y Expansión": [
      { text: "Fundador de Comedy Master Bogotá, fomentando la comedia de calidad en el país.", icon: iconCorona },
      { text: "Parte del elenco del club de comedia de Juanpis González en el JP Bar.", icon: iconCorona },
    ],
    "Reconocimiento Internacional": [
      { text: "Presentaciones de stand-up comedy en México, Ecuador y Canadá, actuando también en inglés.", icon: iconCorazon },
    ]
  };

export const AboutPage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoContacto})`,
      backgroundRepeat: 'repeat',
      height: 'calc(100vh - 68px)', // Ocupa toda la altura disponible bajo el navbar
      overflow: 'hidden'
    }}>
      {/* --- 2. CONTENEDOR PRINCIPAL DE SWIPER --- */}
      <Swiper
        direction={'vertical'} // Deslizamiento vertical
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={true} // Permite el control con la rueda del mouse
        pagination={{ clickable: true }} // Activa los puntos de navegación laterales
        modules={[Mousewheel, Pagination, A11y]}
        style={{ height: '100%' }}
      >
        {/* --- SLIDE 1: ¿QUIÉN SOY? --- */}
        <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container maxWidth="md">
            <Card sx={{ borderRadius: 4, p: { xs: 2, md: 3 }, maxHeight: '90vh', overflowY: 'auto' }}>
              <CardContent>
                <Grid container spacing={4} alignItems="center">
                  <Grid item xs={12} md={4} sx={{ textAlign: 'center' }}>
                    <img src={isotipoPurpura} alt="Isotipo de Nicolás Garzón" style={{ maxWidth: '200px', width: '100%', height: 'auto' }} />
                  </Grid>
                  <Grid item xs={12} md={8}>
                    <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 2 }}>
                      ¿Quién Soy?
                    </Typography>
                    <Typography variant="h6" color="primary" fontWeight="600" sx={{ mb: 2 }}>
                      Comediante, Conferencista, Profesional en Finanzas, Empresario y Coach de Vida.
                    </Typography>
                    <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
                      Un profesional versátil que combina experiencia financiera, espíritu emprendedor y carisma como comunicador para impactar diversas audiencias.
                    </Typography>
                    <Typography variant="body1" fontStyle="italic" color="text.secondary">
                      "Mi misión va más allá de las risas: inspirar, motivar y dejar una huella".
                    </Typography>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Container>
        </SwiperSlide>

        {/* --- SLIDE 2: TRAYECTORIA --- */}
        <SwiperSlide style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Container maxWidth="md">
            <Card sx={{ borderRadius: 4, p: { xs: 2, md: 3 }, maxHeight: '90vh', overflowY: 'auto' }}>
              <CardContent>
                <Typography variant="h4" component="h2" fontWeight="bold" sx={{ mb: 3 }}>
                  Trayectoria
                </Typography>
                {Object.entries(trajectoryItems).map(([category, items]) => (
                  <Box key={category} sx={{ mb: 3 }}>
                    <Typography variant="h6" fontWeight="600" color="primary.main">{category}</Typography>
                    <List>
                      {items.map((item, index) => (
                        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                          <ListItemIcon sx={{ minWidth: 44 }}>
                            <img src={item.icon} alt="icon" style={{ width: '32px', height: 'auto' }}/>
                          </ListItemIcon>
                          <Typography variant="body1" color="text.secondary">{item.text}</Typography>
                        </ListItem>
                      ))}
                    </List>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Container>
        </SwiperSlide>
      </Swiper>
    </Box>
  );
};