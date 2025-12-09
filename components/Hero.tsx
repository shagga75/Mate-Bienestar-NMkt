import React from 'react';
import { HERO_IMAGE } from '../constants';
import { Button } from './Button';

export const Hero: React.FC = () => {
  return (
    <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden bg-earth-light">
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white via-transparent to-transparent opacity-60 z-10 pointer-events-none"></div>
      
      <div className="container mx-auto px-6 relative z-20 pt-20 pb-12">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Text Content */}
          <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-mate-light text-mate-deep rounded-full text-xs font-bold tracking-wider uppercase mb-2">
              Mate Bienestar
            </div>
            <h1 className="font-serif text-5xl lg:text-7xl font-bold text-mate-deep leading-tight">
              Bienestar que se siente. <br/>
              <span className="text-mate-dark opacity-90 italic">Oportunidad que transforma.</span>
            </h1>
            <p className="text-lg md:text-xl text-earth-dark leading-relaxed max-w-xl mx-auto lg:mx-0">
              Tres blends funcionales con yerba mate para mejorar tu energía, digestión y control de peso… y una oportunidad real de construir ingresos.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}>
                Quiero probarlos
              </Button>
              <Button variant="outline" onClick={() => document.getElementById('business')?.scrollIntoView({ behavior: 'smooth' })}>
                Quiero ser embajador/a
              </Button>
            </div>
          </div>

          {/* Image Content */}
          <div className="lg:w-1/2 relative">
             <div className="relative z-10">
               <div className="absolute -inset-4 bg-mate-light/50 rounded-full blur-2xl transform rotate-6"></div>
               <img 
                src={HERO_IMAGE} 
                alt="Mate Bienestar Collection" 
                className="relative z-10 w-full max-w-md mx-auto rounded-3xl shadow-2xl transform transition-transform duration-700 hover:scale-[1.02]"
              />
             </div>
             {/* Decorative Elements */}
             <div className="absolute top-10 -right-10 w-24 h-24 bg-amber-100 rounded-full opacity-50 z-0"></div>
             <div className="absolute -bottom-10 left-10 w-32 h-32 bg-mate-deep rounded-full opacity-10 z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};