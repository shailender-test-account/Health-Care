import React, { useEffect } from "react";
import Glide from "@glidejs/glide";
import doct1 from "../assets/doct1.jpg";
import doct2 from "../assets/doct2.jpg";
import { FaFacebookF } from "react-icons/fa6";
import { RiInstagramFill } from "react-icons/ri";
import { FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

function Carousel() {


  const variant = {
    visible: {
      backgroundColor: "#ffffff",
      color: "#0da8bc",



    },
    hidden: {
      backgroundColor: "#0da8bc",
      color: "#ffffff",


    }
  }


  useEffect(() => {
    const slider = new Glide(".glide-05", {
      type: "carousel",
      focusAt: "center",
      perView: 3,
      autoplay: 3000,
      animationDuration: 700,
      gap: 24,
      classNames: {
        nav: {
          active: "[&>*]:bg-wuiSlate-700",
        },
      },
      breakpoints: {
        1024: {
          perView: 2,
        },
        640: {
          perView: 1,
        },
      },
    }).mount()

    return () => {
      slider.destroy()
    }
  }, [])

  return (
    <>
      {/*<!-- Component: Carousel with indicators outside --> */}
      <div className=" w-full h-[100px]  text-[2rem] flex justify-center items-center">
        Our Experts
      </div>
      <div className="glide-05 relative w-full h-full ">
        {/*    <!-- Slides --> */}
        <div className=" overflow-hidden  h-[600px]" data-glide-el="track">
          <ul className=" whitespace-no-wrap flex-no-wrap [backface-visibility: hidden] [transform-style: preserve-3d] [touch-action: pan-Y] [will-change: transform] relative flex w-full overflow-hidden p-0">
            <li>
              <img
                src={doct1}
                className="m-auto max-h-full w-full max-w-full"
              />
              <div className="w-[100%] h-[100px] flex  flex-col justify-center items-center mt-[-5%] ">
                <span className="flex w-[100%] h-[50px] justify-center items-center gap-5 ">
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaFacebookF />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <RiInstagramFill />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaTwitter />
                  </motion.div>
                </span>
                <h1 className=" font-bold text-[black] font-serif  text-[1rem]">Meet Michaela</h1>
                <h2 className="font-[200] text-[black] font-serif text-[12px]">Neurologist</h2>

              </div>
            </li>
            <li>

              <img
                src={doct2}
                className="m-auto max-h-full w-full max-w-full"
              />
              <div className="w-[100%] h-[100px] flex  flex-col justify-center items-center mt-[-5%] ">
                <span className="flex w-[100%] h-[50px] justify-center items-center gap-5 ">
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaFacebookF />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <RiInstagramFill />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaTwitter />
                  </motion.div>
                </span>
                <h1 className=" font-bold text-[black] font-serif  text-[1rem]">Meet Michaela</h1>
                <h2 className="font-[200] text-[black] font-serif text-[12px]">Dental Care</h2>

              </div>
            </li>
            <li>
              <img
                src={doct1}
                className="m-auto max-h-full w-full max-w-full"
              />
              <div className="w-[100%] h-[100px] flex  flex-col justify-center items-center mt-[-5%] ">
                <span className="flex w-[100%] h-[50px] justify-center items-center gap-5 ">
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaFacebookF />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <RiInstagramFill />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaTwitter />
                  </motion.div>
                </span>
                <h1 className=" font-bold text-[black] font-serif  text-[1rem]">Meet Michaela</h1>
                <h2 className="font-[200] text-[black] font-serif text-[12px]">Pulmonarysist</h2>

              </div>
            </li>
            <li>
              <img
                src={doct2}
                className="m-auto max-h-full w-full max-w-full"
              />
              <div className="w-[100%] h-[100px] flex  flex-col justify-center items-center mt-[-5%] ">
                <span className="flex w-[100%] h-[50px] justify-center items-center gap-5 ">
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaFacebookF />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <RiInstagramFill />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaTwitter />
                  </motion.div>
                </span>
                <h1 className=" font-bold text-[black] font-serif  text-[1rem]">Meet Michaela</h1>
                <h2 className="font-[200] text-[black] font-serif text-[12px]">Prediatrics</h2>

              </div>
            </li>
            {/* <li>
              <img
                src={doct2}
                className="m-auto max-h-full w-full max-w-full"
              />
              <div className="w-[100%] h-[100px] flex  flex-col justify-center items-center mt-[-5%] ">
                <span className="flex w-[100%] h-[50px] justify-center items-center gap-5 ">
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaFacebookF />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <RiInstagramFill />
                  </motion.div>
                  <motion.div initial="hidden" whileHover={"visible"} transition={{ duration: 1, ease: "linear", type: "spring" }} variants={variant} className='w-[50px] h-[50px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                    <FaTwitter />
                  </motion.div>
                </span>
                <h1 className=" font-bold text-[black] font-serif  text-[1rem]">Meet Michaela</h1>
                <h2 className="font-[200] text-[black] font-serif text-[12px]">Heart Specilist</h2>

              </div>
            </li> */}
          </ul>
        </div>
        {/*    <!-- Indicators --> */}
        <div
          className="flex w-full items-center justify-center gap-2"
          data-glide-el="controls[nav]"
        >
          <button
            className="group p-4"
            data-glide-dir="=0"
            aria-label="goto slide 1"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=1"
            aria-label="goto slide 2"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=2"
            aria-label="goto slide 3"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
          <button
            className="group p-4"
            data-glide-dir="=3"
            aria-label="goto slide 4"
          >
            <span className="block h-2 w-2 rounded-full bg-white/20 ring-1 ring-slate-700 transition-colors duration-300 focus:outline-none"></span>
          </button>
        </div>
      </div>
      {/*<!-- End Carousel with indicators outside --> */}
    </>
  )
}

export default Carousel;