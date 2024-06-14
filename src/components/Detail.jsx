import React from 'react';
import Detailcard from './Detailcard';
import { FaUserDoctor } from "react-icons/fa6";
import { FaNotesMedical } from "react-icons/fa6";
import { PiAmbulanceFill } from "react-icons/pi";
import { ImCross } from "react-icons/im";


function Detail() {
    return (
        <div>
            <div className='w-full min-h-[700px] bg-[#0da8bc] relative'>
                <div className='w-[100] h-[100px] bg-[#ffffff] absolute top-0 left-0 right-0 border-2 border-[#0da8bc] flex justify-center items-center text-[20px] font-serif font-bold shadow-lg'>
                    <h1>
                        Clinic With Innovations
                    </h1>

                </div>


                <div className='w-full min-h-[600px] absolute bottom-0 left-0 right-0 flex justify-center items-center gap-10 flex-wrap'>
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