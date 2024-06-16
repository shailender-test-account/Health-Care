import React, { useState } from 'react';
import Navbar from './Navbar';
import logo from "../assets/MediCare+ (2).png";
import { easeInOut, motion } from "framer-motion";


function Home() {





    const variants = {

        visible: { opacity: 1, x: 0, blur: 0 },
        hidden: { opacity: 0, x: -100, blur: 1 }

    }
    return (
        <div>



            <div className='w-full  min-h-[700px] bg-hero bg-fixed  bg-cover bg-no-repeat bg-center relative '>

                <img className='  absolute top-[5%]  left-[10%]' src={logo} alt="logo" />



                <div className='w-full h-[100px] border-2  '>

                </div>

                <Navbar />

                <motion.div className='text-[2rem]
                 md:text-[2.5rem] text-justify font-serif text-[#0da8bc] absolute md:bottom-[50%]  bottom-[60%] left-[10%] md:left-[20%]  ' variants={variants} initial="hidden" whileInView={"visible"} viewport={{ once: true }} transition={{ duration: 1, ease: "easeInOut", type:"spring"}}>
                    Welcome To Medi <span className='text-[#f95759]'>Care+</span><br /> Clinic
                </motion.div>
                <div className='min-w-[400px] min-h-[200px]  absolute bottom-[25%] md:bottom-[20%] left-[10%] md:left-[20%] flex flex-col gap-5 text-justify'>
                    <motion.h2 className='text-[1.5rem] text-justify font-serif font-[400] text-[#0da8bc]' initial="hidden" whileInView={"visible"} viewport={{ once: true }} variants={variants} transition={{ duration: 1.5, ease: "easeInOut" }}>Best Specalists</motion.h2>
                    <motion.p className=' text-[black]  max-w-[400px]  font-serif  flex justify-center items-center text-[15px] md:text-[20px]' initial="hidden" whileInView={"visible"} viewport={{ once: true }} variants={variants} transition={{ duration: 2, ease: "easeInOut" }}>We are on the leading edge of cancer care. Providing the full continuum of cancer treatments and supportive care services in a single convenient location.</motion.p>
                </div>

                <div className=' absolute bottom-[10%] md:bottom-[5%] left-[18%] l md:left-[20%] w-500px min-h-[100px] flex justify-center   items-center gap-3 md:gap-10 flex-wrap'>
                    <button className='min-w-[200px]
                     text-[13px] md:text-[18px] min-h-[50px] bg-[#f95759]  font-serif font-[300] text-[#ffffff]  rounded-lg transition-all duration-[0.5] ease-linear  hover:bg-[#9e383a]'>Make an Appointments</button>
                    <button className='min-w-[200px] 
                     text-[13px] min-h-[50px] bg-[#0da8bc]  font-serif font-[300] text-[#ffffff] rounded-lg transition-all  duration-[0.5] ease-linear hover:bg-[#27666e]'>Departments</button>
                </div>

            </div>
        </div>
    )
}

export default Home;