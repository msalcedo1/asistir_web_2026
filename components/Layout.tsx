import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Phone, MapPin, Menu, X, MessageCircle, Mail } from 'lucide-react';
import ObfuscatedMail from './ObfuscatedMail';

const TopBar = () => (
  <div className="bg-asistir-teal text-white py-2 text-sm hidden md:block">
    <div className="container mx-auto px-4 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <MapPin size={14} className="text-asistir-amber" />
        <span>Pampa 1079, El Palomar</span>
      </div>
      <div className="flex items-center gap-6">
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
          <Link to="/" className="font-heading font-bold text-2xl text-asistir-teal" onClick={closeMenu}>
            Asistir S.R.L.
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 font-bold text-asistir-dark">
            <Link to="/" className="hover:text-asistir-teal transition-colors">Inicio</Link>
            <Link to="/servicios" className="hover:text-asistir-teal transition-colors">Servicios</Link>
            <Link to="/quienes-somos" className="hover:text-asistir-teal transition-colors">Quiénes Somos</Link>
            <Link to="/contacto" className="bg-asistir-teal text-white px-6 py-2 rounded-full hover:bg-teal-900 transition-transform transform hover:scale-105">
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
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-4 font-bold border-t mt-4 border-gray-100">
            <Link to="/" className="hover:text-asistir-teal" onClick={closeMenu}>Inicio</Link>
            <Link to="/servicios" className="hover:text-asistir-teal" onClick={closeMenu}>Servicios</Link>
            <Link to="/quienes-somos" className="hover:text-asistir-teal" onClick={closeMenu}>Quiénes Somos</Link>
            <Link to="/contacto" className="text-asistir-teal" onClick={closeMenu}>Contacto</Link>
          </nav>
        )}
      </div>
    </header>
  );
};

const Footer = () => (
  <footer className="bg-asistir-dark text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
        <div>
          <h4 className="font-heading font-bold text-lg mb-4 text-asistir-amber">Asistir S.R.L.</h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Más de 35 años brindando soluciones integrales en Medicina Laboral para empresas de todo el país.
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Enlaces Rápidos</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><Link to="/" className="hover:text-white transition-colors">Inicio</Link></li>
            <li><Link to="/servicios" className="hover:text-white transition-colors">Servicios</Link></li>
            <li><Link to="/quienes-somos" className="hover:text-white transition-colors">Quiénes Somos</Link></li>
            <li><Link to="/contacto" className="hover:text-white transition-colors">Contacto</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Contacto</h4>
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
              />
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-heading font-bold text-lg mb-4">Horarios</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>Lun-Vie: 8:00 - 18:00</li>
            <li>Sáb: 8:00 - 12:00</li>
            <li>Dom: Cerrado</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-gray-700 pt-8 text-center text-sm text-gray-500">
        <p>&copy; {new Date().getFullYear()} Asistir S.R.L. Todos los derechos reservados.</p>
      </div>
    </div>
  </footer>
);

const WhatsAppFloat = () => (
  <a
    href="https://wa.me/5491147581266"
    target="_blank"
    rel="noreferrer"
    className="fixed bottom-8 right-8 bg-[#25d366] text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform z-40 flex items-center justify-center"
    aria-label="Chat on WhatsApp"
  >
    <MessageCircle size={28} />
  </a>
);

// Structured Data for Local Business SEO
const StructuredData = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Asistir S.R.L.",
    "image": "https://www.asistir-srl.com.ar/images/empresa-1.png",
    "description": "Soluciones integrales en medicina laboral, control de ausentismo y exámenes preocupacionales.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Pampa 1079",
      "addressLocality": "El Palomar",
      "addressRegion": "Buenos Aires",
      "postalCode": "1684",
      "addressCountry": "AR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -34.62107,
      "longitude": -58.59467
    },
    "telephone": "+541147581266",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "08:00",
        "closes": "12:00"
      }
    ],
    "url": "https://www.asistir-srl.com.ar"
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(jsonLd)}
    </script>
  );
};

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    if (!window.location.hash) {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <StructuredData />
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