// src/pages/ServicesPage.jsx
import React from 'react';
import { Box, Typography, Container, IconButton } from '@mui/material';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

// Componentes e imágenes
import { ServiceCard } from '../components/ServiceCard';
import fondoNegro from '../assets/fondo-negro.png';
import showImage from '../assets/show-image.jpeg';
import conferenciaPositivaImage from '../assets/sabados-felices.jpeg';
import conferenciaFinancieraImage from '../assets/gallery/show-22.jpg';
import hostImage from '../assets/host-image.jpeg';

// Íconos
import iconCorona from '../assets/icon-corona.jpg';
import iconEstrella from '../assets/icon-estrella.jpg';
import iconCorazon from '../assets/icon-corazon.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// Función para crear el enlace de WhatsApp con el mensaje dado
function createWhatsappUrl(message) {
  const phone = '573194914403'; // Reemplaza con el número de WhatsApp real, formato internacional sin +
  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
}

// Dentro de tu archivo src/pages/ServicesPage.jsx

// --- INICIA EL NUEVO BLOQUE DE DATOS CON MENSAJES DE WHATSAPP DETALLADOS ---
const servicesData = [
  {
    image: conferenciaPositivaImage,
    title: "Conferencia: Piensa Positivo y cambia tu vida",
    shortDescription: "Charla interactiva que explora cómo nuestros pensamientos influyen en nuestras emociones y resultados, usando inspiración, ciencia y experiencias reales.",
    benefits: [
      { text: "Activa el poder de la mente para transformar tu vida.", icon: iconEstrella },
      { text: "Energía que contagia y motiva.", icon: iconCorazon },
      { text: "Lleva herramientas concretas, no solo inspiración.", icon: iconCorona },
    ],
    imagePosition: '50% 72%',
    isTop: true,
    whatsappUrl: createWhatsappUrl(`s
¡Hola! Quisiera más información sobre la *Conferencia "Piensa Positivo y cambia tu vida"*. 🧠✨

Me interesa mucho la idea de una charla interactiva que transforma la forma en que enfrentamos la vida. Entiendo que:
- Combina inspiración, ciencia y experiencias reales.
- Demuestra cómo nuestra mentalidad puede cambiarlo todo.
- Es ideal para quienes buscan herramientas para cultivar una actitud positiva y fortalecer la resiliencia.

*Beneficios Clave:*
⚡ Energía que contagia para afrontar retos diarios.
😂 Ríe, reflexiona y cambia: una experiencia divertida y profunda.
🎯 Resultados, no solo inspiración: lleva herramientas concretas para mejorar tu enfoque y decisiones.

*Especificaciones:*
⏱️ Duración: 40-60 min flexibles.
🎤 Requisitos: Sonido, iluminación y escenario (con opción de diapositivas).

¡Espero tu contacto! Gracias.
      `)
  },
  {
    image: showImage,
    title: "Show: Cada Día Más Top",
    shortDescription: "Un show de comedia que convierte desafíos cotidianos en crecimiento y resiliencia a través de historias llenas de humor y reflexión.",
    benefits: [
      { text: "Reducción del estrés y revitalización de la energía.", icon: iconCorazon },
      { text: "Fortalecimiento de relaciones y unión entre equipos.", icon: iconEstrella },
      { text: "Una experiencia memorable que deja una huella positiva.", icon: iconCorona },
    ],
    imagePosition: '50% 23%',
    whatsappUrl: createWhatsappUrl(`
¡Hola! Estoy interesado en el *Show de Stand-Up "Cada Día Más Top"*. 🌟

Me gustaría recibir más información. Por lo que vi, el show:
-  Convierte desafíos cotidianos en oportunidades de crecimiento.
- Fortalece la resiliencia y genera conexiones auténticas.
- Es una terapia emocional completamente adaptable a cualquier evento.

*Beneficios Clave:*
✅ Reducción del estrés y revitalización de la energía.
✅ Fomento de la creatividad y la innovación.
✅ Fortalecimiento de relaciones y equipos.

*Especificaciones:*
⏱️ Duración: 40-60 min flexibles.
🎤 Requisitos: Sonido, iluminación y escenario.

¡Quedo atento a tu respuesta! Gracias.
      `)
  },
  {
    image: conferenciaFinancieraImage,
    title: "Conferencia: La Mente Financiera",
    shortDescription: "Liderada por un experto en Finanzas que, con humor y ejercicios dinámicos, hace que conceptos financieros complejos sean claros y aplicables.",
    benefits: [
      { text: "Aprende finanzas de forma práctica y entretenida.", icon: iconEstrella },
      { text: "Mejora hábitos y gestiona mejor tu dinero.", icon: iconCorona },
      { text: "Combina humor y educación para mantener el interés.", icon: iconCorazon },
    ],
    imagePosition:'50% 50%',
    whatsappUrl: createWhatsappUrl(`
¡Hola! Estoy muy interesado en la *Conferencia Humorística "La Mente Financiera"*. 💰😂

Me encanta la propuesta de mejorar la relación con el dinero a través del humor. Por lo que leí, la conferencia:
- Es liderada por un experto en Finanzas y Comercio Internacional.
- Hace que conceptos financieros complejos sean claros y aplicables.
- Inspira a tomar el control del futuro financiero.

*Beneficios Clave:*
💡 Aprende finanzas personales de forma práctica y entretenida.
🛠️ Descubre herramientas para gestionar dinero y mejorar hábitos.
📈 Fomenta la participación y genera confianza en temas financieros.

*Especificaciones:*
⏱️ Duración: 40-60 min flexibles.
🎤 Requisitos: Sonido, iluminación y escenario.

¡Gracias! Quedo a la espera de más detalles.
      `)
  },
  {
    image: hostImage,
    title: "Presentador de Eventos (Host)",
    shortDescription: "El ingrediente secreto para transformar cualquier ocasión en una experiencia única, memorable y llena de energía.",
    benefits: [
      { text: "Maestro de ceremonias carismático.", icon: iconCorona },
      { text: "Versatilidad para conectar con el público.", icon: iconCorazon },
      { text: "Nivel de inglés para eventos internacionales.", icon: iconEstrella },
    ],
    imagePosition:'50% 70%',
    whatsappUrl: createWhatsappUrl(`
¡Hola, Nico! Me gustaría cotizar tu servicio como *Presentador/Host de eventos*. 🎤🎩

Busco transformar mi evento en una experiencia única y memorable. Me interesa tu perfil por:
- Tu versatilidad como comediante y habilidad para conectar.
- Tu especialidad en crear momentos llenos de energía.
- Tu nivel de inglés para eventos internacionales.

Mi evento es [Dejar espacio para que el cliente escriba].

¡Espero podamos conversar pronto!
      `)
  },
];

