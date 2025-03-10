import React from 'react';

const ContactPage = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-semibold">Contact Us</h1>
        <p className="text-gray-600 mt-4">We'd love to hear from you! Get in touch with us for inquiries or assistance.</p>
      </div>

      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Send a Message</h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" id="name" name="name" className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" id="email" name="email" className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea id="message" name="message" rows="4" className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
            </div>
            <button type="submit" className="w-full py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500">Send Message</button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-4">You can reach us through the following methods:</p>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Email:</h3>
            <p className="text-gray-600">contact@realestate.com</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Phone:</h3>
            <p className="text-gray-600">+123-456-7890</p>
          </div>
          <div className="mb-4">
            <h3 className="text-lg font-semibold">Office Address:</h3>
            <p className="text-gray-600">123 Real Estate St, City, Country</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
