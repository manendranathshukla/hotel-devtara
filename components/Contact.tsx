import React, { useState } from 'react';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for contacting Hotel Devtara! We will get back to you shortly.");
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-4xl font-serif font-bold text-devtara-green mb-6">Get In Touch</h2>
            <p className="text-gray-600 mb-10 text-lg">
              Have questions about your booking? Need help planning your event? Reach out to our concierge team.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-devtara-softPink p-3 rounded-full text-devtara-pink mr-4">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Address</h4>
                  <p className="text-gray-600">Bhairahawa Airport 2, 32900 Gautam Buddha International Airport, Nepal</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-devtara-softPink p-3 rounded-full text-devtara-pink mr-4">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Phone</h4>
                  <p className="text-gray-600">+977-9827674727</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-devtara-softPink p-3 rounded-full text-devtara-pink mr-4">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-gray-800 mb-1">Email</h4>
                  <p className="text-gray-600">reservations@hoteldevtara.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-devtara-cream p-8 rounded-2xl shadow-lg border border-devtara-gold/20">
            <h3 className="text-2xl font-serif font-bold text-devtara-green mb-6">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input
                  type="text"
                  id="name"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-devtara-gold focus:ring focus:ring-devtara-gold/50 outline-none transition-all"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
                <input
                  type="email"
                  id="email"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-devtara-gold focus:ring focus:ring-devtara-gold/50 outline-none transition-all"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  value={formState.message}
                  onChange={(e) => setFormState({...formState, message: e.target.value})}
                  className="w-full px-4 py-3 rounded-md border-gray-300 shadow-sm focus:border-devtara-gold focus:ring focus:ring-devtara-gold/50 outline-none transition-all"
                  placeholder="How can we help you?"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-devtara-green text-white font-bold py-4 rounded-md hover:bg-red-800 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <Send size={18} />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;