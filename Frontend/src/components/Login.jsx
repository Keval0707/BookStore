import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  const [focusedInput, setFocusedInput] = useState('');

  const validateForm = () => {
    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      const response = await fetch('http://localhost:4001/user/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      
      if (response.ok) {
        setMessage({ type: 'success', text: 'Logged in successfully' });
        localStorage.setItem('Users', JSON.stringify(data.user));
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      } else {
        throw new Error(data.message || 'Login failed');
      }
    } catch (error) {
      setMessage({ type: 'error', text: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box max-w-md bg-gradient-to-br from-white to-pink-50 backdrop-blur-sm animate-fadeIn">
          <form onSubmit={handleSubmit} method="dialog" className="relative">
            <button 
              onClick={() => document.getElementById("my_modal_3").close()}
              className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 hover:rotate-90 transition-transform duration-200"
            >
              ✕
            </button>

            <div className="p-4 space-y-6">
              <div className="text-center space-y-2 animate-slideDown">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                  Welcome Back
                </h3>
                <p className="text-sm text-gray-500">Enter your credentials to continue</p>
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
                    focusedInput === 'email' ? 'text-pink-500' : 'text-gray-700'
                  }`}>
                    Email
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
                  ) : 'Login'}
                </button>
                <a 
                  href="/signup"
                  className="text-gray-600 hover:text-pink-500 font-medium text-sm transition-colors duration-200"
                >
                  Not registered? <span className="underline">Sign up</span>
                </a>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;