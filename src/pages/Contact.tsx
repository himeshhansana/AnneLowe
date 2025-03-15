import React from "react";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from "lucide-react";
import { Button } from "../components/Button";
export const Contact = () => {
  return <div className="pt-24 pb-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-light text-gray-900">
            Let's Work Together
          </h1>
          <p className="text-gray-600">
            Have a question or want to book a session? We'd love to hear from
            you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
          {/* Contact Information Cards */}
          <div className="space-y-6">
            <div className="p-6 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md group">
              <div className="flex items-start">
                <div className="p-3 transition-colors rounded-lg bg-gray-50 group-hover:bg-gray-100">
                  <MapPinIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 font-medium text-gray-900">Visit Us</h3>
                  <p className="text-gray-600">
                    123 Photography Lane
                    <br />
                   werona
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md group">
              <div className="flex items-start">
                <div className="p-3 transition-colors rounded-lg bg-gray-50 group-hover:bg-gray-100">
                  <PhoneIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 font-medium text-gray-900">Call Us</h3>
                  <p className="text-gray-600">(123) 456-7890</p>
                  <p className="mt-1 text-sm text-gray-500">
                    Mon-Fri, 9am-6pm EST edwidbu dwqjk
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6 transition-shadow bg-white border border-gray-100 rounded-lg shadow-sm hover:shadow-md group">
              <div className="flex items-start">
                <div className="p-3 transition-colors rounded-lg bg-gray-50 group-hover:bg-gray-100">
                  <MailIcon className="w-6 h-6 text-gray-600" />
                </div>
                <div className="ml-4">
                  <h3 className="mb-1 font-medium text-gray-900">Email Us</h3>
                  <p className="text-gray-600">Annelove@-photography.com</p>
                  <p className="mt-1 text-sm text-gray-500">
                    We'll respond within 24 hours
                  </p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <form className="space-y-6">
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input type="text" className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400" placeholder="John" />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input type="text" className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400" placeholder="Doe" />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input type="email" className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400" placeholder="john@example.com" />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Service Interested In
                  </label>
                  <select className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400">
                    <option value="">Select a service</option>
                    <option value="wedding">Wedding Photography</option>
                    <option value="portrait">Portrait Session</option>
                    <option value="event">Event Coverage</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea rows={4} className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400" placeholder="Tell us about your project..." />
                </div>
                <Button type="submit" variant="primary" className="w-full group">
                  <span className="flex items-center justify-center">
                    Send Message
                    <SendIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="p-8 mt-16 rounded-lg bg-gray-50">
          <h2 className="mb-8 text-2xl font-light text-center text-gray-900">
            Our Location
          </h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="flex items-center justify-center w-full h-full text-gray-500 bg-gray-200">
              Map placeholder - Add your preferred map service here
            </div>
          </div>
        </div>
      </div>
    </div>;
};