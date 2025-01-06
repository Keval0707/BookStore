import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

const CheckoutPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { book } = location.state || {};
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    address: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    upiId: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Book purchased successfully!');
    setTimeout(() => navigate('/'), 2000);
  };

  if (!book) {
    return <div className="text-center p-8 font-medium text-gray-700">No book selected for checkout</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto max-w-2xl px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 backdrop-blur-sm backdrop-filter">
          <h1 className="text-3xl font-bold mb-8 text-gray-800 text-center">Checkout</h1>
          
          <div className="mb-8 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h2 className="font-semibold text-xl mb-4 text-gray-800">Order Summary</h2>
            <div className="space-y-2">
              <p className="text-gray-700"><span className="font-medium">Title:</span> {book.title}</p>
              <p className="text-gray-700"><span className="font-medium">Author:</span> {book.author}</p>
              <p className="text-lg font-semibold text-blue-600">Price: {book.price}</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleInputChange}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-gray-700">Shipping Address</label>
              <textarea
                name="address"
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all h-24"
                required
                onChange={handleInputChange}
              />
            </div>

            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <label className="block text-lg font-medium mb-4 text-gray-800">Payment Method</label>
              <div className="space-y-3">
                <label className="flex items-center p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition-all">
                  <input
                    type="radio"
                    value="card"
                    checked={paymentMethod === 'card'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="ml-3 text-gray-700">Credit/Debit Card</span>
                </label>
                <label className="flex items-center p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition-all">
                  <input
                    type="radio"
                    value="upi"
                    checked={paymentMethod === 'upi'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="ml-3 text-gray-700">UPI</span>
                </label>
                <label className="flex items-center p-3 border rounded-lg hover:bg-blue-50 cursor-pointer transition-all">
                  <input
                    type="radio"
                    value="cod"
                    checked={paymentMethod === 'cod'}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-radio text-blue-600 h-5 w-5"
                  />
                  <span className="ml-3 text-gray-700">Cash on Delivery</span>
                </label>
              </div>
            </div>

            {paymentMethod === 'card' && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2 text-gray-700">Card Number</label>
                  <input
                    type="text"
                    name="cardNumber"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    required
                    onChange={handleInputChange}
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">Expiry Date</label>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="MM/YY"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-gray-700">CVV</label>
                    <input
                      type="text"
                      name="cvv"
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      required
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              </div>
            )}

            {paymentMethod === 'upi' && (
              <div>
                <label className="block text-sm font-medium mb-2 text-gray-700">UPI ID</label>
                <input
                  type="text"
                  name="upiId"
                  placeholder="username@upi"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                  required
                  onChange={handleInputChange}
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all transform hover:scale-[1.02] font-medium text-lg shadow-md"
            >
              {paymentMethod === 'cod' ? 'Place Order' : `Pay ${book.price}`}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;