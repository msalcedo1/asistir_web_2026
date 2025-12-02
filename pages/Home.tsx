import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Briefcase, Home as HomeIcon, Scale, AlertTriangle, HeartPulse, ChevronRight, Factory, Building2, Truck, HardHat } from 'lucide-react';
import SEO from '../components/SEO';

const Hero = () => (
  <section className="relative h-[600px] flex items-center justify-center text-center text-white">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop")' }}
    ></div>
    <div className="absolute inset-0 bg-black/60 z-10"></div>
    <div className="container mx-auto px-4 relative z-20">
      <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
        Soluciones Integrales en <br className="hidden md:block"/> 
        <span className="text-asistir-amber">Medicina Laboral</span>
      </h1>
      <p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
        Optimizamos la salud de sus empleados, reducimos el ausentismo y garantizamos el cumplimiento normativo.
      </p>
      <Link 
        to="/contacto" 
        className="inline-block bg-asistir-amber text-asistir-dark font-heading font-bold px-8 py-4 rounded-full hover:-translate-y-1 hover:shadow-lg transition-all"
      >
        Solicitar Asesoramiento
      </Link>
    </div>
  </section>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; link?: string }> = ({ icon, title, desc, link }) => (
  <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full group">
    <div className="text-asistir-teal mb-4 group-hover:scale-110 transition-transform duration-300">
      {icon}
    </div>
    <h3 className="font-heading font-bold text-xl text-asistir-teal mb-3">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow">{desc}</p>
    <Link 
      to={link || "/servicios"} 
      className="text-asistir-teal font-bold flex items-center gap-2 group-hover:gap-3 transition-all"
    >
      Ver más <ChevronRight size={16} />
    </Link>
  </div>
);

const Home = () => {
  return (
    <div>
      <SEO 
        title="Medicina Laboral en El Palomar y Zona Oeste" 
        description="Asistir S.R.L. ofrece soluciones integrales en medicina laboral, exámenes preocupacionales y control de ausentismo para empresas en Buenos Aires." 
      />
      <Hero />
      
      <section className="py-20 bg-asistir-light">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-3xl md:text-4xl text-asistir-teal mb-4">Nuestros Servicios Principales</h2>
            <div className="w-24 h-1 bg-asistir-amber mx-auto rounded"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              icon={<Activity size={48} />}
              title="Exámenes Preocupacionales"
              desc="Aseguramos la aptitud psicofísica del personal al inicio y final de la relación laboral, de acuerdo a la normativa vigente."
              link="/examenes"
            />
            <ServiceCard 
              icon={<Briefcase size={48} />}
              title="Medicina Laboral Integral"
              desc="Servicio médico permanente en planta para el cuidado continuo del personal, la prevención y la promoción de la salud."
              link="/servicios#atencion"
            />
            <ServiceCard 
              icon={<HomeIcon size={48} />}
              title="Control de Ausentismo"
              desc="Auditoría médica de ausencias por enfermedad con visitas a domicilio para un control efectivo del ausentismo."
              link="/ausentismo"
            />
            <ServiceCard 
              icon={<Scale size={48} />}
              title="Asesoría Médico Legal"
              desc="Dictámenes, peritajes y soporte profesional en juntas médicas para la resolución de discrepancias."
              link="/servicios#legal"
            />
            <ServiceCard 
              icon={<AlertTriangle size={48} />}
              title="Accidentología"
              desc="Investigación y análisis de accidentes de trabajo para determinar sus causas y desarrollar planes de prevención."
              link="/servicios#accidentologia"
            />
            <ServiceCard 
              icon={<HeartPulse size={48} />}
              title="Rehabilitación"
              desc="Programas de seguimiento y rehabilitación para la reincorporación segura y oportuna del empleado."
              link="/servicios#rehabilitacion"
            />
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl text-asistir-teal mb-12">Confían en Nosotros</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-40 hover:opacity-100 transition-opacity duration-500">
             <div className="flex flex-col items-center gap-3">
               <Factory size={64} className="text-asistir-teal" />
               <span className="font-bold text-gray-500">Industria</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Building2 size={64} className="text-asistir-teal" />
               <span className="font-bold text-gray-500">Corporativo</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <Truck size={64} className="text-asistir-teal" />
               <span className="font-bold text-gray-500">Logística</span>
             </div>
             <div className="flex flex-col items-center gap-3">
               <HardHat size={64} className="text-asistir-teal" />
               <span className="font-bold text-gray-500">Construcción</span>
             </div>
          </div>
          <p className="mt-8 text-gray-500 text-sm">Empresas líderes de diversos sectores confían la salud de su personal en Asistir S.R.L.</p>
        </div>
      </section>
    </div>
  );
};

export default Home;