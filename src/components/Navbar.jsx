// src/components/Navbar.jsx
import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import { Link, NavLink } from 'react-router-dom';

import MenuIcon from '@mui/icons-material/Menu';
import logo from '../assets/logo-principal.png';

const navItems = [
  { text: 'Inicio', path: '/' },
  { text: 'Acerca de Mí', path: '/acerca' },
  { text: 'Servicios', path: '/servicios' },
  { text: 'Talleres', path: '/talleres' },
  { text: 'Galería', path: '/galeria' },
  { text: 'Contacto', path: '/contacto' },
];

const logoContainerWidth = 170;

export const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  // --- INICIA EL CAMBIO EN EL MENÚ MÓVIL (DRAWER) ---
  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{ textAlign: 'center', backgroundColor: 'ochre.main', height: '100%' }}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
              component={NavLink}
              to={item.path}
              sx={{
                textAlign: 'center',
                // Estilo para la pestaña activa en el menú móvil
                '&.active': {
                  // Ya no cambiamos el fondo
                  '& .MuiListItemText-primary': {
                    color: '#FFEECC', // Solo cambiamos el color de la letra a blanco
                  },
                },
              }}
            >
              <ListItemText
                primary={item.text}
                // El color por defecto sigue siendo negro
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
  // --- TERMINA EL CAMBIO EN EL MENÚ MÓVIL (DRAWER) ---

  return (
    <>
      <AppBar component="nav" position="sticky" elevation={0} sx={{ backgroundColor: 'background.default' }}>
        <Toolbar disableGutters sx={{ px: { xs: 2, md: 4 } }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: logoContainerWidth, justifyContent: 'flex-start' }}>
            <Link to="/">
              <img src={logo} alt="Nicomediante Soy Logo" style={{ height: '45px', verticalAlign: 'middle' }} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { sm: 'none' }, textAlign: 'center' }}>
            <Link to="/">
              <img src={logo} alt="Nicomediante Soy Logo" style={{ height: '45px', verticalAlign: 'middle' }} />
            </Link>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'flex' }, justifyContent: 'center' }}>
            {navItems.map((item) => (
              <Button
                key={item.text}
                component={NavLink}
                to={item.path}
                sx={{
                  color: 'text.primary',
                  mx: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    color: 'secondary.main',
                    backgroundColor: 'rgba(255, 171, 0, 0.1)',
                  },
                  '&.active': {
                    color: 'secondary.main',
                    fontWeight: 'bold'
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
          </Box>

          <Box sx={{ display: { xs: 'none', sm: 'flex' }, width: logoContainerWidth }} />
        </Toolbar>
      </AppBar>

      <Box component="nav">
        <Drawer
          variant="temporary"
          open={drawerOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: '80%', backgroundColor: 'ochre.main' },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
};