import React from 'react';

const ProductSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 lg:px-0 py-12 lg:py-16">
      <div className="text-center max-w-5xl mx-auto space-y-4">
        <div className="text-9xl lg:text-4xl font-bold text-[#1A1E4C]">
          Entiende tu nube en un solo vistazo
        </div>
        <p className="text-[#1A1E4C]/70 text-sm lg:text-base">
          Solution Edge Computing centraliza la consulta de recursos, métricas y
          costos de tus plataformas cloud. Desde una interfaz única monitoreas
          el estado de tus máquinas virtuales, servicios gestionados y consumo
          financiero sin cambiar de consola.
        </p>
      </div>
    </div>
  );
};

export default ProductSection;
