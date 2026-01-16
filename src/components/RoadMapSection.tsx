import React, { useEffect, useRef, useState } from "react";
import { UserPlus, KeyRound, Link2, CheckCircle} from "lucide-react";

type Step = {
  n: number;
  title: string;
  desc: string;
  icon: React.ReactNode;
  color: string;
  gradient: string;
  delay: string;
};

const steps: Step[] = [
  {
    n: 1,
    title: "Crea tu cuenta",
    desc: "Regístrate con tu correo y configura los datos básicos para iniciar.",
    icon: <UserPlus className="w-6 h-6" />,
    color: "#1A1E4C",
    gradient: "from-[#1A1E4C] to-[#1A1E4C]",
    delay: "delay-100"
  },
  {
    n: 2,
    title: "Configura credenciales seguras",
    desc: "Agrega tus llaves/tokens de forma protegida (bóveda/secretos y cifrado).",
    icon: <KeyRound className="w-6 h-6" />,
    color: "#1A1E4C",
    gradient: "from-[#1A1E4C] to-[#1A1E4C]",
    delay: "delay-200"
  },
  {
    n: 3,
    title: "Conecta tus proveedores cloud",
    desc: "Vincula Azure, AWS y Google Cloud usando únicamente APIs oficiales.",
    icon: <Link2 className="w-6 h-6" />,
    color: "#1A1E4C",
    gradient: "from-[#1A1E4C] to-[#1A1E4C]",
    delay: "delay-300"
  },
];

const SetupRoadmap: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [animatedSteps, setAnimatedSteps] = useState<number[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            
            steps.forEach((step, index) => {
              setTimeout(() => {
                setAnimatedSteps(prev => [...prev, step.n]);
              }, index * 300);
            });
          }
        });
      },
      { threshold: 0.2, rootMargin: "-50px" }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative bg-linear-to-b from-slate-50 to-white py-16 lg:py-24 overflow-hidden">
      <div ref={containerRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Título con animación */}
        <div className={`text-center mb-16 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#1A1E4C] mb-4">
            Configuración en 3 pasos
          </h2>
          
          <p className={`text-lg text-gray-600 max-w-2xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
            Sigue estos sencillos pasos para comenzar a gestionar tus proveedores cloud de forma segura y eficiente.
          </p>
        </div>

        {/* Contenido principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Imagen con animación */}
          <div className={`relative order-2 lg:order-1 flex justify-center lg:justify-start transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0 rotate-[-8deg]' : 'opacity-0 -translate-x-10 rotate-[-15deg]'}`}>
            {/* Efecto de gradiente animado */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl rounded-full motion-safe:animate-pulse" style={{ animationDuration: '4s' }} />
            
            {/* Shadow glow animado */}
            <div className="absolute -inset-6">
              <div className="absolute inset-0 bg-linear-to-r from-blue-500/20 via-purple-500/20 to-cyan-500/20 blur-2xl rounded-full motion-safe:animate-ping" style={{ animationDuration: '3s' }} />
            </div>
            
            <div className="relative group">
              <img
                src="/images/hero_section/shots3.png"
                alt="Pantalla de plataformas cloud"
                className={`w-64 sm:w-80 lg:w-100 select-none drop-shadow-2xl transition-all duration-700 ease-out ${isVisible ? 'scale-100' : 'scale-90'} group-hover:scale-105 group-hover:drop-shadow-3xl`}
                draggable={false}
              />
              
              {/* Badge flotante */}
              <div className={`absolute -top-4 -right-4 bg-linear-to-r from-blue-600 to-cyan-500 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2 transition-all duration-700 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
                <CheckCircle className="w-4 h-4 motion-safe:animate-bounce" style={{ animationDelay: '1s' }} />
                <span>100% Seguro</span>
              </div>
              
              {/* Efecto de pulso alrededor de la imagen */}
              <div className="absolute -inset-2 border-2 border-blue-400/30 rounded-2xl group-hover:border-blue-400/50 transition-all duration-500 motion-safe:animate-pulse" style={{ animationDuration: '2s' }} />
            </div>
          </div>

          {/* Pasos con animación */}
          <div className="space-y-6 lg:space-y-8 order-1 lg:order-2">
            {steps.map((step) => (
              <div
                key={step.n}
                className={`relative group transition-all duration-700 ease-out ${step.delay} ${animatedSteps.includes(step.n) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              >

                {/* Tarjeta del paso */}
                <div className={`relative bg-[#101828]/10 rounded-2xl lg:rounded-3xl p-6 lg:p-8 shadow-[0_10px_40px_-20px_rgba(0,0,0,0.1)] border border-white/80 transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 hover:shadow-[0_20px_60px_-30px_rgba(59,130,246,0.4)] hover:border-blue-100/80 group-hover:before:opacity-100 before:absolute before:inset-0 before:rounded-2xl before:lg:before:rounded-3xl before:bg-linear-to-br ${step.gradient} before:opacity-0 before:blur-xl before:-z-10 before:transition-opacity before:duration-500`}>
                  <div className="flex items-start justify-between gap-5 lg:gap-6">
                    {/* Número con animación */}
                    <div className="relative">
                      <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full bg-linear-to-br from-white to-slate-100 border border-slate-200 flex items-center justify-center relative shadow-sm group-hover:shadow-md transition-all duration-300">
                        <span className={`font-bold text-xl lg:text-2xl bg-linear-to-r ${step.gradient} bg-clip-text text-transparent motion-safe:group-hover:scale-110 transition-transform duration-300`}>
                          {step.n}
                        </span>
                        
                        {/* Anillo animado */}
                        <div className={`absolute inset-0 rounded-full border-2 ${animatedSteps.includes(step.n) ? 'motion-safe:animate-ping' : ''}`} style={{ borderColor: step.color, animationDuration: '2s' }} />
                      </div>
                    </div>

                    {/* Contenido */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-lg lg:text-xl font-bold text-gray-900 group-hover:text-gray-800 transition-colors duration-300">
                          {step.title}
                        </h3>
                        
                        {/* Icono con animación */}
                        <div className={`p-1.5 rounded-lg bg-linear-to-r ${step.gradient} bg-opacity-10 group-hover:bg-opacity-20 transition-all duration-500 group-hover:rotate-12`}>
                          <div className="text-white group-hover:scale-110 transition-transform duration-300">
                            {step.icon}
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-gray-600 leading-relaxed text-sm lg:text-base">
                        {step.desc}
                      </p>
                      
                      {/* Badge de estado con animación */}
                      <div className={`inline-flex items-center gap-1.5 mt-4 text-xs lg:text-sm font-medium text-gray-500 transition-all duration-700 delay-500 ${animatedSteps.includes(step.n) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'}`}>
                        <div className={`w-2 h-2 rounded-full bg-linear-to-r ${step.gradient} ${animatedSteps.includes(step.n) ? 'motion-safe:animate-pulse' : ''}`} />
                        <span>Paso {step.n} de {steps.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Efecto de ondas en el fondo */}
      <div className="absolute bottom-0 left-0 right-0 h-20 overflow-hidden">
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-linear-to-t from-blue-500/5 to-transparent motion-safe:animate-wave" style={{ animationDuration: '10s' }} />
        <div className="absolute -bottom-5 left-0 right-0 h-40 bg-linear-to-t from-cyan-500/5 to-transparent motion-safe:animate-wave" style={{ animationDuration: '8s', animationDelay: '1s' }} />
      </div>
    </section>
  );
};

export default SetupRoadmap;