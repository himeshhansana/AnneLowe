import React from "react";
import { Link } from "react-router-dom";
import { CameraIcon, AwardIcon, UserIcon } from "lucide-react";
import { Button } from "../components/Button";
export const About = () => {
  return <div className="pt-24 pb-16">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl font-light mb-6">About LENS</h1>
            <p className="text-gray-600 mb-6">
              We are a team of passionate photographers dedicated to capturing
              life's most precious moments. With over a decade of experience,
              we've developed a style that blends artistic vision with technical
              expertise.
            </p>
            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center">
                <CameraIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="font-medium">10+ Years</p>
                <p className="text-sm text-gray-500">Experience</p>
              </div>
              <div className="text-center">
                <AwardIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="font-medium">50+</p>
                <p className="text-sm text-gray-500">Awards Won</p>
              </div>
              <div className="text-center">
                <UserIcon className="w-8 h-8 text-gray-600 mx-auto mb-2" />
                <p className="font-medium">1000+</p>
                <p className="text-sm text-gray-500">Happy Clients</p>
              </div>
            </div>
            <Link to="/contact">
              <Button variant="primary">Get in Touch</Button>
            </Link>
          </div>
          <div>
            <img src="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?auto=format&fit=crop&q=80" alt="Photographer at work" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
        </div>
      </section>
      {/* Our Story */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-16">Our Story</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80" alt="Studio equipment" className="w-full h-auto rounded-lg shadow-lg" />
            </div>
            <div>
              <p className="text-gray-600 mb-6">
                Founded in 2010, LENS Photography began as a small studio with a
                big dream: to create timeless images that tell powerful stories.
                Over the years, we've grown into a team of dedicated
                professionals, each bringing their unique perspective and
                expertise to every project.
              </p>
              <p className="text-gray-600 mb-6">
                Our philosophy is simple: every moment matters. Whether we're
                capturing a wedding, creating corporate portraits, or
                documenting special events, we approach each assignment with
                creativity, professionalism, and attention to detail.
              </p>
              <p className="text-gray-600">
                We believe in building lasting relationships with our clients,
                understanding their vision, and delivering photographs that
                exceed their expectations.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Team Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-light text-center mb-16">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            name: "Alex Morgan",
            role: "Lead Photographer",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80",
            bio: "Specializing in wedding and portrait photography with 15 years of experience."
          }, {
            name: "Sarah Chen",
            role: "Senior Photographer",
            image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80",
            bio: "Expert in natural light photography and lifestyle shoots."
          }, {
            name: "Michael Torres",
            role: "Event Photographer",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
            bio: "Capturing corporate events and special occasions with a journalistic approach."
          }].map((member, index) => <div key={index} className="text-center">
                <img src={member.image} alt={member.name} className="w-48 h-48 rounded-full mx-auto mb-4 object-cover" />
                <h3 className="text-xl font-medium">{member.name}</h3>
                <p className="text-gray-500 mb-2">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>)}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="bg-gray-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-light mb-8">Ready to Work Together?</h2>
          <p className="max-w-2xl mx-auto mb-12">
            Let's create something beautiful together. Contact us to discuss
            your photography needs and how we can help bring your vision to
            life.
          </p>
          <Link to="/contact">
            <button className="px-8 py-3 bg-white text-gray-900 hover:bg-gray-100 transition-colors">
              Get Started
            </button>
          </Link>
        </div>
      </section>
    </div>;
};