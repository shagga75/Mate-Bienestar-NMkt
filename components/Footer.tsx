import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-stone-400 py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="mb-4 md:mb-0">
            <h3 className="text-2xl font-serif font-bold text-white mb-2">Mate Bienestar</h3>
            <p className="text-sm max-w-xs">Nutrición natural para una vida activa y equilibrada.</p>
          </div>
          <div className="flex gap-6 text-sm font-medium">
            <a href="#" className="hover:text-white transition-colors">Productos</a>
            <a href="#" className="hover:text-white transition-colors">Negocio</a>
            <a href="#" className="hover:text-white transition-colors">Contacto</a>
          </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>&copy; {new Date().getFullYear()} Mate Bienestar. Todos los derechos reservados.</p>
          <div className="mt-4 md:mt-0">
            <span className="opacity-50">Diseñado para el éxito</span>
          </div>
        </div>
      </div>
    </footer>
  );
};