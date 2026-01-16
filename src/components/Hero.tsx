import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Shield, BarChart3, Cloud, CheckCircle } from 'lucide-react';

interface CloudService {
  name: string;
  logo: string;
}

function useInView<T extends HTMLElement>(options?: IntersectionObserverInit) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        obs.disconnect();
      }
    }, options);

    obs.observe(el);
    return () => obs.disconnect();
  }, [options]);

  return { ref, inView };
}

const AnimatedCard: React.FC<{
  inView: boolean;
  delay?: number;
  children: React.ReactNode;
}> = ({ inView, delay = 0, children }) => {
  return (
    <div
      className={[
        'min-w-[85%] snap-start lg:min-w-0',
        'transition-all duration-500 ease-out',
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
      ].join(' ')}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};


const Hero: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const CloudServices: CloudService[] = [
    { name: 'AWS', logo: '/images/cloud_icons/aws-logo.png' },
    { name: 'Azure', logo: '/images/cloud_icons/azure-logo.png' },
    { name: 'Google Cloud', logo: '/images/cloud_icons/google-logo.png' },
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleDemoClick = () => {
    console.log('Demo iniciado');
  };

  return (
    <section className="relative bg-linear-to-b from-softBg via-white to-softBg/50 pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
      {/* Elementos de fondo dinámicos */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(6, 106, 171, 0.15), transparent 80%)`,
        }}
      />

      {/* Grid background sutil */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contenido principal */}
        <div className="text-center max-w-7xl mx-auto">
          {/* Badge de destacado */}
          {/* <div className="inline-flex items-center gap-2 bg-linear-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-blue-200/30">
            <Sparkles className="w-4 h-4 text-blue-600" />
            <span className="text-sm font-semibold text-[#066AAB]">
              ¡Nuevo! Control total de tus servicios en la nube
            </span>
          </div> */}

          {/* Título principal */}
          <h1 className="text-[#1A1E4C] text-5xl sm:text-6xl lg:text-7xl xl:text-7.5xl font-medium tracking-tight leading-tight motion-preset-slide-down motion-duration-2000">
            Centraliza y Monitorea Tus Servicios Cloud
          </h1>

          {/* Descripción */}
          <p className="mt-8 text-gray-600 text-lg sm:text-xl max-w-5xl mx-auto leading-relaxed motion-preset-slide-up motion-duration-2000">
            Simplifica la gestión de tus recursos cloud desde una única plataforma intuitiva.
            <span className="block text-[#066AAB] font-semibold mt-2">
              Visualiza, controla, optimiza y aumenta la eficiencia operativa de tus servicios de la nube en un solo lugar.
            </span>
          </p>

          {/* CTA Buttons y estadísticas */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleDemoClick}
              className="group relative px-8 py-4 bg-[#1A1E4C] text-white rounded-full font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 overflow-hidden motion-preset-fade motion-duration-2000"
            >
              <span className="relative z-10 flex items-center gap-2">
                Probar Demo Gratis
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-[#066AAB] text-[#003465] opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>

          {/* Stats en línea */}
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-gray-500 motion-preset-pop motion-duration-2000">
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Sin tarjeta de crédito</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Nubes ilimitadas</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-500" />
              <span>Configuración rapida</span>
            </div>
          </div>
        </div>

        {/* Panel principal con características */}
        <div className="mt-16 lg:mt-20">
          {(() => {
            const { ref, inView } = useInView<HTMLDivElement>({ threshold: 0.15 });

            return (
              <div ref={ref} className="relative group">
                {/* Glow exterior */}
                <div className="absolute -inset-0.5 bg-linear-to-r from-blue-500 via-cyan-500 to-blue-500 rounded-3xl blur opacity-20 group-hover:opacity-30 transition duration-700" />

                <div className="relative bg-linear-to-br from-gray-900 via-blue-900 to-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-800/50">
                  {/* Patrón fondo */}
                  <div className="absolute inset-0 bg-dots-pattern opacity-10" />

                  <div className="relative p-6 sm:p-10 lg:p-12">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                      {/* Lado izquierdo */}
                      <div className="relative">
                        <div className="inline-flex items-center gap-3 text-blue-200/90 mb-4">
                          <Cloud className="w-6 h-6" />
                          <h3 className="text-xl font-semibold text-white">
                            Todo en un solo lugar
                          </h3>
                        </div>

                        {/* Mobile: carrusel */}
                        <div className="lg:hidden">
                          <div className="flex gap-4 overflow-x-auto pb-3 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch]">
                            <AnimatedCard inView={inView} delay={0}>
                              <FeatureCard
                                icon={<Shield className="w-5 h-5 text-blue-400" />}
                                title="Centralización Inteligente"
                                desc="Integra AWS, Azure, Google Cloud y más en una única vista unificada."
                              />
                            </AnimatedCard>

                            <AnimatedCard inView={inView} delay={120}>
                              <FeatureCard
                                icon={<BarChart3 className="w-5 h-5 text-cyan-300" />}
                                title="Monitorización en Tiempo Real"
                                desc="Métricas detalladas, alertas proactivas y dashboards personalizables."
                              />
                            </AnimatedCard>
                          </div>

                          <div className="mt-3 flex items-center justify-center gap-2 text-gray-300/70 text-sm">
                            <span className="animate-bounce">←</span>
                            <span>Desliza para ver más</span>
                            <span className="animate-bounce">→</span>
                          </div>
                        </div>

                        {/* lista */}
                        <div className="hidden lg:block space-y-6">
                          <AnimatedCard inView={inView} delay={0}>
                            <FeatureCard
                              icon={<Shield className="w-5 h-5 text-white" />}
                              title="Centralización Inteligente"
                              desc="Integra AWS, Azure, Google Cloud y más en una única vista unificada."
                            />
                          </AnimatedCard>

                          <AnimatedCard inView={inView} delay={120}>
                            <FeatureCard
                              icon={<BarChart3 className="w-5 h-5 text-white" />}
                              title="Monitorización en Tiempo Real"
                              desc="Métricas detalladas, alertas proactivas y dashboards personalizables."
                            />
                          </AnimatedCard>
                        </div>
                      </div>

                      {/* Lado derecho: mockup responsivo */}
                      <div className="relative">
                        <div className="relative flex justify-center lg:justify-end">
                          {/* Reflejo */}
                          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-8 bg-linear-to-t from-blue-500/20 to-transparent blur-lg" />

                          <div className="relative w-full max-w-105 sm:max-w-130 lg:max-w-140">
                            {/* Sombra dinámica (suave) */}
                            <div
                              className="absolute inset-0 bg-linear-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl blur-xl"
                              style={{
                                transform: `translateY(12px) rotate(${mousePosition.x * 0.002}deg)`,
                              }}
                            />

                            <img
                              src={"/images/hero_section/shots6.png"}
                              alt="Dashboard de monitoreo cloud"
                              className={[
                                'relative w-auto h-auto select-none drop-shadow-2xl transform-gpu',
                                'transition-all duration-2000',
                                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4',
                              ].join(' ')}
                              style={{
                                transform: `perspective(900px) rotateY(${(mousePosition.x - window.innerWidth / 2) * 0.002}deg) rotateX(${-(mousePosition.y - window.innerHeight / 2) * 0.002}deg)`,
                              }}
                              draggable={false}
                            />

                            <div className="absolute top-2 right-2 bg-linear-to-r from-green-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full animate-pulse">
                              LIVE
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Barra inferior */}
                  <div className="border-t border-gray-800/50 bg-gray-900/50 px-5 py-4 sm:px-6 sm:py-5">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-6 opacity-90 text-center">
                      <span className="text-gray-400 font-medium">Conectado con:</span>

                      <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                        {CloudServices.map(
                          (provider) => (
                            <div className="inline-grid grid-cols-1 place-items-center" key={provider.name}>
                              <img src={provider.logo} alt={provider.name} className="w-10 h-10 object-contain" />
                              <div
                                key={provider.name}
                                className="text-gray-300 hover:text-white transition-colors text-sm sm:text-base font-semibold"
                                title={`Soporte completo para ${provider.name}`}
                              >
                                {provider.name}
                              </div>
                            </div>
                          ),
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
        </div>


      </div>
    </section>
  );
};

export default Hero;

type FeatureCardProps = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  delay?: number;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="group bg-white backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl">
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#1A1E4C] rounded-xl group-hover:bg-[#1A1E4C]/80 transition-colors">
          {icon}
        </div>
        <div>
          <h4 className="text-[#1A1E4C] font-bold text-lg mb-2">{title}</h4>
          <p className="text-[#1A1E4C]/80 text-sm leading-relaxed">{desc}</p>
        </div>
      </div>
    </div>
  );
};
