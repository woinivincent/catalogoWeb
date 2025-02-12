import { Product } from '../types';

export const products: Product[] = [
  {
    id: '1',
    name: 'Pan Integral de Masa Madre',
    description: 'Pan artesanal elaborado con masa madre y harina integral orgánica',
    price: 8.50,
    image: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=800',
    category: 'bread'
  },
  {
    id: '2',
    name: 'Croissant de Espelta',
    description: 'Croissant elaborado con harina de espelta orgánica',
    price: 4.75,
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&q=80&w=800',
    category: 'pastry'
  },
  {
    id: '3',
    name: 'Tarta de Zanahoria',
    description: 'Tarta húmeda de zanahoria orgánica con frosting de queso crema',
    price: 28.00,
    image: 'https://images.unsplash.com/photo-1621303837174-89787a7d4729?auto=format&fit=crop&q=80&w=800',
    category: 'cake'
  },
  {
    id: '4',
    name: 'Galletas de Avena y Pasas',
    description: 'Galletas saludables con avena integral y pasas orgánicas',
    price: 3.50,
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?auto=format&fit=crop&q=80&w=800',
    category: 'cookie'
  }
];