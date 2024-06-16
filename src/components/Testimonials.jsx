import React from 'react'
import CarouselTestimonial from './Testimonialscard';

function Testimonials() {
    return (
        <div className='w-full h-[700px]  bg-[#0cb8b6] flex justify-center items-center'>

            <div className='w-[60%] h-[400px] overflow-hidden flex justify-center items-center'>
                <CarouselTestimonial />

            </div>

        </div>
    )
}

export default Testimonials;