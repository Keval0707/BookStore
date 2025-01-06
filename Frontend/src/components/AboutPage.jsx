import React from 'react';
import { useNavigate } from 'react-router-dom';

const AboutPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen pt-24 px-4 md:px-20 dark:bg-slate-800 dark:text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">About BookStore</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">Your trusted source for knowledge and inspiration</p>
        </div>

        <button
          onClick={() => navigate('/')}
          className="mb-8 inline-block bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          Back to Home
        </button>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To provide accessible, high-quality educational resources and books to readers worldwide. 
              We believe in the power of knowledge to transform lives and communities.
            </p>
          </div>

          <div className="bg-white dark:bg-slate-700 p-6 rounded-lg shadow-lg transform transition hover:scale-105">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600 dark:text-gray-300">
              To become the leading platform for educational content delivery, making learning 
              accessible to everyone, anywhere in the world.
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">What Sets Us Apart</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">10K+</div>
              <p className="text-gray-600 dark:text-gray-300">Books Available</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">50K+</div>
              <p className="text-gray-600 dark:text-gray-300">Active Users</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
              <p className="text-gray-600 dark:text-gray-300">Expert Authors</p>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg mb-12">
          <h2 className="text-2xl font-bold mb-6">Core Values</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
            <li>Customer First: We prioritize the needs of our readers above all else.</li>
            <li>Quality Assurance: Ensuring every book and resource meets high standards.</li>
            <li>Inclusivity: Promoting diversity in authorship and content.</li>
          </ul>
        </div>

        <div className="bg-white dark:bg-slate-700 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-6">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: 'John Doe', role: 'Founder & CEO' },
              { name: 'Jane Smith', role: 'Head of Content' },
              { name: 'Mike Johnson', role: 'Technical Lead' }
            ].map((member, index) => (
              <div key={index} className="text-center p-4 rounded-lg bg-gray-50 dark:bg-slate-600">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gray-200 dark:bg-slate-500"></div>
                <h3 className="font-bold mb-1">{member.name}</h3>
                <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
