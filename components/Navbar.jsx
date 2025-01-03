"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { useRouter } from 'next/navigation';

const Navbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavigation = (path) => {
    setIsMenuOpen(false);
    router.push(path);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed top-0 w-full z-30 transition-all duration-300 ${
        isSticky ? "h-[75px]  backdrop-blur-md bg-opacity-30" : "h-[96px]"
      } bg-black`}
    >
      <div className="flex justify-between items-center max-w-[100%] px-5 md:px-24 py-5">
        {/* Logo Section */}
        <div className="flex items-center space-x-1.5 text-3xl">
          <Link href="/" passHref>
            <Image
              src="/logo.jpg"
              alt="Logo"
              height={180}
              width={60}
              className="cursor-pointer rounded-full"
            />
          </Link>
          <span className="text-white">Super Hydro Pneumatic</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex text-white items-center space-x-5">
          <li
            className="cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/')}
          >
            Home
          </li>
          <li
            className="cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/about-us')}
          >
            About Us
          </li>
          <li
            className="cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/categories')}
          >
            Categories
          </li>
          <li
            className="cursor-pointer hover:text-gray-400 transition"
            onClick={() => handleNavigation('/contact-us')}
          >
            Contact Us
          </li>
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden border-[2px] border-[#767676] rounded-full w-11 h-11 p-2.5 cursor-pointer relative z-20">
          {!isMenuOpen ? (
            <RxHamburgerMenu className="text-[#767676] h-5 w-5" onClick={toggleMenu} />
          ) : (
            <RxCross2 className="text-[#767676] h-5 w-5" onClick={toggleMenu} />
          )}
        </div>

        {/* Mobile Menu */}
        <div
          className={`fixed top-0 right-0 h-full w-3/4 bg-[#0a0a0a] text-white p-5 transform ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } transition-transform duration-500 z-10`}
        >
          <ul className="space-y-5">
            <li
              className="cursor-pointer hover:text-gray-400 transition"
              onClick={() => handleNavigation('/')}
            >
              Home
            </li>
            <li
              className="cursor-pointer hover:text-gray-400 transition"
              onClick={() => handleNavigation('/about-us')}
            >
              About Us
            </li>
            <li
              className="cursor-pointer hover:text-gray-400 transition"
              onClick={() => handleNavigation('/categories')}
            >
              Categories
            </li>
            <li
              className="cursor-pointer hover:text-gray-400 transition"
              onClick={() => handleNavigation('/contact-us')}
            >
              Contact Us
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
