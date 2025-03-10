import React from 'react';

const Services = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Our Services</h1>
        <p className="text-gray-600 mt-4">Explore the services we offer to help you find your dream property.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 px-4">
        {/* Service 1 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src="/images/banner1.jpg" alt="Property Listings" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Property Listings</h3>
          <p className="text-gray-600">Browse a wide variety of properties, from apartments to homes and commercial spaces. Find your ideal place to live or invest in.</p>
        </div>

        {/* Service 2 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src="/images/house5.jpg" alt="Real Estate Consultation" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Real Estate Consultation</h3>
          <p className="text-gray-600">Our expert consultants provide personalized guidance on property buying, selling, and investment strategies.</p>
        </div>

        {/* Service 3 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src="/images/house4.jpg" alt="Property Management" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Property Management</h3>
          <p className="text-gray-600">We offer comprehensive property management services, ensuring your properties are well-maintained and profitable.</p>
        </div>

        {/* Service 4 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src="/images/banner5.jpg" alt="Mortgage Assistance" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Mortgage Assistance</h3>
          <p className="text-gray-600">Get expert assistance with mortgage options to make the property-buying process smoother and more affordable.</p>
        </div>

        {/* Service 5 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src="/images/house1.jpg" alt="Property Investment" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Property Investment</h3>
          <p className="text-gray-600">Discover lucrative real estate investment opportunities with our tailored property investment strategies.</p>
        </div>

        {/* Service 6 */}
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-6">
            <img src="/images/banner6.jpg" alt="Home Inspection" className="w-full h-48 object-cover rounded-lg"/>
          </div>
          <h3 className="text-2xl font-semibold mb-4">Home Inspections</h3>
          <p className="text-gray-600">Get detailed home inspections to ensure your new property is in excellent condition before purchase.</p>
        </div>
      </div>
    </section>
  );
};

export default Services;
