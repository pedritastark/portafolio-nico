// src/pages/GalleryPage.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, ImageList, ImageListItem, Modal, Fade } from '@mui/material';
import fondoNegro from '../assets/fondo-negro.png';
import beYourselfImg from '../assets/be-yourself.png';

// --- IMPORTACIÓN DE LAS 42 IMÁGENES ---
// (Las importaciones se mantienen igual)
import show01 from '../assets/gallery/show-01.jpg';
import show02 from '../assets/gallery/show-02.jpg';
import show03 from '../assets/gallery/show-03.jpg';
import show04 from '../assets/gallery/show-04.jpg';
import show05 from '../assets/gallery/show-05.jpg';
import show06 from '../assets/gallery/show-06.jpg';
import show07 from '../assets/gallery/show-07.jpg';
import show08 from '../assets/gallery/show-08.jpg';
import show09 from '../assets/gallery/show-09.jpg';
import show10 from '../assets/gallery/show-10.jpg';
import show11 from '../assets/gallery/show-11.jpg';
import show12 from '../assets/gallery/show-12.jpg';
import show13 from '../assets/gallery/show-13.jpg';
import show14 from '../assets/gallery/show-14.jpg';
import show15 from '../assets/gallery/show-15.jpg';
import show16 from '../assets/gallery/show-16.jpg';
import show17 from '../assets/gallery/show-17.jpg';
import show18 from '../assets/gallery/show-18.jpg';
import show19 from '../assets/gallery/show-19.jpg';
import show20 from '../assets/gallery/show-20.jpg';
import show21 from '../assets/gallery/show-21.jpg';
import show22 from '../assets/gallery/show-22.jpg';
import show23 from '../assets/gallery/show-23.jpg';
import show24 from '../assets/gallery/show-24.jpg';
import show25 from '../assets/gallery/show-25.jpg';
import show26 from '../assets/gallery/show-26.jpg';
import show27 from '../assets/gallery/show-27.jpg';
import show28 from '../assets/gallery/show-28.jpg';
import show29 from '../assets/gallery/show-29.jpg';
import show30 from '../assets/gallery/show-30.jpg';
import show31 from '../assets/gallery/show-31.jpg';
import show32 from '../assets/gallery/show-32.jpg';
import show33 from '../assets/gallery/show-33.jpg';
import show34 from '../assets/gallery/show-34.jpg';
import show35 from '../assets/gallery/show-35.jpg';
import show36 from '../assets/gallery/show-36.jpg';
import show37 from '../assets/gallery/show-37.jpg';
import show38 from '../assets/gallery/show-38.jpg';
import show39 from '../assets/gallery/show-39.jpg';
import show40 from '../assets/gallery/show-40.jpg';
import show41 from '../assets/gallery/show-41.jpg';
import show42 from '../assets/gallery/show-42.jpg';

