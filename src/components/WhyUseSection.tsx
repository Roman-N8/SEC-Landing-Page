import React from "react";

type Benefit = {
  title: string;
  description: string;
};

const leftBenefits: Benefit[] = [
  {
    title: "Ideal para entornos multinube",
    description:
      "Añade a las principales plataformas de servicios de la nube como Amazon Web Services, Microsoft Azure y Google Cloud.",
  },
  {
    title: "Configuración rápida",
    description:
      "Conecta tus cuentas cloud de forma segura y comienza a visualizar recursos y métricas en minutos.",
  },
];

const rightBenefits: Benefit[] = [
  {
    title: "Interfaces user-friendly",
    description:
      "Diseñada para ofrecer una experiencia clara, intuitiva y enfocada en productividad.",
  },
  {
    title: "Gestión simple sin fricción",
    description:
      "Centraliza la administración de tus servicios cloud sin cambiar entre múltiples consolas.",
  },
];

const WhyChooseSection: React.FC = () => {
  return (
    <section className="bg-softBg py-10 lg:py-16">
      <div className="max-w-7xl max-h-full mx-auto px-4 lg:px-0">
        {/* Título */}
        <div className="text-center max-w-auto mx-auto">
          <div className="intersect:motion-preset-slide-up motion-duration-2000 intersect-once text-[#1A1E4C] text-6xl md:text-5xl sm:text-6xl font-bold tracking-tight">
            ¿Por qué elegir Solution Edge Computing?
          </div>
        </div>

        {/* Desktop */}
        <div className="mt-12 hidden lg:grid grid-cols-[minmax(260px,320px)_auto_minmax(260px,320px)] gap-10 items-center">
          {/* Beneficios izquierda */}
          <div className="intersect:motion-preset-shrink motion-duration-2000 intersect-once flex flex-col justify-center gap-10 items-end">
            <div className="w-full max-w-7xl">
              {leftBenefits.map((b) => (
                <BenefitBlock
                  key={b.title}
                  align="right"
                  title={b.title}
                  description={b.description}
                />
              ))}
            </div>
          </div>

          {/* Imagen central */}
          <div className="flex justify-center">
            <div className="relative">
              <img
                src="/images/hero_section/shots7.1.png"
                alt="Mockup de Solution Edge Computing"
                className="w-[320px] xl:w-90 select-none drop-shadow-2xl"
                draggable={false}
              />

              {/* Glow sutil */}
              <div className="absolute inset-x-8 -bottom-6 h-10 bg-[#066AAB]/20 blur-2xl rounded-full" />
            </div>
          </div>

          {/* Beneficios derecha */}
          <div className="intersect:motion-preset-shrink motion-duration-2000 intersect-once flex flex-col justify-center gap-10 items-start">
            <div className="w-full max-w-7xl">
              {rightBenefits.map((b) => (
                <BenefitBlock
                  key={b.title}
                  align="left"
                  title={b.title}
                  description={b.description}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile / Tablet */}
        <div className="mt-10 lg:hidden">
          <div className="flex justify-center">
            <img
              src="/images/hero_section/shots7.png"
              alt="Mockup de Solution Edge Computing"
              className="w-65 sm:w-75 select-none drop-shadow-xl"
              draggable={false}
            />
          </div>

          <div className="bg-white mt-10 grid grid-cols-1 sm:grid-cols-2 gap-6 shadow-lg">
            {[...leftBenefits, ...rightBenefits].map((b) => (
              <div
                key={b.title}
                className="bg-white rounded-3xl"
              >
                <div className="text-[#1A1E4C] font-bold text-lg lg:text-2xl">
                  {b.title}
                </div>
                <p className="mt-2 text-light text-[#6B7280] leading-relaxed">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;

/* ---------- Subcomponent ---------- */

function BenefitBlock({
  title,
  description,
  align,
}: {
  title: string;
  description: string;
  align: "left" | "right";
}) {
  return (
    <div className={`${align === "right" ? "text-left" : "text-right"}`}>
      <div className="text-[#1A1E4C] font-bold text-2xl lg:text-2xl">
        {title}
      </div>
      <p className="mt-2 text-light text-[#6B7280] leading-relaxed">
        {description}
      </p>
    </div>
  );
}
