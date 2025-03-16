import React, { useState, useEffect } from "react";
import { MapPinIcon, PhoneIcon, MailIcon, SendIcon } from "lucide-react";
import { Button } from "../components/Button";
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const [isSent, setIsSent] = useState(false);
  const [isError, setIsError] = useState(false);

  // Check local storage for submission status on component mount
  useEffect(() => {
    const sentStatus = localStorage.getItem("isSent");
    if (sentStatus === "true") {
      setIsSent(true);
      // Clear the status from local storage after displaying the message
      setTimeout(() => {
        localStorage.removeItem("isSent");
        setIsSent(false);
      }, 5000); // Remove after 5 seconds
    }
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      first_name: (e.currentTarget.elements.namedItem("first_name") as HTMLInputElement).value,
      last_name: (e.currentTarget.elements.namedItem("last_name") as HTMLInputElement).value,
      email: (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value,
      service: (e.currentTarget.elements.namedItem("service") as HTMLSelectElement).value,
      message: (e.currentTarget.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    emailjs
      .send(
        "service_1cxqm3w", // Replace with your EmailJS Service ID
        "template_0xzg4q9", // Replace with your EmailJS Template ID
        formData,
        "mC3JeVL1SLnDC4CO1" // Replace with your EmailJS Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setIsSent(true); // Show success message
          setIsError(false);
          e.currentTarget.reset(); // Reset the form fields

          // Store submission status in local storage
          localStorage.setItem("isSent", "true");

          // Remove the status from local storage after 5 seconds
          setTimeout(() => {
            localStorage.removeItem("isSent");
            setIsSent(false);
          }, 5000); // 5 seconds
        },
        (error) => {
          console.log("FAILED...", error);
          setIsError(true); // Show error message
          setIsSent(false);
        }
      );
  };

  return (
    <div className="pt-24 pb-16 bg-white">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto mb-16 text-center">
          <h1 className="mb-4 text-4xl font-light text-gray-900">Let's Work Together</h1>
          <p className="text-gray-600">
            Have a question or want to book a session? We'd love to hear from you. Send us a
            message and we'll respond as soon as possible.
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
                    Acilia
                    <br />
                    Rome
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
                  <p className="text-gray-600"></p>
                  <p className="mt-1 text-sm text-gray-500">24 x 7 availability</p>
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
                  <p className="text-gray-600">annslowe@icloud.com</p>
                  <p className="mt-1 text-sm text-gray-500">We'll respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 bg-white border border-gray-100 rounded-lg shadow-sm">
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      First Name
                    </label>
                    <input
                      type="text"
                      name="first_name"
                      className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                      placeholder="John"
                      required
                    />
                  </div>
                  <div>
                    <label className="block mb-1 text-sm font-medium text-gray-700">
                      Last Name
                    </label>
                    <input
                      type="text"
                      name="last_name"
                      className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                      placeholder="Doe"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block mb-1 text-sm font-medium text-gray-700">
                    Service Interested In
                  </label>
                  <select
                    name="service"
                    className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    required
                  >
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
                  <textarea
                    rows={4}
                    name="message"
                    className="w-full px-4 py-2 transition-colors border border-gray-200 rounded-md focus:ring-2 focus:ring-gray-200 focus:border-gray-400"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
                <Button type="submit" variant="primary" className="w-full group">
                  <span className="flex items-center justify-center">
                    Send Message
                    <SendIcon className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </span>
                </Button>
              </form>
              {isSent && (
                <div className="mt-4 text-green-600">Message sent successfully!</div>
              )}
              {isError && (
                <div className="mt-4 text-red-600">Failed to send message. Please try again.</div>
              )}
            </div>
          </div>
        </div>
        {/* Map Section */}
        <div className="p-8 mt-16 rounded-lg bg-gray-50">
          <h2 className="mb-8 text-2xl font-light text-center text-gray-900">Our Location</h2>
          <div className="h-[400px] bg-gray-200 rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.8354345093747!2d144.9537353153166!3d-37.81627974202167!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d8a32f7f8c8!2sFederation%20Square!5e0!3m2!1sen!2sus!4v1625070000000!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
};