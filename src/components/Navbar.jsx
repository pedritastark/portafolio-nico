// src/components/Navbar.jsx

import React, { useState } from 'react';
// ... (todas las importaciones se quedan igual)
import {
  AppBar,
  Toolbar,
  Button,
  Box,
  // Ya no necesitamos Container, así que puedes borrarlo de aquí
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';
import { Link } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo-principal.png';

const navItems = [
  { text: 'Shows', path: '/shows' },
  { text: 'Servicios', path: '/servicios' },
  { text: 'Galería', path: '/galeria' },
  { text: 'Acerca de Mí', path: '/acerca'},
  { text: 'Contacto', path: '/contacto' },
];

const logoContainerWidth = 170;

export const Navbar = () => {
  // ... (toda la lógica del drawer se queda igual)
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'ochre.main', height: '100%' }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path} sx={{ textAlign: 'center' }}>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  color: 'ochre.contrastText',
                  fontWeight: 'bold',
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar component="nav" position="sticky" elevation={0} sx={{ backgroundColor: 'background.default' }}>
        <Toolbar disableGutters sx={{ px: { xs: 2, md: 4 } }}> 
          
          {/* --- VISTA MÓVIL: ÍCONO DE MENÚ --- */}
          <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>

          {/* ... (El resto del código del layout de 3 partes y del logo móvil se queda exactamente igual) ... */}
          
          {/* 1. SECCIÓN IZQUIERDA: EL LOGO */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            width: logoContainerWidth, 
            justifyContent: 'flex-start' 
          }}>
            <Link to="/">
              <img src={logo} alt="Nicomediante Soy Logo" style={{ height: '45px', verticalAlign: 'middle' }} />
            </Link>
          </Box>

          {/* LOGO PARA MÓVIL (CENTRADO) */}
          <Box sx={{ flexGrow: 1, display: { md: 'none' }, textAlign: 'center' }}>
              <Link to="/">
                  <img src={logo} alt="Nicomediante Soy Logo" style={{ height: '45px', verticalAlign: 'middle' }} />
              </Link>
          </Box>

          {/* 2. SECCIÓN CENTRAL: LOS ENLACES */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { xs: 'none', md: 'flex' },
            justifyContent: 'center' 
          }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  mx: 1.5,
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'transparent',
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          {/* 3. SECCIÓN DERECHA: EL ESPACIADOR INVISIBLE */}
          <Box sx={{ 
            display: { xs: 'none', md: 'flex' },
            width: logoContainerWidth
          }} />
            
        </Toolbar>
      </AppBar>

      {/* El código del Drawer se queda igual */}
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%', backgroundColor: 'ochre.main' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};