import React from 'react';
import { useForm } from 'react-hook-form';
import Navbar from './Navbar';
import Footer from './Footer';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // Handle form submission logic here
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center">
        <div className="w-full max-w-md p-8 space-y-4 shadow-md rounded-md">
          <h2 className="text-2xl font-bold text-center">Contact Us</h2>
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <div className="space-y-2">
              <label className="block">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="w-full px-3 py-2 border rounded-md outline-none mt-1"
                  {...register('name', { required: true })}
                />
              </label>
              {errors.name && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-2 mt-4">
              <label className="block">
                Email
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full px-3 py-2 border rounded-md outline-none mt-1"
                  {...register('email', { required: true })}
                />
              </label>
              {errors.email && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div className="space-y-2 mt-4">
              <label className="block">
                Message
                <textarea
                  placeholder="Your message"
                  className="w-full px-3 py-2 border rounded-md outline-none mt-1 h-32"
                  {...register('message', { required: true })}
                />
              </label>
              {errors.message && (
                <span className="text-sm text-red-500">This field is required</span>
              )}
            </div>
            <div className="mt-6">
              <button
                type="submit"
                className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Contact;