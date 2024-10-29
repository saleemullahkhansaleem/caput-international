import React from 'react';

export default function AboutUs() {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="container mx-auto">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">About Us</h1>
        
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 leading-relaxed">
            Since 2008, CAPUT International has built a reputation on the principles of <strong>no compromise on quality, service, and commitment</strong>. 
            Our dedicated team and client-centered approach have established long-term partnerships across industries, consistently adhering to the best practices in project management and execution.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h2>
            <p className="text-gray-700">To provide unmatched assistance to our clients by offering tailored solutions that meet unique business needs.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h2>
            <p className="text-gray-700">We are committed to fostering competitiveness and ensuring timely task execution, with no compromise on quality.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Our Business Statement</h2>
            <p className="text-gray-700">Honesty – Service – Growing Together. We believe in pursuing mutually beneficial goals and continuously strive to create value for our clients in a challenging world.</p>
          </div>
        </div>

        <div className="text-center mb-8">
          <h2 className="text-3xl font-semibold text-gray-800 mb-6">What We Do</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg p-6">
              <img src={service.image} alt={service.title} className="w-full h-32 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-bold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};


const services = [
  {
    title: "Event Management",
    image: "/services/service1.webp",
    description: "Unique, out-of-the-box solutions tailored to make every event a memorable experience."
  },
  {
    title: "Vendor Services",
    image: "/services/service2.webp",
    description: "Cost-effective vendor management with quality-focused delivery."
  },
  {
    title: "Presence in Oil & Gas Sector",
    image: "/services/service3.webp",
    description: "Strategic operations and consulting in the oil and gas industry."
  },
  {
    title: "Branding & Advertising",
    image: "/services/service4.webp",
    description: "Innovative growth-focused strategies to elevate brands and ensure client success."
  },
  {
    title: "Facility Management Services",
    image: "/services/service5.webp",
    description: "Professional and courteous service management for a lasting organizational image."
  },
  {
    title: "Construction",
    image: "/services/service6.webp",
    description: "Upcoming construction services focusing on quality and client satisfaction."
  },
  {
    title: "Property Advisors",
    image: "/services/service7.webp",
    description: "Expert real estate and investment advisory based in Islamabad’s Blue Area."
  },
  {
    title: "Mines & Minerals",
    image: "/services/service8.webp",
    description: "Consulting and management expertise in the mining sector."
  }
];
