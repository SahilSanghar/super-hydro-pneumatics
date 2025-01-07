import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { RiHome5Line } from "react-icons/ri";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import { BiCategory } from "react-icons/bi";
import { MdOutlineContactSupport } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { RiLinkedinLine } from "react-icons/ri";
import { IoMailOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlinePersonOutline } from "react-icons/md";

const Footer = () => {
    const phoneNumber = '9324026405'; 
    const message = encodeURIComponent('Hello! I’d like to inquire about your services.');

return (
    <div className='bg-[#1C1C1C] text-white py-10'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <div className="">
                <p className="max-sm:text-3xl max-sm:ps-4 md:text-5xl">Contact Us</p>
                <p className="max-sm:px-5 md:text-lg pt-5">
                    Shop Number 17/18 Sheetal Shagun Industrial,<br />
                    Estate Sativali Road Opposite Mahindra Show Room, near Valive Phata, Vasai East,<br />
                    Maharashtra, India
                </p>
                <p className="text-xl max-sm:ps-5 max-sm:pt-3 md:py-10">
                    <span className="flex items-center gap-1.5"><IoCallOutline /> +91 92241 69123 </span>
                    <span className="flex items-center gap-1.5 py-2"><MdOutlinePersonOutline /> +91 93240 26405</span>
                </p>
                <p className="text-xl max-sm:ps-5 pb-2 flex items-center gap-2.5"><IoMailOutline />salessuperph@gmail.com</p>
            </div>
        <div className="text-xl md:ps-28 flex flex-col max-sm:ps-5 -space-y-12">
            <Link href='/' className='text-xl flex items-center gap-2.5 hover:opacity-70'><RiHome5Line />Home</Link><br /><br />
            <Link href='/about-us' className='text-xl flex items-center gap-2.5 hover:opacity-70'><HiOutlineOfficeBuilding />About Us</Link><br /><br />
            <Link href='/categories' className='text-xl flex items-center gap-2.5 hover:opacity-70'><BiCategory />Categories</Link><br /><br />
            <Link href='/contact-us' className='text-xl flex items-center gap-2.5 hover:opacity-70'><MdOutlineContactSupport />Contact Us</Link>
        </div>
        <div className="flex flex-col max-sm:ps-5 text-xl space-y-3 max-sm:mt-2">
            <div className="">
                <Link href='https://www.linkedin.com/company/super-pneumatics-hydraulics/' target='_blank' className="text-xl flex items-center gap-2.5 hover:opacity-70"><RiLinkedinLine className='font-extralight' />LinkedIn</Link>
            </div>
            <div className="mt-4">
                <Link href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer" className="text-xl flex items-center gap-2.5 hover:opacity-70">
                    <FaWhatsapp />
                    WhatsApp
                </Link>
            </div>
            <div className="flex space-x-5 pt-3">
                <Link href='https://www.tradeindia.com/truststamp-member/SUPER-HYDRO-PNEUMATIC-10364352/' target='_blank'>
                    <Image src='/f1.svg' alt='Trusted Seller' height={50} width={100} className='cursor-pointer' />
                </Link>
                {/* <Link href='https://www.tradeindia.com/tradekhata/catalog-payment/Z0FBQUFBQm1zNFZqSDZOTzh0cm54X2xObFRLNU9FUmxxSEU0dEN0M2NveU4wMzY0SkhRVmdzRDlaeFV1NkNJcml3dk1kQ0N4bXdEZUotSWZNdlJ0WFdsSW9rUmNMRUs5NWc9PQ==/' target='_blank'>
                    <Image src='/f2.png' alt='Trusted Seller' height={50} width={100} className='cursor-pointer' />
                </Link> */}
            </div>
        </div>
        </div>
        <div className="flex justify-between max-w-7xl mx-auto pt-16">
            <div className="max-sm:hidden">
                <Link href="/" passHref>
                    <Image src='/logo.jpg' alt='Logo' height={200} width={70} className='cursor-pointer rounded-full' />
                </Link>
            </div>
            <div className="">
                <p className="sm:text-sm md:text-xl">&copy; 2023 Super Hydro Pneumatic All Rights Reserved</p>
            </div>
        </div>
    </div>
)
}

export default Footer