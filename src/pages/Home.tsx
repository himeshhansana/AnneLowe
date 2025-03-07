import React from "react";
import { Link } from "react-router-dom";
import { HeroSlider } from "../components/HeroSlider";
import { Button } from "../components/Button";
import { CameraIcon, UserIcon, HeartIcon, ImageIcon } from "lucide-react";
export const Home = () => {
  return <div className="w-full">
      <HeroSlider />
      <section className="px-4 py-24 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="mb-8 text-3xl font-light text-gray-900">
            Welcome to Anne Lowe Photography
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-600">
            With over a decade of experience capturing life's most precious
            moments, we specialize in creating timeless photographs that tell
            your unique story.
          </p>
          <Link to="/about">
            <Button variant="secondary">Learn More</Button>
          </Link>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-3xl font-light text-center text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {[{
            icon: <CameraIcon size={32} />,
            title: "Wedding Photography",
            description: "Capturing your special day with elegance and style"
          }, {
            icon: <UserIcon size={32} />,
            title: "Portrait Sessions",
            description: "Professional portraits that reflect your personality"
          }, {
            icon: <HeartIcon size={32} />,
            title: "Engagement Photos",
            description: "Celebrating your love story with beautiful imagery"
          }, {
            icon: <ImageIcon size={32} />,
            title: "Event Coverage",
            description: "Documenting your special events and celebrations"
          }].map((service, index) => <div key={index} className="p-6 text-center bg-white rounded-lg shadow-sm">
                <div className="flex justify-center mb-4 text-gray-600">
                  {service.icon}
                </div>
                <h3 className="mb-2 text-xl font-medium text-gray-900">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-24 bg-white">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-3xl font-light text-center text-gray-900">
            Featured Work
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[{
            image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80",
            category: "Weddings",
            title: "Sarah & John's Wedding"
          }, {
            image: "https://images.unsplash.com/photo-1521577352947-9bb58764b69a?auto=format&fit=crop&q=80",
            category: "Portraits",
            title: "Studio Portraits"
          }, {
            image: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80",
            category: "Events",
            title: "Corporate Gala"
          }].map((work, index) => <div key={index} className="cursor-pointer group">
                <div className="overflow-hidden rounded-lg shadow-sm">
                  <img src={work.image} alt={work.title} className="object-cover w-full transition-transform duration-700 h-80 group-hover:scale-110" />
                </div>
                <div className="mt-4">
                  <p className="text-sm text-gray-500">{work.category}</p>
                  <h3 className="text-lg font-medium text-gray-900">
                    {work.title}
                  </h3>
                </div>
              </div>)}
          </div>
          <div className="mt-12 text-center">
            <Link to="/gallery">
              <Button variant="primary">View All Work</Button>
            </Link>
          </div>
        </div>
      </section>
      <section className="py-24 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-16 text-3xl font-light text-center text-gray-900">
            Client Testimonials
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[{
            quote: "Working with LENS was an absolute pleasure. They captured our wedding day perfectly!",
            author: "Emily & James",
            role: "Wedding Clients"
          }, {
            quote: "The portrait session exceeded my expectations. The photos are absolutely stunning!",
            author: "Sarah Thompson",
            role: "Portrait Client"
          }, {
            quote: "Professional, creative, and a joy to work with. Highly recommended!",
            author: "Michael Roberts",
            role: "Corporate Client"
          }].map((testimonial, index) => <div key={index} className="p-6 bg-white rounded-lg shadow-sm">
                <p className="mb-4 italic text-gray-600">
                  "{testimonial.quote}"
                </p>
                <p className="font-medium text-gray-900">
                  {testimonial.author}
                </p>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>)}
          </div>
        </div>
      </section>
      <section className="py-24 text-white bg-gray-900">
        <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
          <h2 className="mb-8 text-3xl font-light">
            Ready to Create Something Beautiful?
          </h2>
          <p className="max-w-2xl mx-auto mb-12 text-gray-300">
            Let's work together to capture your special moments. Contact us
            today to discuss your photography needs.
          </p>
          <div className="flex justify-center gap-4">
            <Link to="/contact">
              <button className="px-8 py-3 text-gray-900 transition-colors bg-white rounded-md shadow-sm hover:bg-gray-100 hover:shadow">
                Get in Touch
              </button>
            </Link>
            <Link to="/pricing">
              <button className="px-8 py-3 text-white transition-colors bg-transparent border-2 border-white rounded-md hover:bg-white/10">
                View Pricing
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>;
};