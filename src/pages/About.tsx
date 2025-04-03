import sachiaboutpic from '../assets/sachi.jpg'; // If the image is in src/assets
import aboutstorypic from '../assets/about story pic.jpg'; // If the image is in src/assets
import photograferatwork from '../assets/photografer at  work.jpg'; // If the image is in src/assets
import photograferatworkEditor from '../assets/sachi akka aiya1.jpg'; // If the image is in src/assets


import React from "react";
import { Link } from "react-router-dom";
import { CameraIcon, AwardIcon, UserIcon } from "lucide-react";
import { Button } from "../components/Button";
export const About = () => {
  return <div className="pt-24 pb-16">
    {/* Hero Section */}
    <section className="px-4 mx-auto mb-24 max-w-7xl sm:px-6 lg:px-8">
      <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
        <div>
          <h1 className="mb-6 text-4xl font-light">About Sachi Lowe</h1>
          <p className="mb-6 text-gray-600">
            We are a team of passionate photographers dedicated to capturing
            life's most precious moments. With over a decade of experience,
            we've developed a style that blends artistic vision with technical
            expertise.
          </p>
          <div className="grid grid-cols-3 gap-4 mb-8">
            <div className="text-center">
              <CameraIcon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <p className="font-medium">10+ Years</p>
              <p className="text-sm text-gray-500">Experience</p>
            </div>
            <div className="text-center">
              <AwardIcon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <p className="font-medium">50+</p>
              <p className="text-sm text-gray-500">Awards Won</p>
            </div>
            <div className="text-center">
              <UserIcon className="w-8 h-8 mx-auto mb-2 text-gray-600" />
              <p className="font-medium">1000+</p>
              <p className="text-sm text-gray-500">Happy Clients</p>
            </div>
          </div>
          <Link to="/contact">
            <Button variant="primary">Get in Touch</Button>
          </Link>
        </div>
        <div>
          <img src={photograferatwork} alt="Photographer at work" className="w-full h-auto rounded-lg shadow-lg" />
        </div>
      </div>
    </section>
    {/* Our Story */}
    <section className="py-24 bg-gray-50">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-16 text-3xl font-light text-center">Our Story</h2>
        <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
          <div>
            <img src={aboutstorypic} alt="Studio equipment" className="w-full h-auto rounded-lg shadow-lg" />
          </div>
          <div>
            <p className="mb-6 text-gray-600">
              Founded in 2010, LENS Photography began as a small studio with a
              big dream: to create timeless images that tell powerful stories.
              Over the years, we've grown into a team of dedicated
              professionals, each bringing their unique perspective and
              expertise to every project.
            </p>
            <p className="mb-6 text-gray-600">
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
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-6xl px-5 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto mb-16 text-center">
          <h2 className="text-4xl font-light text-gray-900 md:text-5xl">
            Meet Our Team
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            The creative professionals behind your perfect moments
          </p>
        </div>

        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:gap-20">
          {[{
            name: "Shiwantha",
            role: "Editor",
            image: photograferatworkEditor,
            bio: "Photo editor specializing in natural light & lifestyle imagery. Enhancing your moments with warmth, authenticity, and attention to detail."
          }, {
            name: "Sachi",
            role: "Senior Photographer",
            image: sachiaboutpic,
            bio: "Senior Photographer specializing in natural light & lifestyle imagery. Capturing authentic moments with a timeless, emotive touch."
          }].map((member, index) => (
            <div key={index} className="text-center">
              <div className="relative inline-block mb-8">
                <img
                  src={member.image}
                  alt={member.name}
                  className="object-cover w-64 h-64 rounded-full md:w-80 md:h-80"
                />
              </div>
              <h3 className="text-2xl font-medium text-gray-900">{member.name}</h3>
              <p className="mt-2 text-lg text-gray-500">{member.role}</p>
              <p className="max-w-md mx-auto mt-4 leading-relaxed text-gray-600">
                {member.bio}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
    {/* CTA Section */}
    <section className="py-24 text-white bg-gray-900">
      <div className="px-4 mx-auto text-center max-w-7xl sm:px-6 lg:px-8">
        <h2 className="mb-8 text-3xl font-light">Ready to Work Together?</h2>
        <p className="max-w-2xl mx-auto mb-12">
          Let's create something beautiful together. Contact us to discuss
          your photography needs and how we can help bring your vision to
          life.
        </p>
        <Link to="/contact">
          <button className="px-8 py-3 text-gray-900 transition-colors bg-white hover:bg-gray-100">
            Get Started
          </button>
        </Link>
      </div>
    </section>
  </div>;
};