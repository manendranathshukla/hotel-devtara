import React from 'react';
import { Room } from '../types';
import { BOOKING_URL } from '../constants';
import { User, Check } from 'lucide-react';

interface RoomsProps {
  rooms: Room[];
}

const Rooms: React.FC<RoomsProps> = ({ rooms }) => {
  return (
    <section id="rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-devtara-green mb-4">Our Accommodations</h2>
          <div className="w-24 h-1 bg-devtara-pink mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {rooms.map((room) => (
            <div key={room.id} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
              <div className="relative h-64 overflow-hidden group">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-devtara-gold text-white px-3 py-1 font-bold rounded-sm shadow-md">
                  {room.price} <span className="text-xs font-normal">/ night</span>
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-serif font-bold text-devtara-green mb-2">{room.name}</h3>
                <div className="flex items-center text-gray-500 text-sm mb-4">
                  <User size={16} className="mr-1" />
                  <span>{room.capacity}</span>
                </div>
                
                <p className="text-gray-600 mb-6 text-sm flex-grow">
                  {room.description}
                </p>

                <div className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-700">
                      <Check size={14} className="text-devtara-green mr-2" />
                      {feature}
                    </div>
                  ))}
                </div>

                <a 
                  href={BOOKING_URL} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center py-3 bg-devtara-green text-white font-bold uppercase tracking-wider hover:bg-red-800 transition-colors rounded-sm"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
           <p className="text-gray-500 italic">Prices may vary based on season and availability. Click 'Book Now' for real-time rates.</p>
        </div>
      </div>
    </section>
  );
};

export default Rooms;