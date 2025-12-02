import React, { useState } from 'react';
import { MapPin, Phone, Clock, Train, Bus, Car, Mail } from 'lucide-react';
import ObfuscatedMail from '../components/ObfuscatedMail';
import SEO from '../components/SEO';

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('submitting');

    const formData = new FormData(e.currentTarget);
    // Add the Web3Forms Access Key
    formData.append("access_key", "36ba381a-5f8c-4878-afbc-7192df27c264");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setFormStatus('success');
      } else {
        console.error("Form submission error", data);
        setFormStatus('error');
      }
    } catch (error) {
      console.error("Network error", error);
      setFormStatus('error');
    }
  };

  return (
    <div className="bg-asistir-light min-h-screen">
      <SEO 
        title="Contacto" 
        description="Contáctenos para servicios de medicina laboral en El Palomar. Tel: (011) 4758-1266. Pampa 1079." 
      />
       <div className="bg-asistir-teal text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading font-bold text-4xl mb-4">Contacto</h1>
          <p className="text-lg opacity-90">Estamos aquí para ayudarle. Envíenos su consulta y le responderemos a la brevedad.</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Form Section */}
          <div className="lg:w-2/3">
            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="font-heading font-bold text-2xl text-asistir-teal mb-6">Formulario de Contacto</h2>
              
              {formStatus === 'success' ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <div className="text-green-500 text-3xl">✓</div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-2">¡Gracias por contactarnos!</h3>
                  <p className="text-gray-600">Hemos recibido su mensaje. Nuestro equipo se pondrá en contacto con usted a la brevedad.</p>
                  <button onClick={() => setFormStatus('idle')} className="mt-6 text-asistir-teal font-bold hover:underline">Enviar otro mensaje</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* HONEYPOT SPAM PROTECTION: Hidden input that only bots will fill */}
                  <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                      <input type="text" id="name" name="name" required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asistir-teal focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                      <input type="email" id="email" name="email" required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asistir-teal focus:border-transparent outline-none transition-all" />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-bold text-gray-700 mb-2">Teléfono (Opcional)</label>
                      <input type="tel" id="phone" name="phone" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asistir-teal focus:border-transparent outline-none transition-all" />
                    </div>
                    <div>
                      <label htmlFor="service" className="block text-sm font-bold text-gray-700 mb-2">Servicio de Interés</label>
                      <select id="service" name="service" className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asistir-teal focus:border-transparent outline-none transition-all">
                        <option value="Consulta General">Consulta General</option>
                        <option value="Examenes Preocupacionales">Exámenes Preocupacionales</option>
                        <option value="Control de Ausentismo">Control de Ausentismo</option>
                        <option value="Otro">Otro</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                    <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 bg-white text-gray-900 border border-gray-300 rounded-lg focus:ring-2 focus:ring-asistir-teal focus:border-transparent outline-none transition-all"></textarea>
                  </div>

                  {formStatus === 'error' && (
                    <div className="text-red-600 text-sm bg-red-50 p-3 rounded-lg border border-red-200">
                      Hubo un error al enviar el mensaje. Por favor intente nuevamente o llámenos por teléfono.
                    </div>
                  )}

                  <button 
                    type="submit" 
                    disabled={formStatus === 'submitting'}
                    className={`bg-asistir-amber text-asistir-dark font-bold px-8 py-3 rounded-full hover:shadow-lg hover:-translate-y-1 transition-all ${formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''}`}
                  >
                    {formStatus === 'submitting' ? 'Enviando...' : 'Enviar Mensaje'}
                  </button>
                  <p className="text-xs text-gray-500 mt-2">Protegido contra spam por Web3Forms.</p>
                </form>
              )}
            </div>
          </div>

          {/* Info Sidebar */}
          <aside className="lg:w-1/3 space-y-8">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h4 className="font-heading font-bold text-xl text-asistir-teal mb-6 border-b pb-2">Información de Contacto</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="bg-teal-50 p-2 rounded-full text-asistir-teal">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-gray-800">Dirección</span>
                    <span className="text-gray-600">Pampa 1079, El Palomar (1684)<br/>Provincia de Buenos Aires</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-teal-50 p-2 rounded-full text-asistir-teal">
                    <Phone size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-gray-800">Teléfono</span>
                    <a href="tel:01147581266" className="text-gray-600 hover:text-asistir-teal">(011) 4758-1266</a>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="bg-teal-50 p-2 rounded-full text-asistir-teal">
                    <Mail size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-gray-800">Email</span>
                    <ObfuscatedMail className="text-gray-600 hover:text-asistir-teal" />
                  </div>
                </li>
                <li className="flex items-start gap-4">
                   <div className="bg-teal-50 p-2 rounded-full text-asistir-teal">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="font-bold block text-gray-800">Horario de Atención</span>
                    <span className="text-gray-600">Lunes a Viernes: 8:00 - 17:00 hs.<br/>Sábados: 8:00 - 12:00 hs.</span>
                  </div>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        {/* Location Section */}
        <div className="mt-16">
          <h2 className="font-heading font-bold text-3xl text-asistir-teal text-center mb-8">Ubicación y Transporte</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <div className="bg-gray-200 h-96 rounded-xl overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.330949424615!2d-58.59467448476976!3d-34.62107008045501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcb86177a6409d%3A0x67e825301132635!2sPampa%201079%2C%20El%20Palomar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1625600000000!5m2!1ses!2sar" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>

            <div className="grid gap-4">
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-asistir-teal text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <Train size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-asistir-teal">Tren</h3>
                  <p className="text-gray-600 text-sm">Línea San Martín, Estación El Palomar. Estamos a pocas cuadras de la estación.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-asistir-teal text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <Bus size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-asistir-teal">Colectivos</h3>
                  <p className="text-gray-600 text-sm">Líneas que te acercan: 53, 123, 182, 252, 320, 326, 634.</p>
                </div>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-sm flex gap-4 hover:-translate-y-1 transition-transform">
                <div className="bg-asistir-teal text-white w-12 h-12 flex items-center justify-center rounded-full shrink-0">
                  <Car size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-asistir-teal">Auto</h3>
                  <p className="text-gray-600 text-sm mb-2">A 5 minutos del Acceso Oeste (Bajada Hospital Posadas).</p>
                  <a href="https://www.google.com/maps/dir//Pampa+1079,+El+Palomar" target="_blank" rel="noreferrer" className="text-asistir-amber font-bold text-sm hover:underline">Cómo llegar →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;