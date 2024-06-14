import React, { useEffect, useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';


function Test() {

    const { scrollY } = useScroll();
    const [hidden, sethidden] = useState(false);

    const variants = {
        hidden: {height:300 ,scale:2},
        visible: {height:0,scale:0}

    }

   useMotionValueEvent(scrollY,"change",(latest)=>{
    console.log(latest)
    if(latest > 70){
        sethidden(true);
    }
    else{
        sethidden(false);
    }
   })


    return (
        <div className='w-[100%] h-[600px] flex justify-center items-center'>
            <motion.div className='w-[100%] h-[200px] bg-[red]' animate={hidden ? "hidden" : "visible"} variants={variants} transition={{ duration: 2, ease: "easeInOut", type:"spring" }}>

            </motion.div>
        </div>

    )
}

export default Test