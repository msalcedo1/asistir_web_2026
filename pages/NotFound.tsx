import React from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle } from 'lucide-react';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center bg-gray-50 px-4 text-center">
      <SEO title="Página no encontrada" description="La página que busca no existe." />
      <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 max-w-md w-full">
        <div className="bg-orange-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
          <AlertTriangle size={40} className="text-asistir-amber" />
        </div>
        <h1 className="font-heading font-bold text-3xl text-asistir-teal mb-2">Página no encontrada</h1>
        <p className="text-gray-600 mb-8">
          Lo sentimos, la página que está buscando no existe o ha sido movida.
        </p>
        <Link 
          to="/" 
          className="inline-block w-full bg-asistir-teal text-white font-bold py-3 rounded-lg hover:bg-teal-800 transition-colors"
        >
          Volver al Inicio
        </Link>
      </div>
    </div>
  );
};

export default NotFound;