import React from 'react';
import { Hero } from './components/Hero';
import { Products } from './components/Products';
import { Packs } from './components/Packs';
import { Business } from './components/Business';
import { Testimonials } from './components/Testimonials';
import { Footer } from './components/Footer';
import { Button } from './components/Button';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-mate-light selection:text-mate-deep">
      {/* Navigation (Simple Sticky) */}
      <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-earth-medium/50">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl md:text-2xl font-serif font-bold text-mate-deep tracking-tight">
            Mate<span className="text-mate-DEFAULT">Bienestar</span>
          </div>
          <div className="hidden md:flex items-center gap-6">
            <a href="#products" className="text-stone-600 hover:text-mate-deep font-medium transition-colors">Productos</a>
            <a href="#business" className="text-stone-600 hover:text-mate-deep font-medium transition-colors">Oportunidad</a>
            <Button variant="primary" className="!py-2 !px-6 !text-sm">Unirse</Button>
          </div>
          <div className="md:hidden">
            <Button variant="primary" className="!py-2 !px-4 !text-xs">Unirse</Button>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <Hero />
        <Products />
        <Packs />
        <Business />
        <Testimonials />
        
        {/* Final CTA */}
        <section className="py-24 bg-earth-medium relative overflow-hidden">
          <div className="container mx-auto px-6 text-center relative z-10">
             <h2 className="text-4xl md:text-6xl font-serif font-bold text-mate-deep mb-8">
               ¿Listo para empezar tu cambio?
             </h2>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Button variant="primary" className="text-lg px-10 py-4">
                 Quiero mis productos
               </Button>
               <Button variant="white" className="text-lg px-10 py-4 text-stone-800 border-2 border-stone-800 hover:bg-stone-800 hover:text-white hover:border-stone-800">
                 Quiero unirme al equipo
               </Button>
             </div>
          </div>
          {/* Decor */}
          <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-64 h-64 bg-mate-DEFAULT opacity-10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;