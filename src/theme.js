// src/theme.js
import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9c27b0', // Morado
    },
    secondary: {
      main: '#ffab00', // Dorado/ámbar
    },
    ochre: { // NUESTRO NUEVO COLOR
      main: '#E0A800', // Un tono de amarillo quemado (ocre)
      contrastText: '#000000', // El texto que mejor contrasta es el negro
    },
    goldAccent: {
      main: '#fcc75b',
      contrastText: '#000',
    },
    background: {
      default: '#121212',
      paper: '#1e1e1e',
    },
    text: {
      primary: '#ffffff',
      secondary: '#b3b3b3',
      
    },
  },
  typography: {
    fontFamily: [
      'Montserrat', // La nueva fuente para títulos y elementos con peso
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif'
    ].join(','),
    h1: {
      fontWeight: 900, // La versión más gruesa que importamos
    },
    h2: {
      fontWeight: 700,
    },
    h3: {
      fontWeight: 700,
    },
    // Puedes seguir personalizando
  },
});