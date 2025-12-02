import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Amenities from './components/Amenities';
import Rooms from './components/Rooms';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { generateHotelDetails } from './services/geminiService';
import { INITIAL_CONTENT } from './constants';
import { HotelContent } from './types';
import { RefreshCw } from 'lucide-react';

const App: React.FC = () => {
  const [content, setContent] = useState<HotelContent>(INITIAL_CONTENT);
  const [loading, setLoading] = useState(false);

  const fetchAIContent = async () => {
    setLoading(true);
    const aiData = await generateHotelDetails();
    setContent(aiData);
    setLoading(false);
  };

  useEffect(() => {
    // Optionally fetch on mount if environment variable is present
    // For now, we will just use the initial content derived from the prompt
    // but expose a button to "refresh" via AI if configured.
    if (process.env.API_KEY) {
      fetchAIContent();
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-devtara-pink selection:text-white">
      <Navbar />
      <Hero tagline={content.tagline} />
      <About description={content.about} />
      <Amenities />
      <Rooms rooms={content.rooms} />
      <Gallery />
      <Testimonials />
      <Contact />
      <Footer />

      {/* Admin/Demo Control to refresh content with Gemini */}
      {process.env.API_KEY && (
        <button 
          onClick={fetchAIContent}
          className="fixed bottom-4 right-4 bg-white p-3 rounded-full shadow-xl border border-gray-200 text-gray-600 hover:text-devtara-green hover:rotate-180 transition-all z-50 group"
          title="Refresh Content with AI"
        >
          <RefreshCw size={20} className={loading ? "animate-spin" : ""} />
        </button>
      )}
    </div>
  );
};

export default App;