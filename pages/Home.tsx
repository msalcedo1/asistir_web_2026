
import React from 'react';
import { Link } from 'react-router-dom';
import { Activity, Briefcase, Home as HomeIcon, Scale, AlertTriangle, HeartPulse, ChevronRight, Factory, Building2, Truck, HardHat, CheckCircle2 } from 'lucide-react';
import SEO from '../components/SEO';
import OccupationalAssistant from '../components/OccupationalAssistant';

const Hero = () => (
  <section className="relative h-[650px] flex items-center justify-center text-center text-white">
    <div 
      className="absolute inset-0 bg-cover bg-center z-0"
      style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop")' }}
    ></div>
    <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-asistir-teal/90 z-10"></div>
    <div className="container mx-auto px-4 relative z-20">
      <span className="inline-block bg-asistir-amber/20 text-asistir-amber border border-asistir-amber/50 px-4 py-1 rounded-full text-sm font-bold mb-6 backdrop-blur-sm">
        CENTRO DE MEDICINA LABORAL EN ZONA OESTE
      </span>
      <h1 className="font-heading font-bold text-4xl md:text-5xl lg:text-7xl mb-6 leading-tight">
        Líderes en <span className="text-asistir-amber">Medicina Laboral</span> y Salud Ocupacional
      </h1>
      <p className="text-lg md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto leading-relaxed">
        Más de 35 años brindando soluciones en <strong>Exámenes Preocupacionales</strong>, Control de Ausentismo y Seguridad e Higiene para empresas líderes.
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Link 
          to="/contacto" 
          className="bg-asistir-amber text-asistir-dark font-heading font-bold px-10 py-4 rounded-full hover:scale-105 shadow-xl transition-all"
        >
          Solicitar Presupuesto
        </Link>
        <Link 
          to="/servicios" 
          className="bg-white/10 backdrop-blur-md text-white border border-white/30 font-heading font-bold px-10 py-4 rounded-full hover:bg-white/20 transition-all"
        >
          Nuestros Servicios
        </Link>
      </div>
    </div>
  </section>
);

