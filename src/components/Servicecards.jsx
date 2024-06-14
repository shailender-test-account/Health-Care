import React from 'react';


import { motion } from 'framer-motion';

function Servicecards(props) {


    const variant={
        visible:{
            backgroundColor:"#ffffff",
            color:"#0da8bc",
            


        },
        hidden:{
            backgroundColor:"#0da8bc",
            color:"#ffffff",
            

        }
    }





    return (
        <div className='w-[400px] h-[500px]  shadow-lg m-10 relative'>
            
                <div className='w-[100px] h-[100px] bg-[#ffffff] flex justify-center absolute  bottom-[-10%] left-[35%] shadow-lg items-center rounded-full'>
                    <motion.div initial="hidden" whileHover={"visible"} transition={{duration:1 , ease:"linear" , type:"spring"}} variants={variant} className='w-[70px] h-[70px] bg-[#0da8bc] border-2 border-[#0da8bc] flex justify-center items-center rounded-full'>
                       {props.icon}
                    </motion.div>

                </div>



            
            <div className='w-[100%] h-[300px] overflow-hidden'>
                <img className='w-[100%] h-[100%] transition-all duration-[1s] ease-in-out hover:scale-[1.2]' src={props.image} alt="dental" />
            </div>
            <div className='w-[100%] h-[200px] flex flex-col justify-center items-center p-5 gap-4'>
                <h1 className='text-[1.5rem] font-bold font-serif '>{props.title}</h1>
                <p className='text-[gray] text-[15px] font-serif font-[100]'>Praesent convallis tortor et enim laoreet, vel consectetur purus latoque penatibus et dis parturient.</p>
            </div>



        </div>
    )
}

export default Servicecards;