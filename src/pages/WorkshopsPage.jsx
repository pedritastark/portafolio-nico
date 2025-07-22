// src/pages/WorkshopsPage.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, Button, List, ListItem, ListItemIcon, Tabs, Tab, Fade } from '@mui/material';

// Fondos, Íconos e Imágenes
import fondoPrincipal from '../assets/fondo-secundario.jpg';
import iconCorona from '../assets/icon-corona.jpg';
import iconEstrella from '../assets/icon-estrella.jpg';
import iconCorazon from '../assets/icon-corazon.png';
import tallerComediaImg from '../assets/gallery/show-31.jpg';
import tallerFinanzasImg from '../assets/gallery/show-22.jpg';
import tallerVozImg from '../assets/gallery/show-01.jpg';

// Lógica de WhatsApp
const phoneNumber = '573194914403';
const createWhatsappUrl = (message) => `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

const workshopsData = [
    {
        image: tallerVozImg,
        title: "¡Tu Voz, Tu Poder!",
        subtitle: "Taller de Habla en Público",
        description: "Diseñado para darte las técnicas, herramientas y estrategias necesarias para convertirte en un comunicador poderoso, ya sea frente a un público grande o en conversaciones uno a uno.",
        benefits: [
            { text: "Expresa tus ideas con claridad, confianza y autenticidad.", icon: iconEstrella },
            { text: "Supera el miedo escénico y gana seguridad al expresarte.", icon: iconCorona },
            { text: "Conecta e inspira a tu audiencia con empatía y carisma.", icon: iconCorazon },
        ],
        whatsappMessage: createWhatsappUrl("¡Hola! Me interesa el taller '¡Tu Voz, Tu Poder!' para mejorar mis habilidades de comunicación 🗣️. ¿Podrías darme más detalles?"),
    },
    {
        image: tallerComediaImg,
        title: "¡Más gracioso que ayer!",
        subtitle: "Taller de Stand-up Comedy",
        description: "Aprende las bases del stand-up y descubre cómo aplicar el humor de forma estratégica para potenciar tu carisma y generar un impacto positivo.",
        benefits: [
            { text: "Domina la construcción de chistes.", icon: iconEstrella },
            { text: "Convierte experiencias en historias divertidas.", icon: iconCorazon },
            { text: "Aplica el humor para conectar y destacar.", icon: iconCorona },
        ],
        whatsappMessage: createWhatsappUrl("¡Hola! Estoy interesado en el taller de Stand-up Comedy '¡Más gracioso que ayer!' 🎤. Me gustaría saber más."),
    },
    {
        image: tallerFinanzasImg,
        title: "¡Tu dinero, tus reglas!",
        subtitle: "Taller de Finanzas Personales",
        description: "Obtén herramientas prácticas para gestionar tus recursos, tomar mejores decisiones financieras y planificar con visión a largo plazo.",
        benefits: [
            { text: "Crea un presupuesto práctico y realista.", icon: iconCorazon },
            { text: "Desarrolla estrategias para eliminar deudas.", icon: iconEstrella },
            { text: "Aprende a invertir de forma inteligente.", icon: iconCorona },
        ],
        whatsappMessage: createWhatsappUrl("¡Hola! Quisiera más información sobre el taller de Finanzas Personales '¡Tu dinero, tus reglas!' 💰."),
    },
];

export const WorkshopsPage = () => {
    const [activeTab, setActiveTab] = useState(0);

    const handleTabChange = (event, newValue) => {
        setActiveTab(newValue);
    };

    const activeWorkshop = workshopsData[activeTab];

    return (
        <Box sx={{
            backgroundImage: `url(${fondoPrincipal})`,
            backgroundRepeat: 'repeat',
            color: 'white',
            minHeight: 'calc(100vh - 68px)',
            py: { xs: 5, md: 8 },
        }}>
            <Container maxWidth="md">
   

                <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 5 }}>
                    <Tabs
                        value={activeTab}
                        onChange={handleTabChange}
                        centered
                        variant="fullWidth"
                        textColor="#FFEECC"
                        indicatorColor="#FFEECC"
                    >
                        {workshopsData.map((workshop, index) => (
                            <Tab
                                key={index}
                                label={workshop.title}
                                sx={{
                                    color: 'white',
                                    fontWeight: 'bold',
                                    '&.Mui-selected': {
                                        color: '#fcc75b', 
                                    },
                                }}
                            />
                        ))}
                    </Tabs>
                </Box>

                <Fade in={true} key={activeTab}>
                    <Box>
                        {/* --- CAMBIO AQUÍ: Se añade 'justifyContent="center"' al Grid --- */}
                        <Grid container spacing={6} alignItems="center" justifyContent="center">
                            <Grid item xs={12} md={6}>
                                <Card sx={{
                                    borderRadius: 3,
                                    boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
                                    height: { xs: 'auto', md: 450 }
                                }}>
                                    <CardMedia
                                        component="img"
                                        image={activeWorkshop.image}
                                        alt={activeWorkshop.title}
                                        sx={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </Card>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h5" color="secondary.main" fontWeight="600">{activeWorkshop.subtitle}</Typography>
                                <Typography variant="h3" component="h2" fontWeight="bold" sx={{ mt: 1, mb: 3 }}>{activeWorkshop.title}</Typography>
                                <Typography variant="body1" sx={{ mb: 3, color: 'text.primary' }}>{activeWorkshop.description}</Typography>
                                <List>
                                    {activeWorkshop.benefits.map((benefit, index) => (
                                        <ListItem key={index} disablePadding sx={{ mb: 1 }}>
                                            <ListItemIcon sx={{ minWidth: 44 }}>
                                                <img src={benefit.icon} alt="icon" style={{ width: '32px', height: 'auto' }}/>
                                            </ListItemIcon>
                                            <Typography variant="body1" sx={{ color: 'text.primary' }}>{benefit.text}</Typography>
                                        </ListItem>
                                    ))}
                                </List>
                                <Button
                                    component="a" href={activeWorkshop.whatsappMessage} target="_blank" rel="noopener noreferrer"
                                    variant="contained" color="primary" size="large" sx={{ mt: 3, fontWeight: 'bold' }}
                                >
                                    Me Interesa
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
};