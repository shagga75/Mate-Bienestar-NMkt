import React from 'react';
import { PACKS } from '../constants';
import { Button } from './Button';
import { Package, CheckCircle2 } from 'lucide-react';

export const Packs: React.FC = () => {
  return (
    <section className="py-20 bg-earth-light">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-mate-dark tracking-widest uppercase mb-2 block">
            Simplificamos tu elección
          </span>
          <h2 className="text-3xl lg:text-4xl font-serif font-bold text-mate-deep">
            Programas diseñados para sentirse mejor y compartir
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {PACKS.map((pack) => (
            <div 
              key={pack.id} 
              className={`relative bg-white rounded-2xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:transform hover:-translate-y-2 
              ${pack.highlight ? 'shadow-2xl border-2 border-mate-DEFAULT scale-105 z-10' : 'shadow-lg border border-transparent'}`}
            >
              {pack.highlight && (
                <div className="absolute -top-4 bg-mate-deep text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wide">
                  Más Popular
                </div>
              )}

              <div className={`p-4 rounded-full mb-6 ${pack.highlight ? 'bg-mate-light text-mate-deep' : 'bg-earth-light text-stone-600'}`}>
                <Package size={32} />
              </div>

              <h3 className="text-2xl font-serif font-bold text-mate-deep mb-6">
                {pack.name}
              </h3>

              <div className="flex-grow w-full space-y-4 mb-8">
                {pack.items.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 justify-center text-stone-600 bg-earth-light/50 py-2 px-4 rounded-lg">
                    <CheckCircle2 size={16} className="text-mate-dark" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <Button variant={pack.highlight ? 'primary' : 'outline'} fullWidth>
                Elegir {pack.name}
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};