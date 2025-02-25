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
      <div className="w-full max-w-[39.6rem] text-center flex flex-col items-center p-4 md:p-0">
        <img src={logo} className="mx-auto mb-[3rem]" />
        <h1 className='text-2xl md:text-6xl font-light text-[var(--Gray)] mb-[1.5rem]'>
          We are launching <span className='font-bold text-[var(--Very-Dark-Blue)]'>soon!</span>
        </h1>
        <p className='text-[1rem] md:text-[1.75rem] text-[var(--Very-Dark-Blue)] mb-[2.7rem]'>Subscribe and get notified</p>
        <form onSubmit={handleSubmit} className="w-full relative mb-[5rem]">
          <div className="flex flex-col md:flex-row items-center gap-4 w-full mb-[0.2rem] relative">
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.coml"
              className={`w-full h-10 md:h-12 px-5 border rounded-full text-sm md:text-base ${error ? "border-red-500" : "border-[var(--Blue)]"
                }`}
            />
            <button
              type="submit"
              className="w-full md:w-auto h-10 md:h-12 bg-[var(--Blue)] text-sm md:text-base text-white px-6 rounded-full shadow-2xl font-semibold whitespace-nowrap flex-shrink-0 cursor-pointer"
            >
              Notify Me
            </button>
          </div>
          <p
            className={`text-red-500 text-xs ml-0 md:ml-6 absolute top-[6.2rem] md:top-[3.2rem] w-full text-center md:text-start ${error ? "block" : "hidden"}`}
          >
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
