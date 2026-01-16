import React from "react";
import { Building2, Users, Briefcase } from "lucide-react";

type RoleCard = {
  id: string;
  icon: React.ReactNode;
  tag: string;
  title: string;
  description: string;
};

const roles: RoleCard[] = [
  {
    id: "empresarial",
    icon: <Building2 className="w-6 h-6 text-[#1A1E4C]" />,
    tag: "Empresarial",
    title: "Empresas Multi-Cloud",
    description:
      "Organizaciones que operan con infraestructuras distribuidas en uno o varios proveedores de nube.",
  },
  {
    id: "tecnico",
    icon: <Users className="w-6 h-6 text-[#1A1E4C]" />,
    tag: "Técnico",
    title: "Equipos de TI y Operaciones",
    description:
      "Equipos que requieren control, monitoreo y visibilidad centralizada para operar servicios críticos.",
  },
  {
    id: "gerencia",
    icon: <Briefcase className="w-6 h-6 text-[#1A1E4C]" />,
    tag: "Gerencia",
    title: "Gerentes y Directores",
    description:
      "Líderes que buscan eficiencia operativa, optimización de costos y mejores decisiones basadas en datos.",
  },
];

const TargetAudienceSection: React.FC = () => {
  return (
    <section className="bg-softBg py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 lg:px-0">
        {/* Header */}
        <div className="text-center max-w-5xl mx-auto">
          {/* Título */}
        <div className="text-center max-w-auto mx-auto">
          <div className="intersect:motion-preset-slide-up motion-duration-2000 intersect-once text-[#1A1E4C] text-6xl md:text-5xl sm:text-6xl font-bold tracking-tight">
            Solution Edge Computing esta diseñada para cada rol
          </div>
        </div>
          <p className="intersect:motion-preset-slide-up motion-duration-2000 intersect-once mt-4 text-[#6B7280] text-sm sm:text-base leading-relaxed">
            Solution Edge Computing está diseñada para organizaciones que gestionan múltiples servicios en
            la nube y requieren una visión centralizada, clara y confiable de su infraestructura.
          </p>
        </div>

        {/* Cards */}
        <div className="intersect:motion-preset-slide-up motion-duration-2000 intersect-once mt-10 grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
          {roles.map((r) => (
            <article
              key={r.id}
              className="bg-white rounded-[26px] border border-slate-100 shadow-[0_18px_40px_-30px_rgba(15,23,42,0.45)] p-7 lg:p-8"
            >
              {/* Icon box */}
              <div className="w-16 h-16 rounded-2xl border border-slate-200 flex items-center justify-center">
                {r.icon}
              </div>

              {/* Tag pill */}
              <div className="mt-5">
                <span className="inline-flex items-center rounded-full bg-[#1A1E4C] px-4 py-1.5 text-sm font-semibold text-white shadow-sm">
                  {r.tag}
                </span>
              </div>

              {/* Title */}
              <div className="mt-5 text-[#1A1E4C] font-bold text-lg">
                {r.title}
              </div>

              {/* Description */}
              <p className="mt-3 text-sm text-[#6B7280] leading-relaxed">
                {r.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
