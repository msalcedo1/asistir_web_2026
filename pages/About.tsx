import React from 'react';
import SEO from '../components/SEO';

const galleryImages = [
  {
    src: "images/DIL_9955-HDR.jpg",
    alt: "Fachada de Asistir S.R.L. en El Palomar",
    caption: "Fachada Institucional"
  },
  {
    src: "images/DIL_9670.JPG",
    alt: "Sala de espera confortable y climatizada",
    caption: "Sala de Espera"
  },
  {
    src: "images/DIL_9618.JPG",
    alt: "Gimnasio de rehabilitación y kinesiología",
    caption: "Centro de Rehabilitación"
  },
  {
    src: "images/DIL_9605.JPG",
    alt: "Consultorio para exámenes oftalmológicos",
    caption: "Consultorio Oftalmológico"
  },
  {
    src: "images/DIL_9612.JPG",
    alt: "Consultorio clínico completamente equipado",
    caption: "Consultorio Clínico"
  },
  {
    src: "images/DIL_9574.JPG",
    alt: "Consultorio de atención privada",
    caption: "Atención Privada"
  }
];

const About = () => {
  return (
    <div className="bg-white">
       <SEO 
        title="Sobre Nosotros" 
        description="Conozca a Asistir S.R.L.: más de 35 años de experiencia y un equipo profesional dedicado a la medicina laboral." 
      />
       <div className="bg-gray-900 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-asistir-teal opacity-90"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="font-heading font-bold text-4xl mb-4">Sobre Asistir S.R.L.</h1>
          <p className="text-xl max-w-2xl mx-auto opacity-90">Más de 35 años de experiencia en la protección y optimización de la salud laboral.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center md:text-left md:flex gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
               <img 
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop" 
                alt="Equipo trabajando" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-2xl text-asistir-teal mb-4">Nuestra Misión</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Desde hace más de 35 años, en Asistir S.R.L. nos dedicamos a ofrecer soluciones integrales en Salud Ocupacional. 
                Nuestra misión es crear un valor diferenciado para su empresa a través de un servicio de excelencia, 
                una estructura operativa ágil y un compromiso total con la calidad.
              </p>
              <p className="text-gray-600 leading-relaxed font-semibold">
                Reducimos sus costos y el lucro cesante, protegiendo su activo más valioso: su gente.
              </p>
            </div>
          </div>

          <div className="text-center md:text-left md:flex md:flex-row-reverse gap-12 items-center">
            <div className="md:w-1/2 mb-8 md:mb-0">
               <img 
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2080&auto=format&fit=crop" 
                alt="Profesionales médicos" 
                className="rounded-lg shadow-xl w-full h-80 object-cover"
                loading="lazy"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="font-heading font-bold text-2xl text-asistir-teal mb-4">Equipo Profesional</h2>
              <p className="text-gray-600 leading-relaxed">
                Contamos con un equipo de profesionales expertos en todas las áreas de la Medicina Laboral, 
                listos para asesorarlo y brindarle soluciones efectivas. Su profundo conocimiento y experiencia 
                garantizan un mayor rendimiento y bienestar para el personal a su cargo, asegurando el cumplimiento 
                de toda la normativa vigente.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-24">
          <h2 className="font-heading font-bold text-3xl text-asistir-teal text-center mb-12">Nuestras Instalaciones</h2>
          {/* Grid optimized for 6 images: 1 col mobile, 2 cols tablet, 3 cols desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-xl shadow-md h-64 border border-gray-100">
                <img 
                  src={image.src} 
                  alt={image.alt} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-asistir-teal/90 via-asistir-teal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-bold font-heading text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    {image.caption}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;