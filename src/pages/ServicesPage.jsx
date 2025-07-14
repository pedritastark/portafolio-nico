// src/pages/ServicesPage.jsx
import React from 'react';
import { Box, Typography, Container } from '@mui/material';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Componentes e imágenes
import { ServiceCard } from '../components/ServiceCard';
import fondoNegro from '../assets/fondo-negro.png';

// Fotos principales para las tarjetas
import showImage from '../assets/show-image.jpeg';
import conferenciaImage from '../assets/conferencia-image.jpeg';
import hostImage from '../assets/host-image.jpeg';

// Íconos 3D para las viñetas
import iconCorona from '../assets/icon-corona.jpg';
import iconEstrella from '../assets/icon-estrella.jpg';
import iconCorazon from '../assets/icon-corazon.png';

// Datos limpios, sin citas ni artefactos
const servicesData = [
  {
    image: showImage,
    title: "Show de Stand-Up Comedy",
    shortDescription: "Un show para convertir desafíos en humor y fortalecer la resiliencia, generando conexiones auténticas.",
    benefits: [
      { text: "Reducción del estrés y revitalización de la energía.", icon: iconCorazon },
      { text: "Fomento de la creatividad y la innovación.", icon: iconEstrella },
      { text: "Creación de un ambiente positivo y motivador.", icon: iconCorona },
    ],
    imagePosition: 'center top'
  },
  {
    image: conferenciaImage,
    title: "Conferencias de Alto Impacto",
    shortDescription: "Charlas interactivas sobre finanzas y mentalidad positiva con un toque de humor, para que entiendas conceptos complejos de forma aplicable.",
    benefits: [
      { text: "Aprende finanzas de forma práctica y clara.", icon: iconEstrella },
      { text: "Combina humor y educación para mantener el interés.", icon: iconCorona },
      { text: "Genera confianza en temas financieros.", icon: iconCorazon },
    ]
  },
  {
    image: hostImage,
    title: "Presentador de Eventos (Host)",
    shortDescription: "Transformo cualquier ocasión en una experiencia memorable y llena de energía, con versatilidad para conectar con todo tipo de público.",
    benefits: [
      { text: "Anfitrión que mantiene a la audiencia cautivada.", icon: iconCorona },
      { text: "Adaptabilidad a eventos corporativos y sociales.", icon: iconEstrella },
      { text: "Garantía de una experiencia única e irrepetible.", icon: iconCorazon },
    ]
  },
];

export const ServicesPage = () => {
  return (
    <Box sx={{
      backgroundImage: `url(${fondoNegro})`,
      backgroundRepeat: 'repeat',
      color: 'white',
      minHeight: 'calc(100vh - 68px)',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
    }}>
      <Container maxWidth="lg" sx={{ py: 5 }}>
        <Typography variant="h2" component="h1" fontWeight="900" align="center" sx={{ mb: 8 }}>
          Mis Servicios
        </Typography>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          modules={[EffectCoverflow, Pagination, Navigation]}
        >
          {servicesData.map((service, index) => (
            <SwiperSlide key={index} style={{ width: '350px', height: 'auto', paddingBottom: '50px' }}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </Box>
  );
};