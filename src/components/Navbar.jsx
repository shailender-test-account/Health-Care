import React, { useState } from 'react'
import { motion, useScroll, useMotionValueEvent, color } from 'framer-motion';


function Navbar() {

    const [hidden, sethidden] = useState(false);


    const variants = {
        visible: {
            height: 150, position: "fixed",
            top: 0,
            left: 0,
            backgroundColor: "#FFFFFF",
        },
        hidden: { height: 100 }
    }



    // text li a variant

    const item = {
        visible: {
            color: "#0da8bc",
            fontWeight: "bold",



        },
        hidden: { color: "#ffffff" }

    }

    const { scrollY } = useScroll();

    useMotionValueEvent(scrollY, "change", (latest) => {
        if (latest > 300) {
            sethidden(true)
        }
        else {
            sethidden(false);
        }
    })









    return (
        <div className=' relative'>
            {/* <!-- component --> */}

            <motion.nav animate={hidden ? "visible" : "hidden"} variants={variants} transition={{ duration: 1, ease: "linear", type: "spring" }} className="relative px-4 py-4 flex justify-between items-center  bg-transparent w-[100%] h-[100%] z-10">


                <ul className="hidden absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6">
                    <li >
                        <motion.a animate={hidden ? "visible" : "hidden"} variants={item} className="text-sm  text-[#0da8bc] transition-all duration-[0.5s]  ease-linear hover:text-[#0da8bc] font-[300] text-[15px] " href="/">Home</motion.a>
                        <hr className='w-[100%] h-[3px] bg-[#0da8bc] border-none rounded-md font-bold' />
                    </li>

                    <li >
                        <motion.a animate={hidden ? "visible" : "hidden"} variants={item} className="text-sm  text-[#0da8bc] transition-all duration-[0.5s]  ease-linear hover:text-[#0da8bc] font-[300] text-[15px] " href="/">About Us</motion.a>
                        <hr className='w-[100%] h-[3px] bg-[#0da8bc] border-none rounded-md font-bold' />
                    </li>

                    <li >
                        <motion.a animate={hidden ? "visible" : "hidden"} variants={item} className="text-sm  text-[#0da8bc] transition-all duration-[0.5s]  ease-linear hover:text-[#0da8bc] font-[300] text-[15px] " href="/">Services</motion.a>
                        <hr className='w-[100%] h-[3px] bg-[#0da8bc] border-none rounded-md font-bold' />
                    </li>
                    <li >
                        <motion.a animate={hidden ? "visible" : "hidden"} variants={item} className="text-sm  text-[#0da8bc] transition-all duration-[0.5s]  ease-linear hover:text-[#0da8bc] font-[300] text-[15px] " href="/">News</motion.a>
                        <hr className='w-[100%] h-[3px] bg-[#0da8bc] border-none rounded-md font-bold' />
                    </li>
                    <li >
                        <motion.a animate={hidden ? "visible" : "hidden"} variants={item} className="text-sm  text-[#0da8bc] transition-all duration-[0.5s]  ease-linear hover:text-[#0da8bc] font-[300] text-[15px] " href="/">Contact Us</motion.a>
                        <hr className='w-[100%] h-[3px] bg-[#0da8bc] border-none rounded-md font-bold' />
                    </li>                </ul>
                <a className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold  rounded-xl transition duration-200" href="#">Sign In</a>
                <a className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200" href="#">Sign up</a>
            </motion.nav>
            <div className="navbar-menu relative z-50 hidden">
                <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
                <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-[#f95759] border-r overflow-y-auto">
                    <div className="flex items-center mb-8">


                    </div>
                    <div>
                        <ul>
                            <li className="mb-1 relative">
                                <a className="block p-4 text-sm font-semibold text-[#ffffff] hover:bg-blue-50 hover:text-blue-600 rounded" href="/">Home</a>

                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-[#ffffff] hover:bg-blue-50 hover:text-blue-600 rounded" href="/about">About Us</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-[#ffffff] hover:bg-blue-50 hover:text-blue-600 rounded" href="/services">Services</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-[#ffffff] hover:bg-blue-50 hover:text-blue-600 rounded" href="/pricing">Pricing</a>
                            </li>
                            <li className="mb-1">
                                <a className="block p-4 text-sm font-semibold text-[#ffffff] hover:bg-blue-50 hover:text-blue-600 rounded" href="/contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <div className="mt-auto">
                        <div className="pt-6">
                            <a className="block px-4 py-3 mb-3  text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl" href="#">Sign in</a>
                            <a className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700  rounded-xl" href="#">Sign Up</a>
                        </div>

                    </div>
                </nav>
            </div>



        </div>
    )
}


export default Navbar;