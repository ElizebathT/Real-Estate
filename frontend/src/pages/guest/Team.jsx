import React from 'react';

const Team = () => {
  return (
    <section className="text-center py-16 bg-gray-100">
      <h1 className="text-4xl font-semibold mb-12">Meet Our Team</h1>
      <div className="flex justify-center gap-10">
        <div className="bg-white p-6 rounded-lg shadow-lg w-60">
          <img src="/images/5.png" alt="Team Member 1" className="w-full h-48 object-cover rounded-full mb-4"/>
          <h3 className="text-xl font-semibold mb-2">John Doe</h3>
          <p className="text-gray-600">CEO</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-60">
          <img src="/images/4.png" alt="Team Member 2" className="w-full h-48 object-cover rounded-full mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
          <p className="text-gray-600">Developer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg w-60">
          <img src="/images/3.png" alt="Team Member 3" className="w-full h-48 object-cover rounded-full mb-4"/>
          <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
          <p className="text-gray-600">Designer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
