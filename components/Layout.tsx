
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, MessageCircle, Mail, ShieldCheck, Lock } from 'lucide-react';
import ObfuscatedMail from './ObfuscatedMail';

const TopBar = () => (
  <div className="bg-asistir-teal text-white py-2 text-sm hidden md:block border-b border-white/10">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-asistir-amber" />
        <span>Pampa 1079, El Palomar, Buenos Aires</span>
      </div>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-1.5 text-xs text-gray-300">
          <Lock size={12} className="text-green-400" />
          <span>Conexión Segura SSL</span>
        </div>
        <a href="tel:01147581266" className="flex items-center gap-2 hover:text-asistir-amber transition-colors">
          <Phone size={14} />
          <span>(011) 4758-1266</span>
        </a>
        <ObfuscatedMail 
          className="flex items-center gap-2 hover:text-asistir-amber transition-colors"
          icon={<Mail size={14} />}
          label="Email"
        />
      </div>
    </div>
  </div>
);

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="font-heading font-bold text-2xl text-asistir-teal flex items-center gap-2" onClick={closeMenu}>
            <ShieldCheck className="text-asistir-amber" size={28} />
            <span>Asistir S.R.L.</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-asistir-dark">
            <Link to="/" className="hover:text-asistir-teal transition-colors">Inicio</Link>
            <Link to="/servicios" className="hover:text-asistir-teal transition-colors">Servicios</Link>
            <Link to="/quienes-somos" className="hover:text-asistir-teal transition-colors">Empresa</Link>
            <Link to="/contacto" className="bg-asistir-teal text-white px-6 py-2 rounded-full hover:bg-teal-900 transition-all shadow-md hover:shadow-lg">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-asistir-teal"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 font-bold border-t mt-4 border-gray-100 animate-in fade-in slide-in-from-top-2">
            <Link to="/" className="hover:text-asistir-teal" onClick={closeMenu}>Inicio</Link>
            <Link to="/servicios" className="hover:text-asistir-teal" onClick={closeMenu}>Servicios</Link>
            <Link to="/quienes-somos" className="hover:text-asistir-teal" onClick={closeMenu}>Empresa</Link>
            <Link to="/contacto" className="text-asistir-teal" onClick={closeMenu}>Contacto</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-asistir-dark text-white pt-16 pb-8 border-t-4 border-asistir-amber">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-heading font-bold text-lg mb-4 text-asistir-amber">Asistir S.R.L.</h4>
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            Más de 35 años brindando soluciones integrales en Medicina Laboral para empresas de todo el país.
          </p>
          <div className="flex items-center gap-2 text-xs bg-white/5 p-3 rounded-lg border border-white/10 w-fit">
            <Lock className="text-green-400" size={16} />
            <div className="flex flex-col">
              <span className="font-bold text-gray-200 uppercase tracking-tighter">Sitio Protegido</span>
              <span className="text-gray-500">Cifrado de datos SSL de 256 bits</span>
            </div>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Secciones</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios Médicos</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-colors">Formulario de Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Información</h4>
          <ul className="space-y-3 text-sm text-gray-400">
            <li className="flex gap-3">
              <MapPin size={16} className="text-asistir-amber shrink-0" />
              <span>Pampa 1079, El Palomar (1684)</span>
            </li>
            <li className="flex gap-3">
              <Phone size={16} className="text-asistir-amber shrink-0" />
              <span>(011) 4758-1266</span>
            </li>
            <li className="flex gap-3">
              <ObfuscatedMail 
                className="flex items-center gap-3 hover:text-white transition-colors"
                icon={<Mail size={16} className="text-asistir-amber shrink-0" />}
                label="info@asistir-srl.com.ar"
              />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Centro Médico</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Lunes a Viernes: 8:00 - 17:00</li>
            <li>Sábados: 8:00 - 12:00</li>
            <li>Zona Oeste - El Palomar</li>
            <li className="pt-4 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              <span className="text-xs">Sistema de Informes Online Activo</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500 flex flex-col md:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Asistir S.R.L. Especialistas en Medicina del Trabajo.</p>
        <div className="flex gap-6">
          <Link to="/" className="hover:text-gray-300">Términos</Link>
          <Link to="/" className="hover:text-gray-300">Privacidad</Link>
        </div>
      </div>
    </div>
  </footer>
);

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5491124560110"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40 flex items-center justify-center border-4 border-white shadow-2xl"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={32} />
  </a>
);

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col selection:bg-asistir-amber selection:text-asistir-dark">
      <TopBar />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Layout;
