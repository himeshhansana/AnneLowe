import React from "react";
import { Link } from "react-router-dom";
import { CheckIcon } from "lucide-react";
import { Button } from "../components/Button";
export const Pricing = () => {
  const packages = [{
    name: "Basic",
    price: "$299",
    description: "Perfect for individual portraits and small events",
    features: ["2-hour photo session", "50 edited digital photos", "Online gallery", "Digital download", "Print release"]
  }, {
    name: "Premium",
    price: "$599",
    description: "Ideal for engagements and family sessions",
    features: ["4-hour photo session", "100 edited digital photos", "Online gallery", "Digital download", "Print release", "2 outfit changes", "Multiple locations"]
  }, {
    name: "Wedding",
    price: "$2,499",
    description: "Complete wedding day coverage",
    features: ["8-hour wedding coverage", "300+ edited digital photos", "Online gallery", "Digital download", "Print release", "Engagement session", "Second photographer", "Wedding timeline planning"]
  }];
  return <div className="pt-24 pb-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-light text-center mb-8 text-gray-900">
          Our Packages
        </h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-16">
          Choose the perfect package for your photography needs. All packages
          include high-resolution digital images and a personal usage license.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => <div key={index} className="bg-white p-8 rounded-lg shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-2xl font-medium mb-2 text-gray-900">
                {pkg.name}
              </h3>
              <p className="text-4xl font-light mb-4 text-gray-900">
                {pkg.price}
              </p>
              <p className="text-gray-600 mb-6">{pkg.description}</p>
              <div className="space-y-4 mb-8">
                {pkg.features.map((feature, featureIndex) => <div key={featureIndex} className="flex items-center">
                    <CheckIcon className="w-5 h-5 text-gray-600 mr-2" />
                    <span className="text-gray-600">{feature}</span>
                  </div>)}
              </div>
              <Link to="/contact">
                <Button variant="primary" className="w-full">
                  Book Now
                </Button>
              </Link>
            </div>)}
        </div>
        <div className="mt-24 bg-gray-50 p-8 rounded-lg">
          <h2 className="text-2xl font-light text-center mb-8 text-gray-900">
            Additional Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            service: "Additional Hour",
            price: "$150/hour"
          }, {
            service: "Extra Edited Photos",
            price: "$75/25 photos"
          }, {
            service: "Rush Editing",
            price: "$200"
          }].map((item, index) => <div key={index} className="text-center p-6 bg-white rounded-lg shadow-sm">
                <h3 className="font-medium mb-2 text-gray-900">
                  {item.service}
                </h3>
                <p className="text-gray-600">{item.price}</p>
              </div>)}
          </div>
        </div>
        <div className="mt-24 text-center">
          <h2 className="text-2xl font-light mb-6 text-gray-900">
            Need a Custom Package?
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We understand that every event is unique. Contact us to create a
            custom package that perfectly fits your needs.
          </p>
          <Link to="/contact">
            <Button variant="secondary">Contact Us</Button>
          </Link>
        </div>
      </div>
    </div>;
};