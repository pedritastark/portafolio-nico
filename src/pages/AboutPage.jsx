// src/pages/AboutPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Stack, List, ListItem, ListItemIcon } from '@mui/material';

// Fondos e imágenes
import fondoContacto from '../assets/fondo-secundario.jpg';
import isotipoPurpura from '../assets/isotipo-purpura.png';
import iconCorona from '../assets/icon-corona.jpg';
import iconEstrella from '../assets/icon-estrella.jpg';
import iconCorazon from '../assets/icon-corazon.png';

// Datos para la cuadrícula de Trayectoria
const trajectoryItems = [
  { text: "Participaciones en Sábados Felices (Canal Caracol), con victoria en uno de los episodios.", icon: iconEstrella },
  { text: "Aparición en Buen Día Colombia (Canal RCN), mostrando versatilidad como comunicador.", icon: iconEstrella },
  { text: "Fundador de Comedy Master Bogotá, fomentando la comedia de calidad en el país.", icon: iconCorona },
  { text: "Parte del elenco del club de comedia de Juanpis González en el JP Bar.", icon: iconCorona },
  { text: "Presentaciones de stand-up comedy en México, Ecuador y Canadá.", icon: iconCorazon },
  { text: "Demostrando versatilidad al actuar también en inglés.", icon: iconCorazon },
];

export const AboutPage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoContacto})`,
      backgroundRepeat: 'repeat',
      color: 'black',
      py: { xs: 5, md: 8 },
    }}>
      <Container maxWidth="md">
        <Stack spacing={5}>
          {/* --- CARD 1: ¿QUIÉN SOY? (CON EL ISOTIPO RESTAURADO) --- */}
          <Card sx={{ borderRadius: 4, p: { xs: 2, md: 3 } }}>
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
                    Soy un profesional versátil que combina experiencia financiera, espíritu emprendedor y carisma como comunicador para impactar diversas audiencias.
                  </Typography>
                  <Typography variant="body1" fontStyle="italic" color="text.secondary">
                    "La comedia y el stand-up son mi esencia, y me alegra saber que mi misión va más allá de las risas: inspirar, motivar y dejar una huella".
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>

          {/* --- SECCIÓN DE TRAYECTORIA CON GRID DE CARDS (SE MANTIENE IGUAL) --- */}
          <Box>
            <Typography variant="h3" component="h2" fontWeight="900" align="center" sx={{ mb: 4 }}>
              Trayectoria Destacada
            </Typography>
            <Grid container spacing={3}>
              {trajectoryItems.map((item, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Card sx={{ 
                    borderRadius: 3, 
                    height: '100%', 
                    display: 'flex', 
                    flexDirection: 'column',
                    textAlign: 'center',
                    p: 2
                  }}>
                    <CardContent>
                      <img src={item.icon} alt="icon" style={{ width: '60px', height: 'auto', marginBottom: '16px' }}/>
                      <Typography variant="body1" color="text.secondary">
                        {item.text}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};