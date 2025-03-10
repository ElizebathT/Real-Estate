import React from 'react';

function About() {
  return (
    <div className="about py-10">
      <div className="container mx-auto px-4">
        {/* About Section */}
        <div className="about-top flex flex-wrap items-center mt-6">
          <div className="w-full md:w-5/12 p-4">
            <img src="images/about7.jpg" className="w-98 h-98 rounded-full object-cover" alt="Real Estate" />
          </div>
          <div className="w-full md:w-7/12 p-4">
            <h2 className="text-3xl font-bold text-blue-400 mb-4">Your Trusted Real Estate Partner</h2>
            <p className="text-gray-700 text-justify mb-4">
              At <span className="font-semibold text-blue-500">EstateHub</span>, we believe that finding the perfect property should be a seamless and exciting journey.  
              With years of expertise in the real estate industry, we specialize in connecting buyers, sellers, and investors  
              with exceptional opportunities. Our dedicated team provides personalized guidance, ensuring each transaction is  
              smooth, transparent, and rewarding.
            </p>
            <p className="text-gray-700 text-justify mb-7">
              Real estate is more than just buying and selling properties—it's about building communities, creating dream homes,  
              and securing futures. Whether you're searching for your ideal home, a profitable investment, or expert market insights,  
              <span className="font-semibold text-blue-500">EstateHub</span> is here to support you at every step.
            </p>
            <ul className="list-disc list-inside mt-4 text-gray-700">
              <li>Wide range of residential and commercial properties</li>
              <li>Expert guidance from industry professionals</li>
              <li>Secure and hassle-free transactions</li>
              <li>Tailored solutions to fit your unique needs</li>
              <li>Innovative tools for smarter property decisions</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Banner Section */}
      <div 
  className="about-banner bg-cover bg-center bg-no-repeat py-50 mt-10"
  style={{ backgroundImage: "url('/images/banner155.jpg')" }}
>
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-2xl font-bold text-white">Experience Excellence in Real Estate</h3>
          <p className="text-white max-w-2xl mx-auto mt-4">
            Whether you're a first-time buyer, an experienced investor, or looking to sell your property,  
            we provide tailored solutions to help you achieve your goals. Let us turn your real estate dreams into reality.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
  <h3 className="text-2xl font-bold text-center text-blue-400 mb-4">Why Choose EstateHub?</h3>
  <p className="text-gray-700 text-lg text-center max-w-3xl mx-auto mt-4">
    At EstateHub, we prioritize customer satisfaction, offering personalized real estate solutions to help you 
    find the perfect property. Our expert team ensures a seamless buying, selling, and investment experience.
  </p>
  <p className="text-gray-600 text-lg text-center max-w-3xl mx-auto mt-4">
    With a strong commitment to integrity, market expertise, and transparency, we guide our clients through every step 
    of the real estate journey, making property transactions smooth and stress-free.
  </p>
</div>

    </div>
  );
}

export default About;
