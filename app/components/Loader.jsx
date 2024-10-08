"use client"
import React from 'react'
import dynamic from 'next/dynamic'
const Lottie = dynamic(() => import("lottie-react"),{ssr:false})
import Loading from "../../app/assets/Loading.json"


const Loader = () => {
    return (
        <>
            <div className='fixed inset-0 w-screen flex justify-center z-50 items-center dark:bg-[#0d0d0d] bg-white h-screen'>
                <div>
                    <Lottie animationData={Loading} loop size={250} />
                </div>
            </div>
        </>
    )
}

export default Loader