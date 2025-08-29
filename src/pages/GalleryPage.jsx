import React, { useEffect, useState } from 'react';
import { Box, Typography, Container, ImageList, ImageListItem, Modal, Fade } from '@mui/material';

// --- ASSETS LOCALES ---
import fondoNegro from '../assets/fondo-negro.png';
import beYourselfImg from '../assets/be-yourself.png';

// --- IMPORTACIÓN DE LAS 21 IMÁGENES SELECCIONADAS ---
import show01 from '../assets/gallery/show-01.jpg';
import show11 from '../assets/gallery/show-11.jpg';
import show14 from '../assets/gallery/show-14.jpg';
import show17 from '../assets/gallery/show-17.jpg';
import show18 from '../assets/gallery/show-18.jpg';
import show20 from '../assets/gallery/show-20.jpg';
import show21 from '../assets/gallery/show-21.jpg';
import show22 from '../assets/gallery/show-22.jpg';
import show24 from '../assets/gallery/show-24.jpg';
import show25 from '../assets/gallery/show-25.jpg';
import show26 from '../assets/gallery/show-26.jpg';
import show28 from '../assets/gallery/show-28.jpg';
import show30 from '../assets/gallery/show-30.jpg';
import show31 from '../assets/gallery/show-31.jpg';
import show33 from '../assets/gallery/show-33.jpg';
import show34 from '../assets/gallery/show-34.jpg';
import show35 from '../assets/gallery/show-35.jpg';
import show37 from '../assets/gallery/show-37.jpg';
import show38 from '../assets/gallery/show-38.jpg';
import show40 from '../assets/gallery/show-40.jpg';
import show42 from '../assets/gallery/show-42.jpg';


// --- DATOS DE LA GALERÍA CON ORDEN Y TAMAÑOS AJUSTADOS PARA IMPACTO ---
const galleryData = [
  // Bloque 1: Impacto inicial
  { img: show40, title: "Bajo la luz de 'Be Yourself'.", cols: 2, rows: 2 },
  { img: show21, title: 'Energía de festival en el escenario.' },
  { img: show01, title: 'Conectando con el público.', cols: 1, rows: 2 },

  // Bloque 2: Variedad de escenarios
  { img: show30, title: 'Casa llena en Guadalupe Bar.', cols: 2, rows: 2 },
  { img: show26, title: 'Formación en la UEMC.' },
  { img: show35, title: "En el set de 'Sábados Felices'." },
  
  // Bloque 3: Momentos de interacción
  { img: show11, title: 'Comedia a nuevas alturas.' },
  { img: show28, title: 'La risa es contagiosa.', cols: 2 },
  { img: show31, title: 'Comedia desde la raíz.' },
  
  // Bloque 4: Eventos y comunidad
  { img: show24, title: 'Bajo el foco del escenario.' },
  { img: show42, title: 'Presentando en el Aniversario JINEN.', cols: 2 },
  { img: show38, title: 'Noche de comedia en JP Club.' },

  // Bloque 5: Estilo y facetas únicas
  { img: show18, title: 'Segundos antes de salir a escena.', cols: 2 },
  { img: show22, title: 'Finanzas y comunicación en acción.', cols: 2, rows: 2 },
  { img: show20, title: 'Pausa y estilo en la ciudad.' },

  // Bloque 6: Más actuaciones y logros
  { img: show14, title: 'Un gesto de comedia.' },
  { img: show25, title: "Debate en 'Colombia Decide 2023'." },
  { img: show34, title: 'Rodeado de logros.', cols: 2 },
  { img: show17, title: 'Contando una buena historia.' },
];


const PolaroidCard = ({ item, style, onClick }) => (
  <div style={style} className="polaroid-card" onClick={() => onClick(item)}>
    <img src={item.img} alt={item.title} className="polaroid-img" />
    <p className="polaroid-caption">{item.title}</p>
  </div>
);

// --- Componente Principal: GalleryPage ---
export const GalleryPage = () => {
  const [open, setOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [styledItems, setStyledItems] = useState([]);

  useEffect(() => {
    // Añadimos una rotación aleatoria a cada imagen solo una vez.
    const itemsWithStyles = galleryData.map(item => {
      const rotation = Math.random() * 20 - 10; // Rotación entre -10 y 10 grados
      return { ...item, rotation };
    });
    setStyledItems(itemsWithStyles);
  }, []);

  const handleOpen = (image) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedImage(null);
  };

  return (
    <>
      <style>{`
        .gallery-container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          padding: 2rem;
          min-height: 100vh;
          background-color: #1a1a1a;
          overflow: hidden;
        }
        .polaroid-card {
          background-color: #fff;
          padding: 1rem;
          padding-bottom: 4rem;
          box-shadow: 0 10px 20px rgba(0,0,0,0.3);
          position: relative;
          cursor: pointer;
          transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
        }
        .polaroid-card:hover {
          transform: scale(1.05) rotate(0deg) !important;
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
          z-index: 10;
        }
        .polaroid-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }
        .polaroid-caption {
          position: absolute;
          bottom: 1rem;
          left: 1rem;
          right: 1rem;
          text-align: center;
          font-family: 'Caveat', cursive; /* Una fuente tipo manuscrita */
          font-size: 1.2rem;
          color: #333;
        }
        /* Estilos para el Modal */
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.85);
          display: flex;
          justify-content: center;
          align-items: center;
          z-index: 1000;
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .modal-overlay.open {
          opacity: 1;
        }
        .modal-content {
          background-color: #fff;
          padding: 1.5rem;
          border-radius: 8px;
          max-width: 90vw;
          max-height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          transform: scale(0.9);
          transition: transform 0.3s ease;
        }
        .modal-overlay.open .modal-content {
          transform: scale(1);
        }
        .modal-img {
          max-width: 100%;
          max-height: calc(90vh - 100px);
          width: auto;
          height: auto;
          display: block;
          border-radius: 4px;
        }
        .modal-caption {
          margin-top: 1rem;
          font-size: 1.1rem;
          color: #111;
          text-align: center;
        }

        /* --- RESPONSIVE PARA MÓVIL --- */
        @media (max-width: 768px) {
          .gallery-container {
            flex-direction: column;
            flex-wrap: nowrap;
            padding: 2rem 1rem;
          }
          .polaroid-card {
            width: 80%; /* Cada tarjeta ocupa el 80% del ancho */
            max-width: 300px;
          }
        }
      `}</style>
      
      {/* Importa la fuente para el estilo Polaroid */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
      <link href="https://fonts.googleapis.com/css2?family=Caveat&display=swap" rel="stylesheet" />

      <div className="gallery-container">
        {styledItems.map((item) => (
          <PolaroidCard
            key={item.title}
            item={item}
            onClick={handleOpen}
            style={{
              width: '250px',
              height: '300px',
              transform: `rotate(${item.rotation}deg)`,
            }}
          />
        ))}
      </div>

      {open && selectedImage && (
        <div className={`modal-overlay ${open ? 'open' : ''}`} onClick={handleClose}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage.img} alt={selectedImage.title} className="modal-img" />
            <p className="modal-caption">{selectedImage.title}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryPage;

