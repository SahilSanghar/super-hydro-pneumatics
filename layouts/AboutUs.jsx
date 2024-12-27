"use client"
import React from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation
import { about } from "@/data/About";

const AboutUs = () => {
  const router = useRouter(); // Initialize the router

  const handleNavigation = () => {
    router.push("/about-us"); // Navigate to /about-us
  };

  return (
    <div className="sm:[150vh] md:h-[90vh] grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-6 my-10 py-10 px-4">
      {about.map((section) => (
        <div key={section.id} className={section.style}>
          {section.title && <p className="text-xl font-medium -ms-12">{section.title}</p>}
          {section.content.map((paragraph, index) => (
            <p key={index} className="mt-5 break-words">{paragraph}</p>
          ))}
          {section.link && (
            <button
              className="mt-14 text-xl cursor-pointer font-semibold"
              onClick={handleNavigation} // Attach navigation handler
            >
              {section.link}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default AboutUs;
