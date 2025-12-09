import React from 'react';
import { BUSINESS_FEATURES } from '../constants';
import { Button } from './Button';
import { Repeat, Users, TrendingUp, Heart, ArrowRight } from 'lucide-react';

const IconMap = {
  repeat: Repeat,
  users: Users,
  trending: TrendingUp,
  heart: Heart
};

export const Business: React.FC = () => {
  return (
    <section id="business" className="py-24 bg-mate-deep text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-mate-dark rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-900 rounded-full mix-blend-multiply filter blur-3xl opacity-50 transform -translate-x-1/2 translate-y-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Header & CTA */}
          <div className="lg:w-5/12 space-y-8">
            <h2 className="text-4xl lg:text-5xl font-serif font-bold leading-tight">
              Tu bienestar puede convertirse en tu negocio
            </h2>
            <p className="text-emerald-100 text-lg leading-relaxed">
              Únete a un movimiento de salud natural. Comparte productos que funcionan y construye ingresos residuales con un modelo probado.
            </p>
            
            <div className="pt-4">
              <Button variant="secondary" className="group flex items-center gap-2">
                Quiero ser Embajador/a
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="lg:w-7/12 grid sm:grid-cols-2 gap-6">
            {BUSINESS_FEATURES.map((feature, idx) => {
              const Icon = IconMap[feature.icon];
              return (
                <div key={idx} className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl hover:bg-white/15 transition-colors">
                  <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center text-emerald-300 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-emerald-100/80 text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};