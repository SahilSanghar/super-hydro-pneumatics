"use client";
import dynamic from 'next/dynamic';
import Image from 'next/image';
import React, { useState } from 'react';

// Dynamically load the Map1 component
const Map1 = dynamic(() => import('@/components/Map'), { ssr: false });

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendToWhatsApp = (e) => {
    e.preventDefault();

    // Check if `window` is available
    if (typeof window !== "undefined") {
      const { firstName, lastName, email, number, message } = formData;
      const whatsappMessage = `Hello, my name is ${firstName} ${lastName}. Here are my details:
        - Email: ${email}
        - Phone: ${number}
        - Message: ${message}`;
      const whatsappUrl = `https://wa.me/+919224169123?text=${encodeURIComponent(
        whatsappMessage
      )}`;
      window.open(whatsappUrl, "_blank");
    }
  };

  return (
    <div className="bg-black text-white">
      <p className="text-center text-5xl pb-5">Contact Us</p>
      <div className="">
        <Image
          src="/contact-us.jpg"
          alt="About Us"
          height={50}
          width={500}
          className="h-40 w-[70%] object-cover mx-auto"
        />
      </div>
      <p className="text-center text-5xl py-20">
        Do you have a project that you <br />
        would like to discuss
      </p>
      <div className="grid sm:grid-cols-1 md:grid-cols-2">
        <div className="bg-[#2C2C2C] py-7 px-20">
          <div className="py-5">
            <p className="text-4xl">Get in touch</p>
            <p className="text-lg pt-3">
              We’d love to speak with you about your dream products. <br />
              Fill out our contact form and one of our experts will be in touch.
            </p>
          </div>
          <div className="py-5">
            <p className="text-2xl">VISIT US</p>
            <p className="text-lg pt-0.5">
              Shop Number 17/18 Sheetal Shagun Industrial,<br />
              Estate Sativali Road Opposite Mahindra Show Room,<br /> 
              near Valive Phata, Vasai East,
              Maharashtra, India
            </p>
          </div>
          <div className="py-5">
            <p className="text-2xl">CALL US</p>
            <p className="text-lg pt-0.5">+91 9224169123 </p>
            <p className="text-lg">+91 9324026405</p>
          </div>
          <div className="py-5">
            <p className="text-2xl">EMAIL US</p>
            <p className="text-lg pt-0.5">salessuperph@gmail.com</p>
          </div>
        </div>
        <div className="min-h-screen flex items-center justify-center p-4">
          <form
            onSubmit={sendToWhatsApp}
            className="w-full max-w-md bg-transparent p-6 rounded-lg"
          >
            <div className="mb-4">
              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-transparent text-2xl my-5 text-white"
                placeholder="Enter your first name"
                required
              />
              <hr />
            </div>
            <div className="mb-4">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-transparent text-2xl my-5 text-white"
                placeholder="Enter your last name"
                required
              />
              <hr />
            </div>
            <div className="mb-4">
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-transparent text-2xl my-5 text-white"
                placeholder="Enter your email"
                required
              />
              <hr />
            </div>
            <div className="mb-4">
              <input
                type="tel"
                name="number"
                id="number"
                value={formData.number}
                onChange={handleChange}
                className="w-full px-4 py-2 rounded-lg bg-transparent text-2xl my-5 text-white"
                placeholder="Enter your phone number"
                required
              />
              <hr />
            </div>
            <div className="mb-4">
              <input
                name="message"
                id="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 my-5 py-2 rounded-lg bg-transparent text-2xl text-white"
                placeholder="Enter your message"
                required
              />
              <hr />
            </div>
            <button
              type="submit"
              className="w-full py-2 bg-green-600 text-white text-2xl my-5 font-bold rounded-lg hover:bg-green-500 transition"
            >
              Send to WhatsApp
            </button>
          </form>
        </div>
      </div>
      <Map1 />
    </div>
  );
};

export default Contact;
