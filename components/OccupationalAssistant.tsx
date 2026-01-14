
import React, { useState } from 'react';
import { GoogleGenAI } from "@google/genai";
import { Search, Brain, Loader2, ChevronRight, MessageSquare } from 'lucide-react';

const OccupationalAssistant: React.FC = () => {
  const [query, setQuery] = useState('');
  const [answer, setAnswer] = useState<string | null>(null);
  const [sources, setSources] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setAnswer(null);
    setSources([]);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Como experto en Medicina Laboral en Argentina, responde la siguiente consulta de un cliente: ${query}. Enfócate en la normativa vigente (Ley 24.557, Res. 37/10 SRT, etc.).`,
        config: {
          tools: [{ googleSearch: {} }],
        },
      });

      setAnswer(response.text);
      if (response.candidates?.[0]?.groundingMetadata?.groundingChunks) {
        setSources(response.candidates[0].groundingMetadata.groundingChunks);
      }
    } catch (error) {
      console.error("AI Assistant Error:", error);
      setAnswer("Lo sentimos, no pudimos procesar su consulta en este momento. Por favor, contáctenos directamente para asesoramiento profesional.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-6">
            <div className="bg-asistir-amber p-2 rounded-lg">
              <Brain className="text-asistir-teal" size={24} />
            </div>
            <h2 className="font-heading font-bold text-2xl text-asistir-teal">Asistente Experto en Medicina Laboral</h2>
          </div>
          
          <p className="text-gray-600 mb-8">
            ¿Tiene dudas sobre normativas, exámenes obligatorios o medicina del trabajo? Nuestro asistente inteligente le brinda información actualizada basada en la legislación argentina.
          </p>

          <form onSubmit={handleAsk} className="relative mb-8">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Ej: ¿Qué incluye un examen preocupacional básico?"
              className="w-full pl-6 pr-32 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-asistir-teal focus:bg-white outline-none transition-all shadow-inner"
            />
            <button
              type="submit"
              disabled={isLoading}
              className="absolute right-2 top-2 bottom-2 bg-asistir-teal text-white px-6 rounded-xl font-bold flex items-center gap-2 hover:bg-teal-900 transition-colors disabled:opacity-50"
            >
              {isLoading ? <Loader2 className="animate-spin" size={20} /> : <Search size={20} />}
              <span className="hidden sm:inline">Consultar</span>
            </button>
          </form>

          {answer && (
            <div className="bg-asistir-light p-8 rounded-2xl border border-teal-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex gap-4 items-start mb-4">
                <MessageSquare className="text-asistir-teal shrink-0 mt-1" size={24} />
                <div className="prose prose-teal max-w-none text-gray-700 leading-relaxed">
                  {answer.split('\n').map((line, i) => (
                    <p key={i} className="mb-2">{line}</p>
                  ))}
                </div>
              </div>

              {sources.length > 0 && (
                <div className="mt-6 pt-6 border-t border-teal-200">
                  <h4 className="text-sm font-bold text-asistir-teal uppercase tracking-wider mb-3">Fuentes y Normativas:</h4>
                  <div className="flex flex-wrap gap-3">
                    {sources.map((chunk, idx) => (
                      chunk.web && (
                        <a 
                          key={idx} 
                          href={chunk.web.uri} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-xs bg-white border border-teal-200 px-3 py-1 rounded-full text-asistir-teal hover:bg-asistir-teal hover:text-white transition-colors flex items-center gap-1"
                        >
                          {chunk.web.title || 'Referencia Legal'} <ChevronRight size={12} />
                        </a>
                      )
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default OccupationalAssistant;
