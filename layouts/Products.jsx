"use client"
import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/navigation';

const Products = () => {
    const router = useRouter();

    const handleNavigation = (path) => {
        router.push(path);
    };

return (
    <div className="bg-white text-black">
    <p className="text-center text-5xl py-10">
        We are innovative <br />
        & forward-thinking
    </p>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 h-[100vh]">
        <div className="relative group overflow-hidden">
        <Image
            src="/c1.jpg"
            alt="Product 1"
            height={550}
            width={1220}
            className="h-[700px] w-[770px] object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute h-[10%] bottom-0 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-4 transition-all duration-500 group-hover:h-[13%] group-hover:py-4 group-hover:bg-opacity-20">
            <p className='font-semibold'>Brass Pipe Fittings</p>
            <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/brass-pipe-fittings')}>View More</p>
        </div>
        </div>
        <div className="flex flex-col">
        <div className="relative group overflow-hidden">
            <Image
                src="/c7.jpg"
                alt="Product 2"
                height={500}
                width={1520}
                className="h-[300px] w-[770px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
        <div className="absolute h-[26%] top-56 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-6 transition-all duration-500 group-hover:h-[28%] group-hover:py-1 group-hover:bg-opacity-20">
            <p className='font-semibold'>Flanges</p>
            <p className="-pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/flanges')}>View More</p>
        </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            
            <div className="relative group overflow-hidden">
            <Image
                src="/c2.jpg"
                alt="Product 4"
                height={500}
                width={1520}
                className="h-[385px] w-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
        <div className="absolute h-[17.4%] bottom-0 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-4 transition-all duration-500 group-hover:h-[23%] group-hover:py-4 group-hover:bg-opacity-20">
            <p className='font-semibold'>Air And Pneumatic Blow Gun</p>
            <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/air-and-pneumatic-blow-gun')}>View More</p>
        </div>
        </div>
        <div className="relative group overflow-hidden">
            <Image
                src="/c3.jpg"
                alt="Product 3"
                height={500}
                width={1520}
                className="h-[395px] w-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
        <div className="absolute h-[17%] bottom-0.5 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-4 transition-all duration-500 group-hover:h-[23%] group-hover:py-4 group-hover:bg-opacity-20">
            <p className='font-semibold'>Compression Tube Fittings</p>
            <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/compression-tube-fittings')}>View More</p>
        </div>
            </div>
        </div>
        </div>
    </div>
    </div>
);
};

export default Products;