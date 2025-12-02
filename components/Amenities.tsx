import React from 'react';
import { Wifi, Car, Wind, Coffee, Utensils, ShieldCheck } from 'lucide-react';
import { Amenity } from '../types';

const amenitiesList: Amenity[] = [
  { id: '1', name: 'High-Speed Wifi', icon: 'wifi', description: 'Stay connected with our complimentary gigabit internet.' },
  { id: '2', name: 'Secure Parking', icon: 'car', description: 'Ample and secure parking space for your vehicle.' },
  { id: '3', name: 'Air Conditioning', icon: 'wind', description: 'Climate controlled rooms for your ultimate comfort.' },
  { id: '4', name: 'Room Service', icon: 'coffee', description: '24/7 room service for late night cravings.' },
  { id: '5', name: 'In-House Dining', icon: 'utensils', description: 'Exquisite culinary delights prepared by top chefs.' },
  { id: '6', name: '24/7 Security', icon: 'shield', description: 'Your safety is our priority with round-the-clock surveillance.' },
];

const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'wifi': return <Wifi className="w-8 h-8" />;
    case 'car': return <Car className="w-8 h-8" />;
    case 'wind': return <Wind className="w-8 h-8" />;
    case 'coffee': return <Coffee className="w-8 h-8" />;
    case 'utensils': return <Utensils className="w-8 h-8" />;
    case 'shield': return <ShieldCheck className="w-8 h-8" />;
    default: return <Sparkles className="w-8 h-8" />;
  }
};

import { Sparkles } from 'lucide-react';

const Amenities: React.FC = () => {
  return (
    <section id="amenities" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-serif font-bold text-devtara-green mb-4">World Class Amenities</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-16">
          Everything you need for a luxurious and comfortable stay at Hotel Devtara.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesList.map((amenity) => (
            <div 
              key={amenity.id} 
              className="p-8 rounded-xl border border-gray-100 hover:border-devtara-gold/50 hover:shadow-xl transition-all duration-300 group bg-devtara-cream/30"
            >
              <div className="inline-block p-4 rounded-full bg-devtara-softPink text-devtara-pink mb-6 group-hover:bg-devtara-pink group-hover:text-white transition-colors duration-300">
                {getIcon(amenity.icon)}
              </div>
              <h3 className="text-xl font-serif font-bold text-gray-800 mb-3">{amenity.name}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;