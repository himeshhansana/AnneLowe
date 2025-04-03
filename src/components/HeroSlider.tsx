import photograferatwork from '../assets/photografer at  work.jpg'; // If the image is in src/assets
import natural from '../assets/natural1.jpg'; // If the image is in src/assets
import event from '../assets/IMG-20250402-WA0010.jpg'; // If the image is in src/assets
import rome from '../assets/IMG-20250402-WA0011.jpg'; // If the image is in src/ass

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const images = [
  natural,
  event,
  photograferatwork,
  rome,
];

export const HeroSlider = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-screen">
      {images.map((image, index) => (
        <div
          key={image}
          className={`absolute inset-0 transition-opacity duration-1000 ${index === currentImage ? "opacity-100" : "opacity-0"
            }`}
        >
          <div
            className="absolute inset-0 bg-center bg-cover"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
      ))}

      <div className="absolute inset-0 flex items-center justify-center">
        <div className="z-10 max-w-3xl px-4 text-center text-white">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [20, 0, -20],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
              },
            }}
            className="mb-6 text-4xl font-light md:text-6xl"
          >
            Capturing Moments That Last a Lifetime
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 0],
              y: [20, 0, -20],
              transition: {
                duration: 6,
                repeat: Infinity,
                repeatType: "mirror",
                ease: "easeInOut",
                delay: 2,
              },
            }}
            className="mb-8 text-lg md:text-xl opacity-90"
          >
            Professional photography that tells your story
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <a href="gallery" className="px-8 py-3 text-gray-900 transition-colors bg-white rounded-md hover:bg-gray-100">
                View Gallery
              </a>
              <a href="contact" className="px-8 py-3 text-white transition-colors bg-transparent border-2 border-white rounded-md hover:bg-white/10">
                Book a Session
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};