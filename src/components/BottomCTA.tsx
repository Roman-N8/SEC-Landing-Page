import React, { useEffect, useRef, useState } from "react";
import {Sparkles, CheckCircle, ArrowRight, Rocket } from "lucide-react";

type CtaSectionProps = {
  onPrimaryClick?: () => void;
};

const BottomCta: React.FC<CtaSectionProps> = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedElements, setAnimatedElements] = useState<string[]>([]);

  const handleClick = () => {
    console.log("Bottom CTA clicked");
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            // Animar elementos secuencialmente
            ['title', 'subtitle', 'feature1', 'feature2', 'feature3', 'button'].forEach((element, index) => {
              setTimeout(() => {
                setAnimatedElements(prev => [...prev, element]);
              }, index * 200);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: "-50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

//   const features = [
//     {
//       icon: <Shield className="w-5 h-5" />,
//       text: "Seguridad de nivel empresarial",
//       color: "from-emerald-500 to-green-400"
//     },
//     {
//       icon: <Zap className="w-5 h-5" />,
//       text: "Configuración en minutos",
//       color: "from-amber-500 to-orange-400"
//     },
//     {
//       icon: <Cloud className="w-5 h-5" />,
//       text: "Multi-cloud integrado",
//       color: "from-blue-500 to-cyan-400"
//     }
//   ];

  const benefits = [
    "Sin tarjeta de crédito",
    "Nubes ilimitadas",
    "Soporte 24/7"
  ];

  return (
    <section ref={containerRef} className="relative py-16 lg:py-24 overflow-hidden" id="cta">
      {/* Fondo decorativo animado */}
      <div className="absolute inset-0 bg-linear-to-br from-slate-50 via-white to-blue-50/30" />
      
      {/* Partículas flotantes */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute w-1 h-1 rounded-full motion-safe:animate-float ${i % 3 === 0 ? 'bg-blue-400/40' : i % 3 === 1 ? 'bg-cyan-400/40' : 'bg-purple-400/40'}`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.3}s`,
              animationDuration: `${15 + Math.random() * 15}s`
            }}
          />
        ))}
      </div>

      {/* Efectos de gradiente animados */}
      <div className="absolute top-0 left-0 w-full h-32 bg-linear-to-r from-blue-500/10 via-purple-500/10 to-cyan-500/10 blur-3xl motion-safe:animate-pulse" style={{ animationDuration: '4s' }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-linear-to-r from-cyan-500/5 to-blue-500/5 rounded-full blur-3xl motion-safe:animate-ping" style={{ animationDuration: '3s', animationDelay: '1s' }} />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Contenedor principal con animación de entrada */}
        <div className={`relative overflow-hidden rounded-3xl transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}>
          {/* Efectos de borde animados */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-xl motion-safe:animate-pulse" style={{ animationDuration: '3s' }} />
          
          {/* Fondo con gradiente animado */}
          <div className="absolute inset-0 rounded-3xl bg-linear-to-br from-white via-white to-blue-50/50 border border-white/80 backdrop-blur-sm" />
          
          {/* Efecto de brillo en los bordes */}
          <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-linear-to-r from-blue-500/0 via-blue-500/10 to-blue-500/0 motion-safe:animate-shimmer" style={{ backgroundSize: '200% 100%' }} />

          <div className="relative px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
            {/* Contenido principal */}
            <div className="max-w-3xl mx-auto">
              {/* Badge superior animado */}
              <div className={`flex justify-center mb-8 transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}`}>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-blue-500/10 to-cyan-500/10 border border-blue-200/50 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 text-blue-500 motion-safe:animate-spin" style={{ animationDuration: '3s' }} />
                  <span className="text-sm font-semibold bg-linear-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                    ¡NUEVO! Lanzamiento especial
                  </span>
                </div>
              </div>

              {/* Título principal con animación */}
              <h2 className={`text-center transition-all duration-700 ${animatedElements.includes('title') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <span className="text-3xl sm:text-4xl lg:text-3 xl font-bold text-gray-900 block mb-3">
                  Comienza a transforma tu infraestructura cloud con
                </span>
                <span className="relative">
                  <span className="relative z-10 text-3xl sm:text-4xl lg:text-5xl font-bold bg-[#1A1E4C] bg-clip-text text-transparent">
                    Solution Edge Computing
                  </span>
                  <span className={`absolute bottom-1 left-0 w-full h-3 bg-blue-100/50 -z-10 transition-all duration-1000 ${animatedElements.includes('title') ? 'w-full' : 'w-0'}`} />
                </span>
              </h2>

              {/* Subtítulo animado */}
              <p className={`mt-6 text-lg text-gray-600 text-center max-w-2xl mx-auto transition-all duration-700 delay-300 ${animatedElements.includes('subtitle') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                Centraliza, monitorea y optimiza todos tus servicios cloud desde una única plataforma inteligente
              </p>

              {/* Características principales con animación escalonada */}
              {/* <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center text-center p-4 rounded-2xl bg-linear-to-br from-white to-blue-50/30 border border-blue-100/50 transition-all duration-700 ${animatedElements.includes(`feature${index + 1}`) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}
                    style={{ transitionDelay: `${400 + index * 100}ms` }}
                  >
                    <div className={`p-3 rounded-xl bg-linear-to-r ${feature.color} bg-opacity-10 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <div className={`text-transparent bg-linear-to-r ${feature.color} bg-clip-text`}>
                        {feature.icon}
                      </div>
                    </div>
                    <span className="font-semibold text-gray-800">{feature.text}</span>
                  </div>
                ))}
              </div> */}

              {/* Beneficios con checkmarks animados */}
              <div className={`mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-700 ${animatedElements.includes('feature3') ? 'opacity-100' : 'opacity-0'}`}>
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-linear-to-r from-green-50 to-emerald-50/50 border border-emerald-100"
                  >
                    <CheckCircle className="w-4 h-4 text-emerald-500 motion-safe:animate-pulse" style={{ animationDelay: `${index * 0.3}s` }} />
                    <span className="text-sm font-medium text-gray-700">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* Botón CTA principal con animación */}
              <div className={`mt-12 flex flex-col sm:flex-row items-center justify-center gap-4 transition-all duration-700 delay-1000 ${animatedElements.includes('button') ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <button
                  onClick={handleClick}
                  className="group relative px-8 py-4 rounded-2xl bg-[#1A1E4C] text-white font-semibold text-lg shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] overflow-hidden"
                >
                  {/* Efecto de brillo en hover */}
                  <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-linear-to-r from-transparent via-white/30 to-transparent" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    <Rocket className="w-5 h-5 motion-safe:group-hover:animate-bounce" />
                    <span>Probar Demo Gratis</span>
                    <ArrowRight className="w-5 h-5 motion-safe:group-hover:translate-x-2 transition-transform duration-300" />
                  </div>
                  
                  {/* Efecto de pulso */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-white/30 transition-all duration-500 motion-safe:animate-pulse" style={{ animationDuration: '2s' }} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de ondas en la parte inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden pointer-events-none">
        <div className="absolute -bottom-20 left-0 right-0 h-40 bg-linear-to-t from-blue-500/10 to-transparent motion-safe:animate-wave" style={{ animationDuration: '12s' }} />
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-linear-to-t from-cyan-500/10 to-transparent motion-safe:animate-wave" style={{ animationDuration: '10s', animationDelay: '2s' }} />
      </div>
    </section>
  );
};

export default BottomCta;