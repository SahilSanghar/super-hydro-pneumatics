"use client"
import React from 'react'
import { useState, useEffect } from "react";
import { HiOutlineArrowSmallLeft, HiOutlineArrowSmallRight } from "react-icons/hi2";
import { motion, AnimatePresence } from "framer-motion";
import { slides } from "@/data/Carousel";
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleRedirect = () => {
      router.push("/categories");
    };
  
    const handlePrevious = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? slides.length - 1 : prevIndex - 1
      );
    };
  
    const handleNext = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    useEffect(() => {
      const timer = setInterval(() => {
        handleNext();
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);

return (
    
    <div className="relative h-[87.5vh] w-full overflow-hidden mt-24">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          currentIndex === index && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="relative h-full w-full"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="h-full w-[88%] md:ms-[12%] object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40">
                <div className="flex h-full items-center justify-center">
                  <div className="text-left -ms-28 mt-64">
                    <motion.h1
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.2 }}
                      className="text-5xl font-medium text-white md:text-7xl"
                    >
                      {slide.title}
                    </motion.h1>
                    <motion.p
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg text-white md:text-4xl"
                    >
                      {slide.description}
                    </motion.p>
                    <button className="relative rounded-lg overflow-hidden mt-5 px-12 py-3 font-semibold bg-white text-black transition duration-1000 ease-in-out hover:text-white group" onClick={handleRedirect}>
                      <span className="absolute -inset-1 bg-black translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"></span>
                      <span className="relative uppercase font-light">View all products</span>
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="hidden absolute top-[300px] left-16 -rotate-90 md:flex -translate-x-1/2 transform items-center justify-around space-x-4">
      <p className="uppercase text-sm font-extralight text-gray-500">
      E x c e l l e n t&nbsp;&nbsp;&nbsp;Q u a l i t y&nbsp;&nbsp;&nbsp;P i p e s
      </p>
      <span className="pb-4 ps-12 text-gray-500 text-lg font-extrabold">_____</span>
        <span className="text-lg font-semibold text-white">
          <span className="text-2xl">0{currentIndex + 1}</span> / <span className="opacity-80">0{slides.length}</span>
        </span>
      </div>

      <button
        onClick={handlePrevious}
        className="absolute right-28 top-[90%] -translate-y-1/2 transform rounded-full border-[1px] border-[#767676] p-3 text-white backdrop-blur-sm transition"
        aria-label="Previous slide"
      >
        <HiOutlineArrowSmallLeft size={24} className='text-[#767676] ' />
      </button>

      <button
        onClick={handleNext}
        className="absolute right-12 top-[90%] -translate-y-1/2 transform rounded-full border-[1px] border-[#767676] p-3 text-white backdrop-blur-sm transition"
        aria-label="Next slide"
      >
        <HiOutlineArrowSmallRight size={24} className='text-[#767676] ' />
      </button>
      <div className="fixed top-[72%] right-6">
        <Link href="https://wa.me/+919324026405" target='_blank'>
          <Image src='/whatsapp.png' alt='Whatsapp' width={100} height={100} />
        </Link>
      </div>
    </div>
)
}

export default Hero