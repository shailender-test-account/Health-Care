import React from 'react';


function Card(props) {
    return (
        
            <div className='w-full md:w-[300px] h-[300px] bg-[#0da8bc] flex flex-col gap-5 shadow-lg p-8'>
                <h2 className='text-[#ffffff] font-serif font-bold text-[1.5rem]'>{props.title}</h2>
                <p className='text-[15px] font-serif text-[#ffffff]'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates corporis quod deserunt repellat laudantium. Vero, ea asperiores voluptate, neque </p>
                <button className='w-[200px] rounded-md bg-[#ffffff] h-[50px] text-black font-serif transition-all duration-[1] hover:bg-[#e2e1e1] text-[13px] shadow-lg'>Read More</button>

            </div>
        
    )
}

export default Card;