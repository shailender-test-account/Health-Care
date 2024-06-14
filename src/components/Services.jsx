import React from 'react';
import Servicecards from './Servicecards';
import Dental from "../assets/dental.jpg";
import Neuro from "../assets/neurologist.jpg";
import Plumonary from "../assets/plumonary.jpg";
import Pred from "../assets/predatrics.jpg";
import { LuBrainCircuit } from "react-icons/lu";
import { RiLungsLine } from "react-icons/ri";
import { FaRegHeart } from "react-icons/fa6";
import { TbDental } from "react-icons/tb";




function Services() {
    return (
        <div>
            <div className='w-full min-h-[900px]  flex flex-col justify-center items-center p-10 mt-10'>

                <div className='w-[300px] h-[80px] text-[black] font-serif font-bold text-[20px] border-b-2 border-b-[#0da8bc] flex justify-center items-center mt-[-10%]'>
                    Our Services


                </div>
                <div className='flex w-[100%] h-[500px] p-10 mt-0 '>

                    <Servicecards
                        title="Dental Care"
                        image={Dental}
                        icon={<TbDental />}
                    />
                    <Servicecards
                        title="Neurological"
                        image={Neuro}
                        icon={<LuBrainCircuit />}
                    />
                    <Servicecards
                        title="Pulmonary"
                        image={Plumonary}
                        icon={<RiLungsLine />}
                    />
                    <Servicecards
                        title="Prediatrics"
                        image={Pred}
                        icon={<FaRegHeart />}
                    />

                </div>








            </div>

        </div>
    )
}

export default Services;