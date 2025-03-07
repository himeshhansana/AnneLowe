import React, { useEffect, useState } from "react";
const images = ["https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80", "https://images.unsplash.com/photo-1554080353-a576cf803bda?auto=format&fit=crop&q=80"];
export const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);
  return <div className="relative h-screen">
      {images.map((image, index) => <div key={image} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"}`}>
          <div className="absolute inset-0 bg-cover bg-center" style={{
        backgroundImage: `url(${image})`
      }} />
          <div className="absolute inset-0 bg-black/40" />
        </div>)}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center text-white z-10 max-w-3xl px-4">
          <h1 className="text-4xl md:text-6xl font-light mb-6">
            Capturing Moments That Last a Lifetime
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Professional photography that tells your story
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-white text-gray-900 rounded-md hover:bg-gray-100 transition-colors">
              View Gallery
            </button>
            <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-md hover:bg-white/10 transition-colors">
              Book a Session
            </button>
          </div>
        </div>
      </div>
    </div>;
};