import { useState } from 'react';
import './App.css';
import logo from './assets/logo.svg';
import dashboard from './assets/illustration-dashboard.png';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGithub, faInstagram } from "@fortawesome/free-brands-svg-icons";

function App() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  // Email validation function
  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page from reloading

    if (!email) {
      setError("Email is required");
    } else if (!validateEmail(email)) {
      setError("Please enter a valid email address");
    } else {
      setError(""); // Clear error if email is valid
      alert("Subscribed successfully!"); // Replace with actual logic
    }
  };

  return (
    <div role="main" className="h-screen w-full flex flex-col items-center justify-start pt-[4rem]">
      <div className="w-full max-w-[39.6rem] text-center flex flex-col items-center">
        <img src={logo} className="mx-auto mb-[3rem]" />
        <h1 className='text-6xl font-light text-[var(--Gray)] mb-[1.5rem]'>
          We are launching <span className='font-bold text-[var(--Very-Dark-Blue)]'>soon!</span>
        </h1>
        <p className='text-[1.75rem] text-[var(--Very-Dark-Blue)] mb-[2.7rem]'>Subscribe and get notified</p>
        <form onSubmit={handleSubmit} className="w-full relative mb-[5rem]">
          <div className="flex items-center gap-4 w-full mb-[0.2rem] relative">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className={`w-full h-12 px-5 border rounded-full text-base ${error ? "border-red-500" : "border-gray-300"
                }`}
            />
            <button
              type="submit"
              className="h-12 bg-[var(--Blue)] text-white px-6 rounded-full shadow-2xl font-semibold whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              Notify Me
            </button>
          </div>
          <p className={`text-red-500 text-xs text-start ml-6 absolute left-0 top-[3.2rem] ${error ? "block" : "hidden"}`}>
            {error}
          </p>
        </form>
        <img src={dashboard} className="mx-auto mb-[3.5rem]" />
        <div className='flex flex-row gap-4 mb-[2.5rem]'>
          <div className="h-6 w-6 border border-[var(--Gray)] rounded-full flex items-center justify-center hover:bg-[var(--Blue)] text-[var(--Blue)] hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faFacebookF} className="text-xs" />
          </div>
          <div className="h-6 w-6 border border-[var(--Gray)] rounded-full flex items-center justify-center hover:bg-[var(--Blue)] text-[var(--Blue)] hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faGithub} className="text-xs" />
          </div>
          <div className="h-6 w-6 border border-[var(--Gray)] rounded-full flex items-center justify-center hover:bg-[var(--Blue)] text-[var(--Blue)] hover:text-white cursor-pointer">
            <FontAwesomeIcon icon={faInstagram} className="text-xs" />
          </div>
        </div>
        <p className='text-[var(--Gray)] text-xs'>&copy; Copyright Ping. All rights reserved.</p>
      </div>
    </div>
  );
}

export default App;
