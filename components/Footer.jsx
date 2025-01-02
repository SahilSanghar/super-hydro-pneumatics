import React from 'react'
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    const phoneNumber = '9324026405'; 
    const message = encodeURIComponent('Hello! I’d like to inquire about your services.');

return (
    <div className='bg-[#1C1C1C] text-white py-10'>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
            <div className="">
                <p className="text-5xl">Contact Us</p>
                <p className="text-lg pt-5">
                    Shop Number 17/18 Sheetal Shagun Industrial,<br />
                    Estate Sativali Road Opposite Mahindra Show Room, near Valive Phata, Vasai East,<br />
                    Maharashtra, India
                </p>
                <p className="text-xl py-10">+91 92241 69123 <br />
                +91 93240 26405</p>
                <p className="text-xl">salessuperph@gmail.com</p>
            </div>
        <div className="text-xl ps-28 space-y-8">
            <Link href='/about-us'>Company Profile</Link><br /><br />
            <Link href='/contact-us'>Contact Us</Link>
        </div>
        <div className="text-xl space-y-3">
            <div className="">
                <Link href='https://www.linkedin.com/company/super-pneumatics-hydraulics/' target='_blank' className="pt-4">LinkedIn</Link>
            </div>
            <div className="mt-4">
                <Link href={`https://wa.me/${phoneNumber}?text=${message}`} target="_blank" rel="noopener noreferrer">
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
        <div className="flex justify-between items-center max-w-7xl mx-auto pt-16">
            <div className="">
                <Link href="/" passHref>
                    <Image src='/logo.jpg' alt='Logo' height={200} width={70} className='cursor-pointer rounded-full' />
                </Link>
            </div>
            <div className="">
                <p className="text-xl">&copy; 2023 Super Hydro Pneumatic All Rights Reserved</p>
            </div>
        </div>
    </div>
)
}

export default Footer