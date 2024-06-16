import React from 'react';
import Detailcard from './Detailcard';
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import { PiAmbulanceFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";


function Detail() {
    return (
        <div>
            <div className='w-full min-h-[900px]  bg-[#0da8bc] relative my-10'>
                <div className='w-[100] h-[100px] bg-[#ffffff]  flex justify-center items-center text-[20px] font-serif font-bold shadow-lg'>
                    <h1>
                        Clinic With Innovations
                    </h1>

                </div>


                <div className='w-full  min-h-[820px] py-10 gap-10  flex  justify-center items-center  gap-x-10 flex-wrap'>
                    <Detailcard
                        title="Qualified Doctors"
                        icon={<FaUserDoctor />}
                    />
                    <Detailcard
                        title="Emergency Care"
                        icon={<FaNotesMedical />}
                    />

                    <Detailcard
                        title={`24 X Service`}
                        icon={<PiAmbulanceFill />}
                    />


                </div>

            </div>

        </div>
    )
}

export default Detail