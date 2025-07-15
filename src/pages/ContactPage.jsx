// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Box, Typography, Container, Card, CardContent, TextField, Button, Stack, MenuItem, IconButton, Snackbar, Alert } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles'; // <-- CAMBIO: Importamos herramientas para crear un tema
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import fondoContacto from '../assets/fondo-secundario.jpg';

// --- CAMBIO: CREAMOS UN TEMA 'CLARO' SOLO PARA EL FORMULARIO ---
// Esto forzará a que los campos de texto tengan el comportamiento de un fondo claro (texto negro).
const formTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#9c27b0', // Mantenemos el morado como color primario
    },
  },
  typography: {
    fontFamily: ['Montserrat', 'Roboto', 'sans-serif'].join(','),
  },
});


export const ContactPage = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const phoneNumber = '573194914403';
  const emailAddress = 'equiponicomediante@gmail.com';
  const instagramUrl = 'https://www.instagram.com/Nicomediantesoy';

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(phoneNumber);
    setSnackbarOpen(true);
  };

  return (
    <Box sx={{
      backgroundImage: `url(${fondoContacto})`,
      backgroundRepeat: 'repeat',
      color: 'black',
      minHeight: 'calc(100vh - 68px)',
      py: { xs: 5, md: 8 },
      display: 'flex',
      alignItems: 'center',
    }}>
      <Container maxWidth="lg">
        <Box sx={{
          display: { xs: 'block', md: 'flex' },
          gap: { xs: 4, md: 8 },
          alignItems: 'center',
        }}>
          {/* --- COLUMNA IZQUIERDA --- */}
          <Box sx={{ width: { xs: '100%', md: '40%' }, textAlign: { xs: 'center', md: 'left' } }}>
            <Stack spacing={3} alignItems={{ xs: 'center', md: 'flex-start' }}>
              <Typography variant="h3" component="h2" fontWeight="900">
                ¡Hablemos!
              </Typography>
              <Stack direction="row" spacing={3} sx={{ pt: 2 }}>
                <IconButton aria-label="Copiar teléfono" onClick={handleCopyToClipboard} sx={{ color: 'black' }}>
                  <PhoneIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="Enviar correo" href={`mailto:${emailAddress}`} sx={{ color:'black' }}>
                  <EmailIcon fontSize="large" />
                </IconButton>
                <IconButton aria-label="Ir a Instagram" href={instagramUrl} target="_blank" rel="noopener noreferrer" sx={{ color: 'black' }}>
                  <InstagramIcon fontSize="large" />
                </IconButton>
              </Stack>
            </Stack>
          </Box>

          {/* --- COLUMNA DERECHA --- */}
          <Box sx={{ width: { xs: '100%', md: '60%' } }}>
            <Card sx={{
              borderRadius: 3,
              backgroundColor: '#FAFAFA', // <-- CAMBIO: Un blanco roto, más suave
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.2)',
              p: { xs: 2, md: 4 },
              width: '100%'
            }}>
              {/* --- CAMBIO: ENVOLVEMOS EL FORMULARIO EN EL NUEVO TEMA --- */}
              <ThemeProvider theme={formTheme}>
                <CardContent>
                  <form action="https://formspree.io/f/TU_URL_UNICA" method="POST">
                    <Stack spacing={3}>
                      <TextField label="Nombre completo" name="name" variant="outlined" fullWidth required />
                      <TextField
                        label="Número de teléfono"
                        name="phone"
                        variant="outlined"
                        fullWidth
                        required
                        type="tel"
                        inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                      />
                      <TextField label="Asunto" name="subject" variant="outlined" fullWidth select defaultValue="">
                        <MenuItem value="Show de Comedia">Show de Comedia</MenuItem>
                        <MenuItem value="Conferencia">Conferencia</MenuItem>
                        <MenuItem value="Presentador de Evento">Presentador de Evento</MenuItem>
                        <MenuItem value="Coaching">Coaching</MenuItem>
                        <MenuItem value="Otro">Otro</MenuItem>
                      </TextField>
                      <TextField label="Tu mensaje" name="message" variant="outlined" fullWidth multiline rows={4} required />
                      <Button type="submit" variant="contained" color="primary" size="large" sx={{ fontWeight: 'bold' }}>
                        Enviar Mensaje
                      </Button>
                    </Stack>
                  </form>
                </CardContent>
              </ThemeProvider>
            </Card>
          </Box>
        </Box>
      </Container>
      
      <Snackbar open={snackbarOpen} autoHideDuration={3000} onClose={() => setSnackbarOpen(false)} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={() => setSnackbarOpen(false)} severity="success" sx={{ width: '100%' }}>
          ¡Número de teléfono copiado al portapapeles!
        </Alert>
      </Snackbar>
    </Box>
  );
};