import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

function About() {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-4 shadow-md rounded-md ">
          <h2 className="text-2xl font-bold text-center">About Us</h2>
          <p className="text-center">
            Welcome to our company! We are dedicated to providing the best service possible.
          </p>
          <p className="text-center">
            Our mission is to deliver high-quality products that bring value to our customers.
          </p>
          <p className="text-center">
            Contact us for more information about our services and products.
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default About;