import React, { useState, useEffect } from 'react';
import { Heart, Clock } from 'lucide-react';

// Cherry Blossom Palette:
// Primary Pink: #FFB7C5 (light pink)
// Deep Pink: #FF8FA3 (darker pink)
// Accent: #674846 (brown)
// Background: #FFF0F3 (very light pink)
// Text: #4A1D1F (dark brown)

const primaryColor = '#FFB7C5';
const deepColor = '#FF8FA3';
const accentColor = '#674846';
const backgroundColor = '#FFF0F3';
const textColor = '#4A1D1F';

const App = () => {
  const [timeTogether, setTimeTogether] = useState({
    years: 0,
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Set your anniversary date here
  const anniversaryDate = new Date('2023-02-14T00:00:00');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      const difference = now.getTime() - anniversaryDate.getTime();

      const years = Math.floor(difference / (1000 * 60 * 60 * 24 * 365));
      const months = Math.floor((difference % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
      const days = Math.floor((difference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeTogether({ years, months, days, hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#FFF0F3] p-8 flex flex-col items-center">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#4A1D1F] mb-4 flex items-center justify-center">
          Happy Valentine's Day
          <Heart className="ml-2 text-[#FF8FA3]" fill="#FF8FA3" />
        </h1>
        <p className="text-xl text-[#674846]">Celebrating Our Love Story</p>
      </div>

      {/* Photo Gallery */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 w-full max-w-4xl">
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Our First Date"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our First Date</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Favorite Memory"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our Favorite Memory</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Our First Date"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our First Date</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Favorite Memory"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our Favorite Memory</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Our First Date"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our First Date</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Favorite Memory"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our Favorite Memory</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Our First Date"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our First Date</p>
        </div>
        <div className="bg-[#FFB7C5] p-4 rounded-lg shadow-lg">
          <img
            src="/api/placeholder/400/300"
            alt="Favorite Memory"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-center text-[#4A1D1F] font-medium">Our Favorite Memory</p>
        </div>
      </div>

      {/* Time Counter */}
      <div className="bg-white rounded-xl shadow-lg p-8 mb-12 w-full max-w-2xl">
        <div className="flex items-center justify-center mb-4">
          <Clock className="text-[#FF8FA3] mr-2" />
          <h2 className="text-2xl font-bold text-[#4A1D1F]">Time Together</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-center">
          {Object.entries(timeTogether).map(([unit, value]) => (
            <div key={unit} className="bg-[#FFB7C5] p-4 rounded-lg">
              <div className="text-2xl font-bold text-[#4A1D1F]">{value}</div>
              <div className="text-[#674846] capitalize">{unit}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Love Note */}
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-2xl">
        <h2 className="text-2xl font-bold text-[#4A1D1F] mb-4 text-center">Our Love Note</h2>
        <p className="text-[#674846] text-center italic">
          "Every moment with you feels like a beautiful cherry blossom - delicate, precious, and absolutely perfect.
          Thank you for filling my life with love and joy."
        </p>
      </div>
    </div>
  );
};

export default App;