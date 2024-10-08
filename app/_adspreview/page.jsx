import React from 'react';
import AdPreview from '../components/AdPreview';

import SelectConfig from '../components/SelectConfig';
const page = () => {
  return (
    <div className="flex flex-col">
      <div className="h-[50px] flex justify-between items-center px-10">
        <h1>Set up new Ad</h1>
        <div className="flex gap-10">
          <h1>Discard</h1>
          <button className="text-white bg-[#2D9AFF] rounded-xl px-4 text-[16px]">
            Save
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-5 md:gap-0 ">
        <div className="basis-full md:basis-1/2  bg-[#f8f9fade] px-10 ">
         
          <SelectConfig />
        </div>
        <div className="basis-full md:basis-1/2 bg-[#f8f9facc]">
          <AdPreview />
        </div>
      </div>
    </div>
  );
};

export default page;
