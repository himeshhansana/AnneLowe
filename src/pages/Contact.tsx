import React from "react";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from "lucide-react";
import { Button } from "../components/Button";
export const Contact = () => {
  return <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-4xl font-light mb-4 text-gray-900">
            Let's Work Together
          </h1>
          <p className="text-gray-600">
            Have a question or want to book a session? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <MapPinIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900 mb-1">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Photography Lane
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <PhoneIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="text-sm text-gray-500 mt-1">
                    Mon-Fri, 9am-6pm EST
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-md transition-shadow group">
              <div className="flex items-start">
                <div className="p-3 bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                  <MailIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="font-medium text-gray-900 mb-1">Email Us</h3>
                  <p className="text-gray-600">contact@lens-photography.com</p>
                  <p className="text-sm text-gray-500 mt-1">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      First Name
                    </label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors" placeholder="John" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Last Name
                    </label>
                    <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input type="email" className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors">
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Coverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400 transition-colors" placeholder="Tell us about your project..." />
                </div>
                <Button type="submit" variant="primary" className="w-full group">
                  <span className="flex items-center justify-center">
                    Send Message
                    <SendIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="mt-16 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-center mb-8 text-gray-900">
            Our Location
          </h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              Map placeholder - Add your preferred map service here
            </div>
          </div>
        </div>
      </div>
    </div>;
};