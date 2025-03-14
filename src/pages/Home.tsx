import React from "react";
import { Link } from "react-router-dom";
import { HeroSlider } from "../components/HeroSlider";
import { Button } from "../components/Button";
import { CameraIcon, UserIcon, HeartIcon, ImageIcon } from "lucide-react";
import { motion } from "framer-motion"; // Import framer-motion

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      <HeroSlider />
      {/* Welcome Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8"
      >
        <div className="text-center">
          {/* Animated Heading */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0], // Fade in and out
              transition: {
                duration: 4, // Duration of one loop
                repeat: Infinity, // Loop indefinitely
                repeatType: "mirror", // Smooth back-and-forth
                ease: "easeInOut",
              },
            }}
            className="mb-8 text-3xl font-bold text-gray-900 t bold"
          >
            Welcome to Anne Lowe Photography
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 0], // Fade in and out
              transition: {
                duration: 4, // Duration of one loop
                repeat: Infinity, // Loop indefinitely
                repeatType: "mirror", // Smooth back-and-forth
                ease: "easeInOut",
                delay: 2, // Staggered delay for paragraph
              },
            }}
            className="max-w-2xl mx-auto mb-12 text-gray-600"
          >
            With over a decade of experience capturing life's most precious moments,
            we specialize in creating timeless photographs that tell your unique story.
          </motion.p>

          {/* Button */}
          <Link to="/about">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-24 bg-gray-900 bg-gradient-to-br to-blue-50"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                icon: <CameraIcon size={40} className="text-purple-600" />,
                title: "Wedding Photography",
                description: "Capturing your special day with elegance and style",
                borderColor: "border-purple-200", // Outline color for this card
              },
              {
                icon: <UserIcon size={40} className="text-blue-600" />,
                title: "Portrait Sessions",
                description: "Professional portraits that reflect your personality",
                borderColor: "border-blue-200", // Outline color for this card
              },
              {
                icon: <HeartIcon size={40} className="text-pink-600" />,
                title: "Engagement Photos",
                description: "Celebrating your love story with beautiful imagery",
                borderColor: "border-pink-200", // Outline color for this card
              },
              {
                icon: <ImageIcon size={40} className="text-teal-600" />,
                title: "Event Coverage",
                description: "Documenting your special events and celebrations",
                borderColor: "border-teal-200", // Outline color for this card
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                animate={{
                  scale: [1, 1.05, 1],
                  rotate: [0, 5, -5, 0],
                  transition: {
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                  },
                }}
                transition={{ duration: 0.6, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`p-8 text-center bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 border-2 ${service.borderColor}`}
              >
                <div className="flex justify-center mb-6">
                  {service.icon}
                </div>
                <h3 className="mb-4 text-2xl font-semibold text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Featured Work Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-24 bg-white"
      >
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-4xl font-bold text-center text-gray-900">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
                category: "Weddings",
                title: "Sarah & John's Wedding",
              },
              {
                image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&q=80",
                category: "Portraits",
                title: "Studio Portraits",
              },
              {
                image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
                category: "Events",
                title: "Corporate Gala",
              },
            ].map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="cursor-pointer group"
              >
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="object-cover w-full transition-transform duration-700 h-80 group-hover:scale-110"
                  />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{work.category}</p>
                  <h3 className="text-lg font-medium text-gray-900">
                    {work.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery">
              <Button variant="primary">View All Work</Button>
            </Link>
          </div>
        </div>
      </motion.section>

      {/* Call to Action Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="py-24 text-white bg-gray-900"
      >
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          {/* Animated Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mb-8 text-3xl font-light"
          >
            Ready to Create Something Beautiful?
          </motion.h2>

          {/* Animated Paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto mb-12 text-gray-300"
          >
            Let's work together to capture your special moments. Contact us today to
            discuss your photography needs.
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center gap-4"
          >
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 text-gray-900 transition-colors bg-white rounded-md shadow-sm hover:bg-gray-100 hover:shadow"
              >
                Get in Touch
              </motion.button>
            </Link>
            <Link to="/pricing">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0px 5px 15px rgba(255, 255, 255, 0.2)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="px-8 py-3 text-white transition-colors bg-transparent border-2 border-white rounded-md hover:bg-white/10"
              >
                View Pricing
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};