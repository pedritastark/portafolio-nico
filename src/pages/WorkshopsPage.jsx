import React from 'react';

export const WorkshopsPage = () => {
  return (
    <div style={{
      // Ajusta '80px' a la altura real y exacta de tu Navbar.
      // Puedes usar las herramientas de desarrollador del navegador para medirla.
      height: 'calc(100vh - 80px)', 
      width: '100%',
    }}>
      <iframe
        src="https://www.tr3sestudio.com/nicomediante"
        title="Contenido de Nicomediante"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
        }}
        allow="fullscreen"
        sandbox="allow-scripts allow-same-origin allow-popups allow-forms"
      />
    </div>
  );
};

export default WorkshopsPage;