// --- DATOS DE LA GALERÍA CON ORDEN MEZCLADO Y DESCRIPCIONES PERSONALIZADAS ---
const galleryData = [
  // Bloque 1
  { img: show01, title: 'Apuntando a nuevas metas y conectando con el público en cada show.', cols: 2, rows: 2 },
  { img: show21, title: 'En el escenario principal, conectando con miles de personas. La energía de un gran festival.' },
  { img: show09, title: 'Cada gesto cuenta. Preparado para guiar al público a través de una historia llena de risas.' },
  { img: show37, title: 'Casa llena en Guadalupe Bar. La energía del público es el motor de cada show.', cols: 2 },
  
  // Bloque 2
  { img: show11, title: 'Llevando la comedia a nuevas alturas. Una actuación llena de energía y pasión por hacer reír.', cols: 2, rows: 2 },
  { img: show35, title: 'En el set de "Sábados Felices", un escenario que es parte de la historia del humor en Colombia.' },
  { img: show20, title: 'La comedia en cualquier lugar. Un momento de pausa y estilo en la ciudad.' },
  
  // Bloque 3
  { img: show40, title: "Bajo mi propia luz. 'Be Yourself' no es solo un lema, es la esencia de mi comedia.", cols: 2 },
  { img: show05, title: '¡La comedia en su máxima expresión! Un instante de pura energía y conexión.', cols: 2, rows: 2 },
  
  // Bloque 4
  { img: show14, title: '¿Y ahora qué sigue? Un gesto de comedia que invita a la reflexión y a la siguiente carcajada.' },
  { img: show18, title: 'Detrás del escenario, segundos antes de salir a escena. La calma antes de la energía del show.' },
  { img: show22, title: 'El mundo de las finanzas en acción. Combinando la pasión por los mercados con la comunicación efectiva.', cols: 2 },
  
  // Bloque 5
  { img: show33, title: 'Noches de stand-up en "El Berraco". Historias y risas bajo las luces de neón.', cols: 2, rows: 2 },
  { img: show02, title: 'La energía de la comedia en primer plano, compartiendo una historia y buscando la próxima carcajada.' },
  { img: show24, title: 'Bajo el foco, en la intimidad del escenario. Un momento de reflexión y comedia pura.' },

  // Bloque 6
  { img: show26, title: 'Apuntando alto en la UEMC. La formación y la comedia como pilares del crecimiento.', cols: 2, rows: 2 },
  { img: show38, title: 'Compartiendo escenario y risas con grandes colegas en el JP Club. La comedia es una familia.', cols: 2 },
  
  // Bloque 7
  { img: show07, title: 'Estilo y comedia. Una pose relajada antes de subir al escenario para entregar lo mejor.' },
  { img: show31, title: 'Explorando la comedia desde su raíz. Un momento de conexión genuina y vulnerabilidad en el escenario.' },
  { img: show42, title: 'Presentando el XVI Aniversario de JINEN. Llevando energía y humor a eventos corporativos.', cols: 2 },
  
  // Bloque 8
  { img: show10, title: 'Disfrutando el momento, compartiendo una sonrisa. La comedia es una celebración.', rows: 2, cols: 2 },
  { img: show25, title: "Listo para el debate en 'Colombia Decide 2023'. Llevando una perspectiva fresca a temas de importancia nacional." },
  { img: show16, title: 'Un instante de concentración, puliendo cada detalle antes de entregar la punchline.' },
  
  // Bloque 9
  { img: show39, title: '¡Pura energía y buena vibra en el set! Disfrutando cada segundo en uno de los escenarios más icónicos.', cols: 2 },
  { img: show03, title: 'Un momento de concentración e inspiración, preparando el remate perfecto para el público.', rows: 2, cols: 2 },

  // Bloque 10
  { img: show28, title: 'La risa es contagiosa. Un instante de pura diversión y goce en medio del show.' },
  { img: show34, title: 'Rodeado de logros. Cada trofeo, un recordatorio del poder de la comunicación.', cols: 2 },
  { img: show41, title: "Creando contenido y compartiendo el mensaje de 'Be Yourself' en el set." },
  
  // Bloque 11
  { img: show06, title: 'A veces, el mejor chiste es el que se cuenta con una pausa. Una mirada de complicidad y humor.' },
  { img: show13, title: 'Con estilo y precisión, ajustando cada detalle para entregar un mensaje claro y divertido.', cols: 2, rows: 2 },
  { img: show19, title: 'Una mirada de complicidad y humor, ofreciendo el micrófono como una invitación a unirse a la diversión.' },

  // Bloque 12
  { img: show32, title: '¿Ya es hora de las risas? Encontrando el humor en cada rincón y momento.', cols: 2 },
  { img: show17, title: 'Compartiendo una anécdota. La comedia se disfruta más cuando nace de una buena historia.' },
  { img: show30, title: 'Te entrego el poder de la risa. Una invitación a unirte a una experiencia llena de energía y buen humor.' },
  { img: show29, title: 'El humor en la calle. Encontrando la comedia en los espacios cotidianos de la ciudad.', cols: 2, rows: 2 },
  { img: show08, title: 'Con la comedia como mi herramienta, apuntando a transformar la noche en una experiencia única.' },
  { img: show23, title: 'Expandiendo horizontes en la Universidad Europea Miguel de Cervantes. Formación internacional para un impacto global.' },
  { img: show27, title: '¿Será este el chiste correcto? Un momento de duda cómica y complicidad con el público.' },
  { img: show15, title: 'Conectando con la audiencia, preparando el momento. Cada palabra cuenta para construir el chiste perfecto.' },
  { img: show04, title: 'Señalando directamente a la diversión. Una invitación a ver el mundo desde una perspectiva más cómica.' },
];


export const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <Box sx={{
      backgroundImage: `url(${fondoNegro})`,
      backgroundRepeat: 'repeat',
      color: 'white',
      minHeight: 'calc(100vh - 68px)',
      py: { xs: 5, md: 8 },
    }}>
      <Container maxWidth="lg">
        {/* Reemplazar el título de texto por la imagen be-yourself.png */}
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 2 }}>
          <img
            src={beYourselfImg}
            alt="Be Yourself!"
            style={{ maxWidth: '620px', width: '100%', height: 'auto', display: 'block' }}
          />
        </Box>

        <ImageList
          sx={{ width: '100%', height: 'auto', overflow: 'hidden' }}
          variant="quilted"
          cols={4}
          rowHeight={220}
        >
          {galleryData.map((item) => (
            <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}
              onClick={() => handleOpen(item)}
              sx={{
                cursor: 'pointer',
                '& .MuiImageListItem-img': {
                  transition: 'transform 0.4s ease-in-out !important',
                },
                '&:hover .MuiImageListItem-img': {
                  transform: 'scale(1.05)',
                },
              }}
            >
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </ImageListItem>
          ))}
        </ImageList>
      </Container>

      <Modal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}
      >
        <Fade in={open} timeout={500}>
          <Box sx={{
            outline: 'none',
            p: 2,
            backgroundColor: 'background.paper',
            borderRadius: 2,
            boxShadow: 24,
            maxWidth: '90vw',
            maxHeight: '90vh',
          }}>
            <img src={selectedImage?.img} alt={selectedImage?.title} style={{ width: 'auto', height: 'auto', maxWidth: '100%', maxHeight: 'calc(90vh - 70px)', display: 'block' }} />
            <Typography variant="body1" sx={{ mt: 2, display: 'block', textAlign: 'center' }}>
              {selectedImage?.title}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};