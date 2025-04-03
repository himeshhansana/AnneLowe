import portait from '../assets/IMG-20250402-WA0010.jpg'; // If the image is in src/assets
import natural from '../assets/natural1.jpg'; // If the image is in src/assets
import see from '../assets/see.jpg'; // If the image is in src/assets
import wedding from '../assets/weddig (1).jpg'; // If the image is in src/assets
import event from '../assets/event (2).jpg'; // If the image is in src/assets



import React, { useState } from "react";
export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const categories = ["All", "Weddings", "Portraits", "Events", "Nature"];
  const images = [{
    url: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
    category: "Weddings",
    title: "Beach Wedding"
  }, {
    url: portait,
    category: "Portraits",
    title: "Studio Portrait"
  }, {
    url: event,
    category: "Events",
    title: "Corporate Event"
  }, {
    url: see,
    category: "Nature",
    title: "Mountain Lake"
  }, {
    url: wedding,
    category: "Weddings",
    title: "Church Wedding"
  }, {
    url: natural,
    category: "Portraits",
    title: "Natural Light Portrait"
  }];
  const filteredImages = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory);
  return <div className="pt-24 pb-16 bg-white">
    <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <h1 className="mb-8 text-4xl font-light text-center text-gray-900">
        Our Gallery
      </h1>
      {/* Categories */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-all ${activeCategory === category ? "bg-gray-900 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
          {category}
        </button>)}
      </div>
      {/* Image Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredImages.map((image, index) => <div key={index} className="cursor-pointer group">
          <div className="overflow-hidden rounded-lg shadow-sm">
            <img src={image.url} alt={image.title} className="object-cover w-full transition-transform duration-700 h-80 group-hover:scale-110" />
          </div>
          <div className="mt-4">
            <p className="text-sm text-gray-500">{image.category}</p>
            <h3 className="text-lg font-medium text-gray-900">
              {image.title}
            </h3>
          </div>
        </div>)}
      </div>
    </div>
  </div>;
};