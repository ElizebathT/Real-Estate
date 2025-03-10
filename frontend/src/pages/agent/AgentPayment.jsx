import React, { useState } from "react";

const AgentPayment = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold mb-4">Payment</h2>
      <div className="bg-white p-6 rounded-lg shadow-md max-w-lg mx-auto">
        
        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Select Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg"
          >
            <option value="card">Credit/Debit Card</option>
            <option value="upi">UPI</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>


        {/* Payment Method Selection */}
        <div className="mb-4">
          <label className="block text-lg font-semibold mb-2">Amount</label>
          <input type="text" placeholder="Amount" className="w-full p-3 border border-gray-300 rounded-lg mb-2" />
        </div>

        {/* Payment Details */}
        {paymentMethod === "card" && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">Card Details</label>
            <input type="text" placeholder="Card Number" className="w-full p-3 border border-gray-300 rounded-lg mb-2" />
            <input type="text" placeholder="MM/YY" className="w-full p-3 border border-gray-300 rounded-lg mb-2" />
            <input type="text" placeholder="CVV" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
        )}

        {paymentMethod === "upi" && (
          <div className="mb-4">
            <label className="block text-lg font-semibold mb-2">UPI ID</label>
            <input type="text" placeholder="Enter UPI ID" className="w-full p-3 border border-gray-300 rounded-lg" />
          </div>
        )}

        {paymentMethod === "paypal" && (
          <div className="mb-4">
            <p className="text-lg">You will be redirected to PayPal to complete the payment.</p>
          </div>
        )}

        {/* Pay Button */}
        <button className="bg-green-600 text-white p-4 rounded-lg w-full hover:bg-green-700">
          Proceed to Pay
        </button>
      </div>
    </div>
  );
};

export default AgentPayment;
