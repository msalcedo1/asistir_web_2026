import React from 'react';
import { Link } from 'react-router-dom';
import { Home, UserCheck, FileText, Clock } from 'lucide-react';
import SEO from '../components/SEO';

const Absenteeism = () => {
  return (
    <div className="bg-asistir-light min-h-screen">
      <SEO 
        title="Control de Ausentismo Laboral" 
        description="Gestión profesional de ausentismo: visitas domiciliarias, auditoría médica y reducción de costos laborales." 
      />
      <div className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <span className="text-asistir-amber font-bold tracking-wider text-sm uppercase mb-2 block">Gestión Médica</span>
              <h1 className="font-heading font-bold text-4xl text-asistir-teal mb-4">Control de Ausentismo Laboral</h1>
              <p className="text-lg text-gray-600">
                Una gestión médica profesional para reducir costos y optimizar la productividad de su empresa.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-teal-50 p-6 rounded-full">
                <Home size={80} className="text-asistir-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="font-heading font-bold text-2xl text-asistir-teal mb-6">Valide licencias y proteja a su equipo</h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              El ausentismo imprevisto genera costos y afecta la planificación. Nuestro servicio de control de ausentismo le brinda 
              una gestión médica profesional para validar las licencias y ofrecer un seguimiento que protege tanto al empleado como a la empresa.
            </p>

            <h3 className="font-bold text-xl text-gray-800 mb-6">Una Gestión Médica Precisa y Confiable</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Home className="text-asistir-amber mb-4" size={32} />
                <h4 className="font-bold text-lg text-asistir-teal mb-2">Visitas a Domicilio</h4>
                <p className="text-gray-600 text-sm">Médicos profesionales constatan la condición del empleado en su domicilio.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <UserCheck className="text-asistir-amber mb-4" size={32} />
                <h4 className="font-bold text-lg text-asistir-teal mb-2">Auditoría en Consultorio</h4>
                <p className="text-gray-600 text-sm">Evaluaciones en nuestro centro para un diagnóstico más profundo.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <FileText className="text-asistir-amber mb-4" size={32} />
                <h4 className="font-bold text-lg text-asistir-teal mb-2">Informes Detallados</h4>
                <p className="text-gray-600 text-sm">Reciba un reporte claro con las conclusiones médicas para su gestión.</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <Clock className="text-asistir-amber mb-4" size={32} />
                <h4 className="font-bold text-lg text-asistir-teal mb-2">Seguimiento Prolongado</h4>
                <p className="text-gray-600 text-sm">Monitoreo continuo para planificar el regreso al trabajo.</p>
              </div>
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="bg-white p-8 rounded-xl shadow-md border-t-4 border-asistir-amber">
              <h4 className="font-heading font-bold text-xl mb-6 text-asistir-teal">Beneficios Para Su Empresa</h4>
              <ul className="space-y-4 mb-8">
                {['Reducción de Costos', 'Mejora de la Productividad', 'Información para Decisiones', 'Respaldo Médico Profesional'].map((benefit, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-700">
                    <div className="w-2 h-2 rounded-full bg-asistir-amber"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link 
                to="/contacto" 
                className="block w-full text-center bg-asistir-teal text-white font-bold py-3 rounded-lg hover:bg-teal-800 transition-colors"
              >
                Solicitar Información
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Absenteeism;