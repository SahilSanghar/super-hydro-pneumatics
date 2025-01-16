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
    <div className="bg-black text-white">
    <p className="text-center max-sm:text-2xl md:text-5xl py-10">
        Our Best Sellers
    </p>
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:h-[100vh]">
        <div className="relative bg-white group overflow-hidden">
        <Image
            src="/frl.png"
            alt="Product 1"
            height={550}
            width={1400}
            className="max-lg:h-[400px] lg:h-[700px] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute h-[10%] bottom-0 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-4 transition-all duration-500 group-hover:h-[13%] group-hover:py-4 group-hover:bg-opacity-20">
            <p className='font-semibold'>FRL</p>
            <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/pneumatic-manual-valve')}>View More</p>
        </div>
        </div>
        <div className="flex flex-col">
        <div className="relative group overflow-hidden">
            <Image
                src="/silicon-hose.jpg"
                alt="Product 2"
                height={200}
                width={1020}
                className="h-[300px] w-[770px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
        <div className="absolute h-[26%] top-56 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-6 transition-all duration-500 group-hover:h-[28%] group-hover:py-1 group-hover:bg-opacity-20">
            <p className='font-semibold'>Silicon Hose</p>
            <p className="-pt-2 opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/ss-pipe-fittings')}>View More</p>
        </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            
            <div className="relative group overflow-hidden">
            <Image
                src="/ball-valve.jpg"
                alt="Product 4"
                height={500}
                width={1520}
                className="h-[402px] md:w-[380px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
        <div className="absolute h-[19.4%] bottom-0 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-4 transition-all duration-500 group-hover:h-[28%] group-hover:py-4 group-hover:bg-opacity-20">
            <p className='font-semibold text:lg'>Ball Valve</p>
            <p className="opacity-0 transition-opacity duration-500 group-hover:opacity-100 cursor-pointer"
            onClick={() => handleNavigation('/categories/non-return-valve')}>View More</p>
        </div>
        </div>
        <div className="relative group overflow-hidden">
            <Image
                src="/solenoid-valve.jpg"
                alt="Product 3"
                height={500}
                width={1520}
                className="h-[402px] md:w-[400px] object-cover transition-transform duration-500 group-hover:scale-110"
            />
        <div className="absolute h-[19.4%] bottom-0.5 left-0 w-full bg-black bg-opacity-20 text-white text-2xl text-center py-4 transition-all duration-500 group-hover:h-[28%] group-hover:py-4 group-hover:bg-opacity-20">
            <p className='font-semibold'>Solenoid Valve</p>
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
