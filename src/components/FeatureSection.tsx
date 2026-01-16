import React from 'react';

interface Feature {
  title: string;
  image: string;
  description: string;
}

const features: Feature[] = [
  {
    title: 'Centralización',
    image:'/images/hero_section/shots2.png',
    description:
      'Administra tus recursos de Azure, AWS, Google Cloud y más desde una sola aplicación',
  },
  {
    title: 'Proveedores',
    image:'/images/hero_section/shots3.png',
    description:
      'Conecta los principales proveedores cloud con credenciales seguras y visualiza el estado de cada plataforma.',
  },
  {
    title: 'Monitorización',
    image:'/images/hero_section/shots4.png',
    description:
      'Supervisa en tiempo real el rendimiento de tus VMs y servicios críticos.',
  },
];

const FeaturesSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 lg:px-0 py-10 lg:py-16">
      <div className="text-center max-w-5xl mx-auto space-y-4 mb-10 lg:mb-16">
        <div className="intersect:motion-preset-slide-down motion-duration-2000 intersect-once text-6xl lg:text-5xl font-bold text-navy text-[#1A1E4C]">
          Entiende tu nube en un solo vistazo
        </div>
        <p className="intersect:motion-preset-slide-up motion-duration-2000 intersect-once text-[#6B7280] text-sm lg:text-base">
          Solution Edge Computing centraliza la consulta de recursos, métricas y
          costos de tus plataformas cloud. Desde una interfaz única monitoreas
          el estado de tus máquinas virtuales, servicios gestionados y consumo
          financiero sin cambiar de consola.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f,index) => (
          <article
            key={f.title}
            className={`${index % 2 == 0 ? 'bg-[#1A1E4C]/10' : 'bg-white'} rounded-3xl p-6 shadow-subtle border border-slate-100 transform transition-all duration-300 hover:-translate-y-1 shadow-lg
            intersect:motion-preset-slide-up motion-duration-2000 intersect-once`}
          >
            <img src={f.image} alt={f.title} className="w-full h-auto object-cover "/>
            <div className="text-lg font-bold text-navy mb-3 text-[#1A1E4C] text-center animate-slide-up">
              {f.title}
            </div>
            <p className="text-sm font-light text-[#6B7280]">{f.description}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default FeaturesSection;
