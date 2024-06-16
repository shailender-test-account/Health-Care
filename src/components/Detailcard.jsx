import React from 'react'
import { motion } from 'framer-motion';

function Detailcard(props) {
    return (
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{
                duration: 0.3,
                ease: [0, 0.71, 0.2, 1.01],
                scale: {
                    type: "spring",
                    damping: 5,
                    stiffness: 100,
                    restDelta: 0.001
                }
            }} className='w-full md:w-[300px] h-[400px]   flex flex-col justify-center items-center border-2 relative shadow-md'>
            <div className='w-[70px] h-[70px] bg-[#ffffff] rounded-full flex justify-center text-[#0da8bc] text-[2rem]  items-center absolute top-[-6%]'>
                {props.icon}
            </div>
            <div className='w-[300px] flex  flex-col justify-center items-center  gap-10'>
                <h1 className='text-[25px] font-serif font-bold text-[#ffffff]'>{props.title}</h1>
                <p className='text-[#ffffff] font-serif text-[12px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, harum debitis. Temporibus fugiat omnis officia harum rerum dolor. </p>
                <button className='w-[150px] h-[50px] flex justify-center items-center text-[#ffffff] border-t-2 border-b-2'>Read More</button>
            </div>

        </motion.div>
    )
}

export default Detailcard;