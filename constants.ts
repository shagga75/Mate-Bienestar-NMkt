import { Product, Pack, Testimonial, BusinessFeature } from './types';

export const HERO_IMAGE = "https://i.postimg.cc/28R8hW9D/20251208-2231-Herbal-Tea-Serenity-simple-compose-01kbzxxvg2ekvs5erbmm415gr6.png";

export const PRODUCTS: Product[] = [
  {
    id: "lean-balance",
    name: "Lean Balance",
    description: "Control de Peso",
    ingredients: ["Yerba Mate", "Té Verde", "Jengibre", "Menta", "Diente de León", "Naranja Amarga"],
    benefits: ["Apoya el metabolismo", "Saciedad y depuración", "Reduce hinchazón", "Mejora digestión"],
    image: "https://i.postimg.cc/6qHcJKmG/20251208-2223-Herbal-Tea-Blend-Display-simple-compose-01kbzxewmqf0p9nx1bvcw8q80n.png",
    cta: "Quiero Lean Balance",
    icon: "leaf"
  },
  {
    id: "vital-energy",
    name: "Vital Energy",
    description: "Energía Natural",
    ingredients: ["Yerba Mate", "Té", "Ginseng", "Jengibre"],
    benefits: ["Energía limpia sin crash", "Mejora concentración", "Aumenta productividad", "Ideal pre-entreno"],
    image: "https://i.postimg.cc/VLW1tVbJ/20251208-2226-Energizing-Herbal-Infusion-simple-compose-01kbzxk35yfj183jrkhcd8vg6y.png",
    cta: "Quiero Vital Energy",
    icon: "zap"
  },
  {
    id: "digest-detox",
    name: "Digest & Detox",
    description: "Digestión + Depuración",
    ingredients: ["Yerba Mate", "Menta", "Jengibre", "Diente de León"],
    benefits: ["Reduce inflamación", "Elimina pesadez", "Apoyo hepático", "Ideal post-comidas"],
    image: "https://i.postimg.cc/Gp12RyYM/20251208-2228-Herbal-Detox-Tea-simple-compose-01kbzxqaprehwtzb90kbrtgtcc.png",
    cta: "Quiero Digest & Detox",
    icon: "droplets"
  }
];

export const PACKS: Pack[] = [
  {
    id: "pack-esencial",
    name: "Pack Esencial",
    items: ["Vital Energy", "Digest & Detox"],
    highlight: false
  },
  {
    id: "pack-transformacion",
    name: "Pack Transformación",
    items: ["Lean Balance", "Vital Energy", "Digest & Detox"],
    highlight: true
  },
  {
    id: "pack-ambassador",
    name: "Pack Embajador",
    items: ["Stock completo para venta", "Material de marketing", "Muestras de degustación"],
    highlight: false
  }
];

export const BUSINESS_FEATURES: BusinessFeature[] = [
  {
    title: "Consumo Diario",
    description: "Productos que tus clientes amarán usar todos los días, generando ventas recurrentes.",
    icon: "repeat"
  },
  {
    title: "Resultados Reales",
    description: "Diferencias perceptibles en energía y bienestar que crean testimonios naturales.",
    icon: "heart"
  },
  {
    title: "Sistema Simple",
    description: "Fácil de explicar, fácil de compartir y fácil de duplicar con tu equipo.",
    icon: "trending"
  },
  {
    title: "Comunidad",
    description: "No estarás solo. Crecimiento acompañado con formación y apoyo constante.",
    icon: "users"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "t1",
    name: "Mariana S.",
    role: "Cliente Felíz",
    text: "Desde que tomo Vital Energy por las mañanas, dejé el café. Me siento enfocada todo el día sin esa ansiedad que me daba antes.",
    avatar: "https://picsum.photos/100/100?random=1"
  },
  {
    id: "t2",
    name: "Carlos R.",
    role: "Embajador",
    text: "Lean Balance ha sido clave en mi proceso de pérdida de peso. Lo recomiendo a todos mis conocidos y el negocio ha crecido solo.",
    avatar: "https://picsum.photos/100/100?random=2"
  },
  {
    id: "t3",
    name: "Fernanda L.",
    role: "Mamá y Emprendedora",
    text: "Digest & Detox me salvó de la hinchazón crónica. Me siento ligera y con ganas de hacer cosas. ¡Amo estos blends!",
    avatar: "https://picsum.photos/100/100?random=3"
  }
];