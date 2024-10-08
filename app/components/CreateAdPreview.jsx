import React from 'react';
import CreateAdView from './CreateAdView';
import Mobile from '../assets/MobileImg.png';
import Image from 'next/image';
const CreateAdPreview = ({formData}) => {
  return (
    <div className=" w-full relative h-screen flex flex-col items-center justify-center ">
      <Image src={Mobile} className="m-auto  h-[500px] " />
      <div className=" absolute inset-0 flex flex-col items-center justify-center pt-12 pl-2">
        <CreateAdView formData={formData}/>
      </div>
    </div>
  );
};

export default CreateAdPreview;