const loopedServicesData = [...servicesData, ...servicesData];


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
      <Container maxWidth="lg" sx={{ py: { xs: 1, md: 5 }, position: 'relative' }}>

        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          loop={true}
          slidesPerGroup={1}
          coverflowEffect={{
            rotate: -30,
            stretch: -80,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          modules={[EffectCoverflow, Navigation, A11y]}
          style={{
            '--swiper-pagination-color': '#ffab00',
            '--swiper-pagination-bullet-inactive-color': '#9E9E9E',
          }}
        >
          {loopedServicesData.map((service, index) => (
            <SwiperSlide key={index} style={{ width: '350px', height: 'auto' }}>
              <ServiceCard {...service} />
            </SwiperSlide>
          ))}
        </Swiper>
        
        <Box sx={{ display: { xs: 'none', md: 'block' } }}>
          <IconButton className="swiper-button-prev-custom" sx={{ 
            color: 'primary.main',
            position: 'absolute', 
            left: 40, 
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10 
          }}>
            <ArrowBackIosNewIcon fontSize="large" />
          </IconButton>
          <IconButton className="swiper-button-next-custom" sx={{ 
            color: 'primary.main',
            position: 'absolute', 
            right: 40, 
            top: '50%',
            transform: 'translateY(-50%)',
            zIndex: 10 
          }}>
            <ArrowForwardIosIcon fontSize="large" />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};