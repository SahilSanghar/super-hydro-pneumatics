import Image from 'next/image'
import React from 'react'

const Transform = () => {
return (
    <div className='grid grid-cols-1 md:grid-cols-2 bg-white text-black px-48 py-14'>
        <div className="pe-12">
            <p className="text-5xl">
                Transforming <br />
                your spaces <br />
                enriching your life
            </p>
            <p className="text-lg py-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis alias, et laboriosam eos temporibus vitae delectus modi laborum accusantium beatae nulla harum natus est, provident corporis, fuga hic? Accusamus, delectus?
            </p>
            <p className="text-xl font-medium">Discover Products</p>
        </div>
        <div className="">
            <Image src='/transform.jpg' alt='Transform' height={500} width={500} />
        </div>
    </div>
)
}

export default Transform