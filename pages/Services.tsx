import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Activity, Briefcase, ClipboardList, Syringe, Scale, AlertTriangle, HeartPulse, Stethoscope, Home, Ambulance, ChevronDown, ChevronUp } from 'lucide-react';
import SEO from '../components/SEO';

interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  summary: string;
  details: string[];
  link?: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'examenes',
    title: 'Exámenes en Salud',
    icon: <Activity size={32} />,
    summary: 'Preocupacionales, periódicos, de egreso, post-ausencia y más.',
    details: ['Examen Preocupacional', 'Examen Periódico', 'Examen de Egreso', 'Post-Ausencia Prolongada'],
    link: '/examenes'
  },
  {
    id: 'ejecutivos',
    title: 'Check Up Ejecutivos',
    icon: <Briefcase size={32} />,
    summary: 'Evaluación médica completa para el personal gerencial.',
    details: [
      'Laboratorio Completo: Colesterol, Triglicéridos, Hepatograma.',
      'Imágenes: Rx Tórax, Columna.',
      'Exámenes: Clínico, Oftalmológico, Neurológico, Cardiológico.'
    ]
  },
  {
    id: 'psicotecnico',
    title: 'Gabinete Psicotécnico',
    icon: <ClipboardList size={32} />,
    summary: 'Evaluaciones psicológicas para selección y orientación.',
    details: [
      'Psicodiagnósticos para selección.',
      'Test de Orientación Vocacional.',
      'Test de Personalidad e Inteligencia (IQ).',
      'Evaluación Socio-ambiental.'
    ]
  },
  {
    id: 'vacunacion',
    title: 'Campañas de Vacunación',
    icon: <Syringe size={32} />,
    summary: 'Prevención estacional (ej. Antigripal) en su empresa.',
    details: [
      'Vacunación in-company.',
      'Disminución del ausentismo.',
      'Mejora de la productividad.'
    ]
  },
  {
    id: 'legal',
    title: 'Asesoría Médico Legal',
    icon: <Scale size={32} />,
    summary: 'Respaldo legal y validación jurídica de la operatoria.',
    details: [
      'Pericias y Juntas Médicas.',
      'Gestión de Demandas Laborales.',
      'Estudio integral de accidentes.'
    ]
  },
  {
    id: 'accidentologia',
    title: 'Accidentología',
    icon: <AlertTriangle size={32} />,
    summary: 'Atención y gestión de accidentes de trabajo.',
    details: [
      'Coordinación inmediata de primeros auxilios.',
      'Traslado y atención médica.',
      'Servicio de ambulancias y UTIM.'
    ]
  },
  {
    id: 'rehabilitacion',
    title: 'Rehabilitación',
    icon: <HeartPulse size={32} />,
    summary: 'Servicio de Fisiatría y Kinesiología.',
    details: [
      'Servicio completo y climatizado.',
      'Atención de Lunes a Viernes.',
      'Rehabilitación oportuna.'
    ]
  },
  {
    id: 'atencion',
    title: 'Atención Médica',
    icon: <Stethoscope size={32} />,
    summary: 'Atención clínica y de especialidades al personal.',
    details: [
      'Orientación asistencial.',
      'Evaluación de necesidad de reposo.',
      'Detección de patologías.'
    ]
  },
  {
    id: 'ausentismo',
    title: 'Reconocimiento Domiciliario',
    icon: <Home size={32} />,
    summary: 'Control de ausentismo con visitas médicas.',
    details: ['Visitas médicas a domicilio', 'Auditoría médica', 'Informes detallados'],
    link: '/ausentismo'
  },
  {
    id: 'area-protegida',
    title: 'Área Protegida',
    icon: <Ambulance size={32} />,
    summary: 'Emergencias médicas dentro de sus instalaciones.',
    details: [
      'Unidades de alta complejidad.',
      'Atención de emergencias con riesgo de vida.',
      'Cobertura para personal y visitantes.'
    ]
  }
];

const ServiceItemCard: React.FC<{ item: ServiceItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div id={item.id} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-md scroll-mt-32">
      <div className="p-6">
        <div className="text-asistir-teal mb-4 bg-teal-50 w-16 h-16 rounded-full flex items-center justify-center">
          {item.icon}
        </div>
        <h3 className="font-heading font-bold text-xl text-asistir-teal mb-2">{item.title}</h3>
        <p className="text-gray-600 mb-4 text-sm">{item.summary}</p>
        
        {item.link ? (
           <Link 
           to={item.link}
           className="text-white bg-asistir-teal px-4 py-2 rounded-lg text-sm font-bold inline-block hover:bg-teal-800 transition-colors"
         >
           Ver Detalle
         </Link>
        ) : (
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-asistir-teal font-bold text-sm hover:text-asistir-amber transition-colors outline-none"
          >
            {isOpen ? 'Ocultar Detalle' : 'Ver Detalle'}
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        )}
      </div>
      
      {/* Accordion Content */}
      <div 
        className={`bg-gray-50 px-6 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-60 py-4 border-t border-gray-100' : 'max-h-0 py-0'}`}
      >
        <ul className="space-y-2">
          {item.details.map((detail, idx) => (
            <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
              <span className="text-asistir-teal font-bold mt-1">•</span>
              {detail}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Services = () => {
  const location = useLocation();

  useEffect(() => {
    // If there is a hash in the URL, scroll to that element
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        // Short timeout to ensure rendering is complete
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="bg-asistir-light min-h-screen">
       <SEO 
        title="Nuestros Servicios" 
        description="Cobertura integral en Salud Ocupacional: exámenes médicos, control de ausentismo, auditoría médica y campañas de vacunación." 
      />
       <div className="bg-asistir-teal text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl mb-4">Nuestros Servicios</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">Ofrecemos una cobertura integral en Salud Ocupacional para su empresa, adaptándonos a sus necesidades específicas.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map(service => (
            <ServiceItemCard key={service.id} item={service} />
          ))}
          
          <div className="bg-asistir-teal text-white rounded-xl shadow-sm p-8 flex flex-col justify-center items-center text-center">
            <h3 className="font-heading font-bold text-xl mb-4">¿Necesita algo más?</h3>
            <p className="mb-6 opacity-90 text-sm">Si no encuentra el servicio que necesita, contáctenos para recibir asesoramiento personalizado.</p>
            <Link to="/contacto" className="bg-asistir-amber text-asistir-dark font-bold px-6 py-2 rounded-full hover:bg-white transition-colors">
              Contáctenos
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;