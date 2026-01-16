import React, { useEffect, useState } from 'react';
import logo from '../assets/SEC-logo.png'; 

interface NavItem {
  id: string;
  label: string;
}

const navItems: NavItem[] = [
  { id: 'producto', label: 'Producto' },
  { id: 'Roles', label: 'Roles' },
  { id: 'Conectividad', label: 'Conectividad' },
];

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const y = el.getBoundingClientRect().top + window.scrollY - 100;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <header
      className={` top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-softBg/90 ' : 'bg-softBg/70 backdrop-blur'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 lg:px-0">
        {/* Barra blanca centrada */}
        <div
          className={`w-full mx-auto flex items-center ${
            // pequeño ajuste de margen al hacer scroll
            scrolled ? 'my-2' : 'my-4'
          }`}
        >
          <div className="flex items-center w-full rounded-full drop-shadow-xl bg-white shadow-subtle px-4 sm:px-6 lg:px-8 h-14 lg:h-16">
            {/* Logo izquierda */}
            <div className="flex items-center gap-2 shrink-0">
              <img
                src={logo}
                alt="Solution Edge Computing"
                className="h-14 w-auto object-contain"
              />
            </div>

            {/* Navegación centro */}
            <nav className="hidden md:flex flex-1 justify-center gap-8 text-sm font-semibold text-[#066AAB]">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-primary hover:text-primaryDark transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA derecha */}
            <button
              className="shrink-0 ml-4 rounded-full bg-primaryDark bg-[#003465] text-white px-5 py-2 text-xs sm:text-sm font-semibold shadow-subtle hover:bg-primary active:scale-[0.98] transition-all"
              onClick={() => {

              }}
            >
              Probar Demo - Gratis
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
