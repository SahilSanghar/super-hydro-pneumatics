import Image from 'next/image'
import React from 'react'

const Mission = () => {
return (
    <div className='w-[75%] mx-auto py-10'>
        <p className="max-sm:text-3xl md:text-5xl pb-8">Mission</p>
        <div className="grid sm:grid-cols-1 md:grid-cols-2">
            <p className="max-sm:text-2xl md:text-3xl md:pe-14 max-md:hidden">
            To make world a more beautiful<br /> place - one tile at a time.
            </p>
            <p className="text-xl">
            Our focus is on employing eco-friendly practices and materials to ensure that our products contribute to a greener future. We are committed to continuous improvement, leveraging advanced technology and skilled craftsmanship to maintain the highest standards of quality and durability.
            </p>
        </div>
        <div className="mt-10">
            <Image src='/mission.webp' alt='Mission' width={1550} height={200} className='w-[100%] object-cover' />
        </div>
        <p className="max-sm:text-3xl md:text-5xl mt-7 py-5">Vision</p>
            <p className="max-sm:text-2xl md:text-3xl pe-14 pb-5 max-md:hidden">
            To capture the imagination of every creator and bring it to life.
            </p>
            <p className="text-xl pb-10">
            Gen Next Ceramics is dedicated to excellence, sustainability, and customer satisfaction. We would like to set new benchmarks in design and quality from time to time. We look toward long-term relations with our clients, partners, and the community at large through integrity, innovation, and brilliant service. Prahi Ceramics' vision is to be the most trusted name in the tile industry, and we look forward to our products beautifying and increasing the functionality of every space they touch.
            </p>
    </div>
)
}

export default Mission