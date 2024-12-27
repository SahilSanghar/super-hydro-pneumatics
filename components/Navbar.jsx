"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import { RxHamburgerMenu, RxCross2 } from "react-icons/rx";
import { categories } from '@/data/Categories';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when a link is clicked
  const handleLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className='flex justify-between max-w-[100%] px-24 py-5 bg-black'>
      <div>
        <Link href="/" passHref>
          <Image src='/logo.jpg' alt='Logo' height={200} width={70} className='cursor-pointer rounded-full' />
        </Link>
      </div>
      <div className="border-[2px] border-[#767676] rounded-full w-11 h-11 p-2.5 cursor-pointer relative z-20">
        <div
          className={`transition-all duration-500 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
          style={{ visibility: isMenuOpen ? 'hidden' : 'visible' }}
          onClick={toggleMenu}
        >
          <RxHamburgerMenu className="text-[#767676] h-5 w-5" />
        </div>
        <div
          className={`transition-all duration-500 absolute top-2.5 ${isMenuOpen ? 'opacity-100' : 'opacity-0'}`}
          style={{ visibility: isMenuOpen ? 'visible' : 'hidden' }}
          onClick={toggleMenu}
        >
          <RxCross2 className="text-[#767676] h-5 w-5" />
        </div>
      </div>
      <div
        className={`fixed max-md:top-14 max-md:left-28 md:top-0 md:-right-20 h-full bg-[#0a0a0a] text-white p-5 transition-transform duration-500 grid grid-cols-1 md:grid-cols-3 gap-x-5 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
        style={{ transition: 'transform 0.5s ease-in-out', zIndex: 10 }}
      >
        <ul className="text-xl">
          <h2 className="text-3xl mb-4">Products By Category</h2>
          {categories.map((category) => (
            <li key={category.id} className="mb-4 cursor-pointer">
              <Link href={`/categories/${category.id}`} onClick={handleLinkClick}>
                {category.name}
              </Link>
            </li>
          ))}
          <button className="relative rounded-lg overflow-hidden mt-5 px-5 py-2 font-semibold bg-white text-black transition duration-1000 ease-in-out hover:text-white group">
            <span className="absolute -inset-1 bg-black translate-x-full transition-transform duration-1000 ease-in-out group-hover:translate-x-0"></span>
            <span className="relative uppercase font-light text-lg">View all products</span>
          </button>
        </ul>
        <ul>
          <h2 className="text-3xl mb-4">Feature Products</h2>
          {categories.flatMap((category) => 
            category.products.map((product) => (
            <li key={product.id} className="mb-4 text-xl cursor-pointer">
              <Link href={`/categories/${category.id}/${product.id}`} onClick={handleLinkClick}>
                {product.name}
              </Link>
            </li>
          )))
          }
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
