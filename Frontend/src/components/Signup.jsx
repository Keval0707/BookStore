import React, { useState } from 'react';

function Signup() {
  const [formData, setFormData] = useState({ fullname: '', email: '', password: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [focusedInput, setFocusedInput] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!formData.fullname) newErrors.fullname = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4001/user/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setMessage({ type: 'success', text: 'Signup successful!' });
        localStorage.setItem('Users', JSON.stringify(data.user));
        window.location.href = '/';
      } else {
        throw new Error(data.message || 'Signup failed');
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="w-[600px] animate-fadeIn">
        <div className="modal-box bg-white shadow-xl">
          <form onSubmit={handleSubmit} method="dialog" className="relative">
            <button 
              onClick={() => window.location.href = '/'}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:rotate-90 transition-transform duration-200"
            >
              ✕
            </button>

            <div className="p-6 space-y-6">
              <div className="text-center space-y-2 animate-slideDown">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Create Account
                </h3>
                <p className="text-sm text-gray-500">Join us today</p>
              </div>

              {message.text && (
                <div className={`p-3 rounded-lg animate-slideDown ${
                  message.type === 'error' 
                    ? 'bg-red-50 text-red-500 border border-red-200'
                    : 'bg-green-50 text-green-500 border border-green-200'
                }`}>
                  {message.text}
                </div>
              )}

              <div className="space-y-4 animate-slideDown">
                <div className="space-y-2">
                  <label className={`block text-sm font-medium transition-colors duration-200 ${
                    focusedInput === 'fullname' ? 'text-pink-500' : 'text-gray-700'
                  }`}>
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="fullname"
                    value={formData.fullname}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('fullname')}
                    onBlur={() => setFocusedInput('')}
                    placeholder="Enter your full name"
                    className={`input input-bordered w-full transition-all duration-200 ${
                      focusedInput === 'fullname' ? 'border-pink-500 shadow-pink-100' : ''
                    }`}
                  />
                  {errors.fullname && (
                    <span className="text-sm text-red-500 animate-slideDown">{errors.fullname}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className={`block text-sm font-medium transition-colors duration-200 ${
                    focusedInput === 'email' ? 'text-pink-500' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('email')}
                    onBlur={() => setFocusedInput('')}
                    placeholder="Enter your email"
                    className={`input input-bordered w-full transition-all duration-200 ${
                      focusedInput === 'email' ? 'border-pink-500 shadow-pink-100' : ''
                    }`}
                  />
                  {errors.email && (
                    <span className="text-sm text-red-500 animate-slideDown">{errors.email}</span>
                  )}
                </div>

                <div className="space-y-2">
                  <label className={`block text-sm font-medium transition-colors duration-200 ${
                    focusedInput === 'password' ? 'text-pink-500' : 'text-gray-700'
                  }`}>
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    onFocus={() => setFocusedInput('password')}
                    onBlur={() => setFocusedInput('')}
                    placeholder="Enter your password"
                    className={`input input-bordered w-full transition-all duration-200 ${
                      focusedInput === 'password' ? 'border-pink-500 shadow-pink-100' : ''
                    }`}
                  />
                  {errors.password && (
                    <span className="text-sm text-red-500 animate-slideDown">{errors.password}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:justify-between sm:items-center animate-slideDown">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="btn bg-gradient-to-r from-pink-500 to-purple-600 text-white border-0 hover:brightness-110 transition-all duration-200"
                >
                  {isLoading ? (
                    <span className="loading loading-spinner loading-sm"></span>
                  ) : 'Sign Up'}
                </button>
                <p className="text-gray-600">
                  Have an account?{" "}
                  <button
                    type="button"
                    onClick={() => document.getElementById("my_modal_3").showModal()}
                    className="text-pink-500 hover:text-pink-600 font-medium underline"
                  >
                    Login
                  </button>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;