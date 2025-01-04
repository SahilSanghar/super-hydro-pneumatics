import Mission from '@/components/Mission'
import Values from '@/layouts/Values'
import Image from 'next/image'
import React from 'react'

const About = () => {
return (
    <div className='bg-black text-white'>
        <p className="text-center max-sm:text-2xl md:text-5xl pb-5">About Us</p>
        <div className="max-md:hidden">
            <Image src='/about-us.jpg' alt='About Us' height={450} width={800} className='mx-auto' />
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 py-28 max-md:-mt-12">
            <div className="px-8 lg:px-32">
                <p className="max-sm:text-3xl md:text-5xl">About Company Profile</p>
                <p className="max-sm:text-lg md:text-xl pt-5">Super Hydro Pneumatic is a credible name in the industry that offer products like Air Filter B Type, Air Lubricator, Automobile Hose Clip, Pneumatic Clamp, Spray Gun, Brass Nozzle, etc. Our Navi Mumbai, Maharashtra, India based company has gained immense popularity among the buyers because of the top-class products, impressive corporate policies, accountable nature and a lot more reasons. We are an experienced and resourceful company that is growth-focused and customer-centric. All the professionals working in our company strictly adheres to all the predefined norms and support the company in meeting daily goals. By following a systematic working approach and international industry norms, we are growing at a faster pace.</p>
            </div>
            <div className="bg-[#2C2C2C] mt-14 max-md:pt-10">
            <Image src='/about-us1.jpeg' alt='About Us' height={850} width={1200} className='w-[85%] h-[100%] mx-auto object-cover -mt-14' />
            </div>
        </div>
        <Values />
        <Mission />
    </div>
)
}

export default About