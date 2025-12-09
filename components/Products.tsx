import React from 'react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { Button } from './Button';
import { Leaf, Zap, Droplets, Check } from 'lucide-react';

const IconMap = {
  leaf: Leaf,
  zap: Zap,
  droplets: Droplets
};

const ProductCard: React.FC<{ product: Product, index: number }> = ({ product, index }) => {
  const Icon = IconMap[product.icon];
  const isEven = index % 2 === 0;

  return (
    <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16 py-16 lg:py-24 border-b border-earth-medium last:border-0`}>
      
      {/* Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <div className="relative group">
            <div className={`absolute inset-0 bg-mate-light rounded-full transform scale-90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl`}></div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="relative z-10 w-64 md:w-80 lg:w-96 drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105"
            />
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2 space-y-6 text-center lg:text-left">
        <div className="flex items-center justify-center lg:justify-start gap-3">
          <div className="p-3 bg-white rounded-full shadow-sm text-mate-dark">
            <Icon size={24} />
          </div>
          <span className="text-sm font-bold tracking-widest text-mate-dark uppercase">
            {product.description}
          </span>
        </div>
        
        <h3 className="text-4xl font-serif font-bold text-mate-deep">
          {product.name}
        </h3>
        
        <div className="space-y-4">
          <p className="text-lg font-medium text-stone-700">
             {product.ingredients.join(' + ')}
          </p>
          
          <ul className="space-y-2 inline-block text-left mx-auto">
            {product.benefits.map((benefit, idx) => (
              <li key={idx} className="flex items-start gap-3 text-stone-600">
                <Check className="text-mate-DEFAULT mt-1 flex-shrink-0" size={18} />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-4">
          <Button variant="primary">
            {product.cta}
          </Button>
        </div>
      </div>
    </div>
  );
};

export const Products: React.FC = () => {
  return (
    <section id="products" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-serif font-bold text-mate-deep mb-6">
            Línea Mate Bienestar
          </h2>
          <p className="text-xl text-stone-600">
            Energía, digestión y control de peso en un mismo sistema. 
            Los tres productos funcionan de manera individual o combinada, 
            ofreciendo bienestar diario y un modelo simple de Network Marketing.
          </p>
        </div>

        <div className="flex flex-col">
          {PRODUCTS.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

      </div>
    </section>
  );
};