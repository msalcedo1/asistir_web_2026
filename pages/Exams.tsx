import React from 'react';
import { Link } from 'react-router-dom';
import { ClipboardCheck } from 'lucide-react';
import SEO from '../components/SEO';

const Exams = () => {
  return (
    <div className="bg-asistir-light min-h-screen">
      <SEO 
        title="Exámenes Preocupacionales y Laborales" 
        description="Exámenes preocupacionales, periódicos, de egreso y post-ausencia para cumplir con la normativa y cuidar a su personal." 
      />
      <div className="bg-white py-16 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-2/3">
              <span className="text-asistir-amber font-bold tracking-wider text-sm uppercase mb-2 block">Servicios Médicos</span>
              <h1 className="font-heading font-bold text-4xl text-asistir-teal mb-4">Exámenes Preocupacionales y Laborales</h1>
              <p className="text-lg text-gray-600">
                Evaluaciones médicas precisas para cada etapa de la relación laboral, garantizando el cumplimiento normativo y el cuidado de su personal.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <div className="bg-teal-50 p-6 rounded-full">
                <ClipboardCheck size={80} className="text-asistir-teal" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-2/3">
            <h2 className="font-heading font-bold text-2xl text-asistir-teal mb-6">Un Examen para Cada Necesidad</h2>
            <p className="text-gray-600 mb-8">
              Ofrecemos una cobertura completa de exámenes médicos laborales diseñados para proteger la salud de sus empleados y los intereses de su empresa:
            </p>

            <div className="grid gap-6">
              {[
                { title: "Examen Preocupacional o de Ingreso", desc: "Determina la aptitud del postulante para el puesto, previniendo patologías preexistentes y futuros accidentes." },
                { title: "Examen Periódico", desc: "Evalúa la salud del empleado en función de los riesgos del puesto, permitiendo la detección temprana de enfermedades profesionales." },
                { title: "Examen de Egreso", desc: "Constata el estado de salud del empleado al finalizar la relación laboral." },
                { title: "Examen Post-Ausencia Prolongada", desc: "Evalúa la aptitud del trabajador para reincorporarse a sus tareas luego de una ausencia extendida." },
                { title: "Examen de Reubicación Laboral", desc: "Determina la aptitud para un nuevo puesto de trabajo dentro de la empresa." },
                { title: "Acciones de Salud", desc: "Programas personalizados de prevención y promoción de la salud adaptados a las necesidades de su empresa." }
              ].map((item, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm border-l-4 border-asistir-teal">
                  <h3 className="font-bold text-lg text-asistir-teal mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <aside className="lg:w-1/3">
            <div className="bg-asistir-teal text-white p-8 rounded-xl shadow-lg sticky top-24">
              <h4 className="font-heading font-bold text-xl mb-4 text-asistir-amber">Comprometidos con la Prevención</h4>
              <p className="mb-8 opacity-90 leading-relaxed">
                Nuestros exámenes no solo cumplen con la ley, sino que son una herramienta proactiva para fomentar un ambiente de trabajo más seguro y saludable.
              </p>
              <Link 
                to="/contacto" 
                className="block w-full text-center bg-white text-asistir-teal font-bold py-3 rounded-lg hover:bg-gray-100 transition-colors"
              >
                Coordinar Exámenes
              </Link>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Exams;