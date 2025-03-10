import React from "react";
import OwnerFooter from "../../components/OwnerFooter";

const Notifications = () => {
  return (
    <div>
      {/* Navbar */}

      {/* Main Content */}
      <div className="container mx-auto p-6">
        <h2 className="text-3xl font-bold mb-4">Customer Notifications</h2>
        <p className="text-lg text-gray-700 mb-8">
          View and manage requests made by customers.
        </p>

        {/* Notifications List */}
        <div className="space-y-4">
          {/* Notification Item */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Request for more details on Property #1023</p>
              <span className="text-sm text-gray-500">Feb 17, 2025</span>
            </div>
            <p className="text-gray-700 mb-4">
              A customer has requested more details regarding Property #1023. They would like to know more about the amenities and the available parking spots.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-600 text-white p-4 rounded-lg hover:bg-teal-700 transition">
                View Request
              </button>
              <button className="bg-gray-500 text-white p-4 rounded-lg hover:bg-gray-600 transition">
                Mark as Read
              </button>
            </div>
          </div>

          {/* Notification Item */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Inquiry about Property #1050</p>
              <span className="text-sm text-gray-500">Feb 16, 2025</span>
            </div>
            <p className="text-gray-700 mb-4">
              A customer has inquired about the price and the payment plans for Property #1050. They are interested in scheduling a viewing soon.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-600 text-white p-4 rounded-lg hover:bg-teal-700 transition">
                View Request
              </button>
              <button className="bg-gray-500 text-white p-4 rounded-lg hover:bg-gray-600 transition">
                Mark as Read
              </button>
            </div>
          </div>

          {/* Notification Item */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Customer Interest in Property #1087</p>
              <span className="text-sm text-gray-500">Feb 14, 2025</span>
            </div>
            <p className="text-gray-700 mb-4">
              A customer is interested in Property #1087. They would like to arrange a meeting with you to discuss further details.
            </p>
            <div className="flex gap-4">
              <button className="bg-teal-600 text-white p-4 rounded-lg hover:bg-teal-700 transition">
                View Request
              </button>
              <button className="bg-gray-500 text-white p-4 rounded-lg hover:bg-gray-600 transition">
                Mark as Read
              </button>
            </div>
          </div>
        </div>
      </div>

      <OwnerFooter />
    </div>
  );
};

export default Notifications;
