import React from 'react';
import { Star, Quote } from 'lucide-react';
import { Testimonial } from '../types';

const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Jenkins',
    location: 'United Kingdom',
    comment: 'The attention to detail at Hotel Devtara is unmatched. The royal red decor creates such a majestic atmosphere.',
    rating: 5
  },
  {
    id: '2',
    name: 'Rajesh Kumar',
    location: 'Mumbai, India',
    comment: 'Excellent service and great value for money. The location is perfect for visiting local temples. Highly recommended.',
    rating: 5
  },
  {
    id: '3',
    name: 'Emily Davis',
    location: 'Australia',
    comment: 'A hidden gem! The amenities were top notch and the staff treated us like royalty. Will definitely come back.',
    rating: 4
  }
];

const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-devtara-green text-white relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Guest Experiences</h2>
          <p className="text-red-200">What our visitors have to say about their stay.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div key={t.id} className="bg-red-800/50 backdrop-blur-sm p-8 rounded-xl border border-red-700/50 relative">
              <Quote className="absolute top-4 right-4 text-devtara-gold/20 w-12 h-12" />
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    size={16} 
                    className={`${i < t.rating ? 'text-devtara-gold fill-current' : 'text-gray-500'}`} 
                  />
                ))}
              </div>
              <p className="text-gray-200 mb-6 italic leading-relaxed">"{t.comment}"</p>
              <div>
                <h4 className="font-bold text-devtara-lightGold font-serif">{t.name}</h4>
                <p className="text-xs text-red-300 uppercase tracking-wider">{t.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;