const Features = () => (
  <section className="py-12 bg-white">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8 md:gap-16">
        {[
          'Resultados en 24/48hs',
          'Atención en Planta y Centro',
          'Cumplimiento Res. 37/10',
          'Gestión Digital de Informes'
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-asistir-teal font-bold">
            <CheckCircle2 size={20} className="text-asistir-amber" />
            <span>{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; desc: string; link?: string }> = ({ icon, title, desc, link }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 flex flex-col h-full group">
    <div className="text-asistir-teal mb-6 bg-asistir-light w-16 h-16 rounded-2xl flex items-center justify-center group-hover:bg-asistir-teal group-hover:text-white transition-colors duration-300">
      {icon}
    </div>
    <h3 className="font-heading font-bold text-2xl text-asistir-teal mb-4">{title}</h3>
    <p className="text-gray-600 mb-6 flex-grow leading-relaxed">{desc}</p>
    <Link 
      to={link || "/servicios"} 
      className="text-asistir-teal font-bold flex items-center gap-2 group-hover:gap-4 transition-all"
    >
      Conocer más <ChevronRight size={18} />
    </Link>
  </div>
);

const Home = () => {
  return (
    <div className="overflow-x-hidden">
      <SEO 
        title="Especialistas en Medicina Laboral y Exámenes Preocupacionales" 
        description="Asistir S.R.L.: Centro integral de Medicina Laboral en El Palomar y Zona Oeste. Exámenes preocupacionales, control de ausentismo y auditoría médica para empresas." 
      />
      <Hero />
      <Features />
      
      <section className="py-24 bg-asistir-light">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-20">
            <h2 className="font-heading font-bold text-3xl md:text-5xl text-asistir-teal mb-6 italic">Servicios de Medicina Laboral Especializados</h2>
            <p className="text-gray-600 text-lg">
              Optimizamos la salud de su capital humano y reducimos el ausentismo mediante una gestión médica integral y profesional.
            </p>
            <div className="w-24 h-1.5 bg-asistir-amber mx-auto mt-8 rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard 
              icon={<Activity size={32} />}
              title="Exámenes Preocupacionales"
              desc="Evaluaciones de ingreso bajo normativa SRT para asegurar la aptitud psicofísica del postulante y prevenir litigios."
              link="/examenes"
            />
            <ServiceCard 
              icon={<HomeIcon size={32} />}
              title="Control de Ausentismo"
              desc="Visitas domiciliarias y auditoría médica en consultorio para validar licencias y reducir el lucro cesante."
              link="/ausentismo"
            />
            <ServiceCard 
              icon={<Briefcase size={32} />}
              title="Medicina en Planta"
              desc="Presencia médica continua en sus instalaciones para prevención de accidentes y atención primaria."
              link="/servicios#atencion"
            />
            <ServiceCard 
              icon={<Scale size={32} />}
              title="Asesoría Médico-Legal"
              desc="Soporte experto en juntas médicas, pericias y contestación de demandas laborales con rigor científico."
              link="/servicios#legal"
            />
            <ServiceCard 
              icon={<AlertTriangle size={32} />}
              title="Investigación de Accidentes"
              desc="Análisis profundo de siniestralidad para detectar causas raíz y proponer planes de mejora continua."
              link="/servicios#accidentologia"
            />
            <ServiceCard 
              icon={<HeartPulse size={32} />}
              title="Programas de Bienestar"
              desc="Campañas de vacunación y talleres de salud para fomentar una cultura corporativa saludable y productiva."
              link="/servicios#vacunacion"
            />
          </div>
        </div>
      </section>

      <OccupationalAssistant />

      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="font-heading font-bold text-4xl text-asistir-teal mb-8">¿Por qué elegir Asistir S.R.L. como su partner en Medicina Laboral?</h2>
              <div className="space-y-6">
                {[
                  { t: 'Trayectoria Garantizada', d: 'Más de 35 años operando en el mercado de salud ocupacional con solvencia y ética.' },
                  { t: 'Tecnología de Diagnóstico', d: 'Equipamiento propio para radiología, laboratorio y audiometrías con resultados inmediatos.' },
                  { t: 'Ubicación Estratégica', d: 'Centro médico en El Palomar, de fácil acceso desde todo Zona Oeste y CABA.' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-4">
                    <div className="bg-asistir-amber/20 p-2 rounded-full h-fit mt-1">
                      <CheckCircle2 className="text-asistir-teal" size={20} />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg text-asistir-teal mb-1">{item.t}</h4>
                      <p className="text-gray-600">{item.d}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative">
              <img 
                src="https://images.unsplash.com/photo-1516549655169-df83a0774514?q=80&w=2070&auto=format&fit=crop" 
                alt="Medicina Laboral Asistir SRL" 
                className="rounded-3xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-asistir-amber rounded-3xl -z-0"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-asistir-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12">Empresas que confían en nuestra gestión</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center opacity-70">
             <div className="flex flex-col items-center gap-4 group">
               <div className="bg-white/10 p-6 rounded-2xl group-hover:bg-white/20 transition-all">
                <Factory size={48} className="text-asistir-amber" />
               </div>
               <span className="font-bold uppercase tracking-widest text-sm">Industria</span>
             </div>
             <div className="flex flex-col items-center gap-4 group">
               <div className="bg-white/10 p-6 rounded-2xl group-hover:bg-white/20 transition-all">
                <Building2 size={48} className="text-asistir-amber" />
               </div>
               <span className="font-bold uppercase tracking-widest text-sm">Corporativo</span>
             </div>
             <div className="flex flex-col items-center gap-4 group">
               <div className="bg-white/10 p-6 rounded-2xl group-hover:bg-white/20 transition-all">
                <Truck size={48} className="text-asistir-amber" />
               </div>
               <span className="font-bold uppercase tracking-widest text-sm">Logística</span>
             </div>
             <div className="flex flex-col items-center gap-4 group">
               <div className="bg-white/10 p-6 rounded-2xl group-hover:bg-white/20 transition-all">
                <HardHat size={48} className="text-asistir-amber" />
               </div>
               <span className="font-bold uppercase tracking-widest text-sm">Construcción</span>
             </div>
          </div>
          <p className="mt-16 text-gray-300 max-w-2xl mx-auto italic">
            "Nuestra misión es proteger su activo más valioso mediante una medicina del trabajo eficiente y preventiva."
          </p>
        </div>
      </section>
    </div>
  );
};

export default Home;
