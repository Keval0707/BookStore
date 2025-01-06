// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen pt-24 px-4 md:px-20 dark:bg-slate-800 dark:text-white">
      <div className="max-w-4xl mx-auto">
        {/* Back to Home Button */}
        <button
          onClick={() => navigate('/')}
          className="mb-6 px-4 py-2 text-sm font-semibold text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Back to Home
        </button>

        <div className="text-center transform transition-all duration-300 hover:scale-105">
          <h1 className="text-4xl font-bold mb-2">Contact Us</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
            Have questions? We love to hear from you. Send us a message and we'll respond as soon as possible.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white dark:bg-slate-700 rounded-xl shadow-xl p-6 md:p-8 transform transition-all duration-300 hover:shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                           px-4 py-3 dark:bg-slate-800 dark:text-white
                           transition-all duration-200 
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                           hover:border-blue-400"
                  placeholder="Your name"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                           px-4 py-3 dark:bg-slate-800 dark:text-white
                           transition-all duration-200
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                           hover:border-blue-400"
                  placeholder="you@example.com"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                           px-4 py-3 dark:bg-slate-800 dark:text-white
                           transition-all duration-200
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                           hover:border-blue-400"
                  placeholder="How can we help?"
                />
              </div>

              <div className="group">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="mt-1 block w-full rounded-lg border border-gray-300 dark:border-gray-600 
                           px-4 py-3 dark:bg-slate-800 dark:text-white
                           transition-all duration-200
                           focus:border-blue-500 focus:ring-2 focus:ring-blue-500/50
                           hover:border-blue-400 resize-none"
                  placeholder="Your message..."
                />
              </div>

              <button
                type="submit"
                className={`w-full flex justify-center items-center gap-2 rounded-lg px-6 py-3 
                          text-sm font-semibold text-white shadow-lg
                          transition-all duration-300 transform hover:scale-105 
                          focus:outline-none focus:ring-2 focus:ring-offset-2
                          ${submitted 
                            ? 'bg-green-500 hover:bg-green-600 dark:bg-green-600 dark:hover:bg-green-700' 
                            : 'bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800'
                          }`}
              >
                {submitted ? (
                  <>
                    <span className="animate-bounce">✓</span>
                    Sent Successfully!
                  </>
                ) : (
                  <>
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-xl p-6 transform transition-all duration-300 hover:shadow-2xl">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-blue-100 dark:bg-blue-900 group-hover:bg-blue-200 dark:group-hover:bg-blue-800 transition-colors duration-200">
                    <svg className="w-6 h-6 text-blue-600 dark:text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Email Us</h2>
                    <p className="text-blue-600 dark:text-blue-400">support@bookstore.com</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-purple-100 dark:bg-purple-900 group-hover:bg-purple-200 dark:group-hover:bg-purple-800 transition-colors duration-200">
                    <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Call Us</h2>
                    <p className="text-purple-600 dark:text-purple-400">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 group">
                  <div className="p-3 rounded-full bg-indigo-100 dark:bg-indigo-900 group-hover:bg-indigo-200 dark:group-hover:bg-indigo-800 transition-colors duration-200">
                    <svg className="w-6 h-6 text-indigo-600 dark:text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-lg font-semibold">Location</h2>
                    <p className="text-indigo-600 dark:text-indigo-400">123 Book Street</p>
                    <p className="text-indigo-600 dark:text-indigo-400">Reading, RG1 1DB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-slate-700 rounded-xl shadow-xl p-6">
              <h2 className="text-xl font-semibold mb-4">Business Hours</h2>
              <div className="space-y-2">
                <p className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday:</span>
                  <span>10:00 AM - 4:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday:</span>
                  <span>Closed</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;