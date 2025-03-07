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
    url: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&q=80",
    category: "Portraits",
    title: "Studio Portrait"
  }, {
    url: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
    category: "Events",
    title: "Corporate Event"
  }, {
    url: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&q=80",
    category: "Nature",
    title: "Mountain Lake"
  }, {
    url: "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80",
    category: "Weddings",
    title: "Church Wedding"
  }, {
    url: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
    category: "Portraits",
    title: "Natural Light Portrait"
  }];
  const filteredImages = activeCategory === "All" ? images : images.filter(img => img.category === activeCategory);
  return <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-center mb-8 text-gray-900">
          Our Gallery
        </h1>
        {/* Categories */}
        <div className="flex justify-center flex-wrap gap-4 mb-12">
          {categories.map(category => <button key={category} onClick={() => setActiveCategory(category)} className={`px-6 py-2 rounded-full transition-all ${activeCategory === category ? "bg-gray-900 text-white shadow" : "bg-gray-100 text-gray-600 hover:bg-gray-200"}`}>
              {category}
            </button>)}
        </div>
        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredImages.map((image, index) => <div key={index} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg shadow-sm">
                <img src={image.url} alt={image.title} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-110" />
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