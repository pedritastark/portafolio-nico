// src/pages/GalleryPage.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, ImageList, ImageListItem, Modal, Fade } from '@mui/material';
import fondoNegro from '../assets/fondo-negro.png';

// --- INICIA LA IMPORTACIÓN DE LAS 42 IMÁGENES ---
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
// --- TERMINA LA IMPORTACIÓN DE LAS 42 IMÁGENES ---

const genericTitle = "Una noche de comedia y grandes momentos.";

// Unimos todas las imágenes importadas en un solo array para usarlo fácilmente
const allImages = [
  show01, show02, show03, show04, show05, show06, show07, show08, show09, show10,
  show11, show12, show13, show14, show15, show16, show17, show18, show19, show20,
  show21, show22, show23, show24, show25, show26, show27, show28, show29, show30,
  show31, show32, show33, show34, show35, show36, show37, show38, show39, show40,
  show41, show42
];

// Patrón de mosaico que se repetirá. Consta de 8 diseños diferentes.
const pattern = [
  { cols: 2, rows: 2 }, // Grande
  { cols: 1, rows: 1 }, // Pequeño
  { cols: 1, rows: 1 }, // Pequeño
  { cols: 2, rows: 1 }, // Rectángulo horizontal
  { cols: 1, rows: 2 }, // Rectángulo vertical
  { cols: 1, rows: 1 }, // Pequeño
  { cols: 2, rows: 2 }, // Grande
  { cols: 2, rows: 1 }, // Rectángulo horizontal
];

// Creamos la lista de datos para la galería dinámicamente
const galleryData = allImages.map((image, index) => ({
  img: image,
  title: genericTitle,
  // Usamos el patrón repetitivo para asignar tamaños
  cols: pattern[index % pattern.length].cols,
  rows: pattern[index % pattern.length].rows,
}));

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
        <Typography variant="h2" component="h1" fontWeight="900" align="center" sx={{ mb: 8 }}>
          ¡Siente la Energía!
        </Typography>

        <ImageList
          sx={{ width: '100%', height: 'auto', overflow: 'hidden' }}
          variant="quilted"
          cols={4} // El collage se basa en una cuadrícula de 4 columnas
          rowHeight={200}
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