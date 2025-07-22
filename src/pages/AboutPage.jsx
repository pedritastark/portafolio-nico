// src/pages/AboutPage.jsx
import React from 'react';
import { Box, Typography, Container, Grid, Card, CardContent, Stack, List, ListItem, ListItemIcon } from '@mui/material';

// Fondos e imágenes
import fondoSecundario from '../assets/fondo-secundario.jpg';
import isotipoPurpura from '../assets/isotipo-purpura.png';
import iconCorona from '../assets/icon-corona.jpg';
import iconEstrella from '../assets/icon-estrella.jpg';
import iconCorazon from '../assets/icon-corazon.png';

// Datos de Trayectoria (la estructura de datos ya es perfecta para esto)
const trajectoryData = {
  "Apariciones en Medios de Comunicación": [
    { text: "Distintas participaciones en Sábados Felices (Canal Caracol), destacándome con la victoria en uno de los episodios.", icon: iconEstrella },
    { text: "Participación especial en Buen Día Colombia (Canal RCN), mostrando mi versatilidad como comunicador.", icon: iconEstrella },
    { text: "Invitado en las noches de comedia de Radio 1, llevando entretenimiento y humor al formato radial.", icon: iconEstrella },
  ],
  "Liderazgo y Expansión de la Comedia en Colombia": [
    { text: "Fundador de Comedy Master Bogotá, un club que fomenta la comedia de calidad, llevando espectáculos a múltiples ciudades y regiones del país.", icon: iconCorona },
    { text: "Hice parte del elenco del prestigioso club de comedia de Juanpis González en el JP Bar.", icon: iconCorona },
    { text: "Participante en festivales de talla internacional compartiendo escenario con artistas como 'Ventino' y 'Cali y el Dandee'.", icon: iconCorona },
  ],
  "Reconocimiento Internacional": [
    { text: "Presentaciones internacionales de stand-up comedy en países como España, México, Ecuador y Canadá.", icon: iconCorazon },
    { text: "Demostrando versatilidad al actuar en distintas audiencias y en distintos idiomas (Inglés).", icon: iconCorazon },
  ],
  "Experiencia en Shows Corporativos": [
    { text: "Amplia trayectoria en espectáculos adaptados a contextos empresariales, ajustándome a las necesidades y objetivos de cada evento.", icon: iconEstrella },
  ],
  "Formación y Coaching": [
    { text: "Certificación como coach de vida, combinando humor y desarrollo personal para inspirar y motivar.", icon: iconCorazon },
    { text: "Profesional en Finanzas y comercio internacional con MBA.", icon: iconCorona },
  ]
};

export const AboutPage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoSecundario})`,
      backgroundRepeat: 'repeat',
      color: 'black',
      py: { xs: 5, md: 8 },
    }}>
      <Container maxWidth="md">
        <Stack spacing={5}>
          {/* --- CARD 1: ¿QUIÉN SOY? (Se mantiene igual) --- */}
          <Card sx={{ borderRadius: 4, p: { xs: 2, md: 4 } }}>
            <CardContent>
              <Stack spacing={3} alignItems="center">
                <Box
                  component="img"
                  src={isotipoPurpura}
                  alt="Isotipo de Nicolás Garzón"
                  sx={{
                    width: { xs: 150, md: 200 },
                    height: 'auto',
                  }}
                />
                <Typography variant="h4" component="h2" fontWeight="bold" textAlign="center">
                  ¿Quién Soy?
                </Typography>
                <Typography variant="h6" color="primary" fontWeight="600" textAlign="center">
                  Comediante, Conferencista, Profesional en Finanzas, Empresario y Coach de Vida.
                </Typography>
                <Typography variant="body1" color="text.secondary" textAlign="center" sx={{ maxWidth: '600px' }}>
                  Soy un profesional versátil que combina experiencia financiera, espíritu emprendedor y carisma como comunicador para impactar diversas audiencias.
                </Typography>
                <Typography variant="body1" fontStyle="italic" color="text.secondary" textAlign="center" sx={{ maxWidth: '600px' }}>
                  "La comedia y el stand-up son mi esencia, y me alegra saber que mi misión va más allá de las risas: inspirar, motivar y dejar una huella".
                </Typography>
              </Stack>
            </CardContent>
          </Card>

          {/* --- SECCIÓN DE TRAYECTORIA (NUEVA ESTRUCTURA) --- */}
          <Box>
            {/* 1. Título principal fuera de las tarjetas */}
            <Typography variant="h3" component="h2" fontWeight="900" align="center" sx={{ color: 'white', mb: 4 }}>
              Trayectoria
            </Typography>
            {/* 2. Grid que contendrá una tarjeta por cada categoría */}
            <Grid container spacing={4}>
              {Object.entries(trajectoryData).map(([category, items]) => (
                // Lógica responsiva: En móvil 1 columna, en tablet/desktop 2 columnas
                <Grid item xs={12} sm={6} key={category}>
                  <Card sx={{ borderRadius: 3, p: 2, height: '100%' }}>
                    <CardContent>
                      <Typography variant="h5" fontWeight="bold" color="primary.main" sx={{ mb: 2 }}>
                        {category}
                      </Typography>
                      <List>
                        {items.map((item, index) => (
                          <ListItem key={index} disablePadding sx={{ mb: 1.5 }}>
                            <ListItemIcon sx={{ minWidth: 44 }}>
                              <img src={item.icon} alt="icon" style={{ width: '32px', height: 'auto' }} />
                            </ListItemIcon>
                            <Typography variant="body1" color="text.secondary">{item.text}</Typography>
                          </ListItem>
                        ))}
                      </List>
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