import React from 'react';
import { TESTIMONIALS } from '../constants';
import { Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-bold text-mate-deep">
            Historias de Transformación
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div key={testimonial.id} className="bg-earth-light p-8 rounded-2xl relative">
              <Quote className="absolute top-6 right-6 text-mate-dark opacity-20" size={40} />
              
              <div className="flex items-center gap-4 mb-6">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-sm"
                />
                <div>
                  <h4 className="font-bold text-mate-deep">{testimonial.name}</h4>
                  <span className="text-sm text-stone-500 uppercase tracking-wide font-medium">{testimonial.role}</span>
                </div>
              </div>
              
              <p className="text-stone-700 italic leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};