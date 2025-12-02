import React from 'react';
import { IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const photos = [
    IMAGES.gallery1,
    IMAGES.gallery2,
    IMAGES.gallery3,
    IMAGES.gallery4,
    IMAGES.gallery5,
    IMAGES.gallery6,
  ];

  return (
    <section id="gallery" className="py-20 bg-devtara-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-devtara-pink font-bold uppercase tracking-widest text-sm">Visual Tour</span>
          <h2 className="text-4xl font-serif font-bold text-devtara-green mt-2">Gallery</h2>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
          {photos.map((photo, index) => (
            <div key={index} className="break-inside-avoid relative group overflow-hidden rounded-lg">
              <img 
                src={photo} 
                alt={`Gallery ${index + 1}`} 
                className="w-full h-auto object-cover rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-serif text-lg tracking-wider border-b-2 border-devtara-gold pb-1">View</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;