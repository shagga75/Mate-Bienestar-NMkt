export interface Product {
  id: string;
  name: string;
  description: string;
  ingredients: string[];
  benefits: string[];
  image: string;
  cta: string;
  icon: 'leaf' | 'zap' | 'droplets';
}

export interface Pack {
  id: string;
  name: string;
  items: string[];
  highlight?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  avatar: string;
}

export interface BusinessFeature {
  title: string;
  description: string;
  icon: 'repeat' | 'users' | 'trending' | 'heart';
}