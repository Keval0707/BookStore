import React from "react";
import Home from "./home/Home";
import { Navigate, Route, Routes } from "react-router-dom";
import Courses from "./courses/Courses";
import Signup from "./components/Signup";
import { Toaster } from "react-hot-toast";
import { useAuth } from "./context/AuthProvider";
import CheckoutPage from "./components/CheckoutPage";
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';

function App() {
  const [authUser, setAuthUser] = useAuth();
  
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
          <Route 
            path="/checkout" 
            element={authUser ? <CheckoutPage /> : <Navigate to="/signup" />} 
          />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;