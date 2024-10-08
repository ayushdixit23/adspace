'use client';
import React from 'react';
import Image from 'next/image';
import IMG1 from '../assets/select-option.png';
const SetUpAds = () => {
  return (
    <div className="h-full p-2 flex flex-col gap-5 ">
      <form className="flex flex-col gap-5 ">
        <div className="flex flex-col gap-2 ">
          <label htmlFor="community" className="text-[16px] font-semibold">
            Community<span className="pl-2 text-red-600">*</span>
          </label>
          <select
            id="community"
            className="rounded-lg p-2 border-2 border-[#F2F2F7]"
          >
            <option
              value={'clothing Girlz'}
              className=" text-[12px] sm:text-[16px]"
            >
              Clothing Girlz 1
            </option>
            <option
              value={'clothing Girlz'}
              className=" text-[12px] sm:text-[16px]"
            >
              Clothing Girlz 2
            </option>
            <option
              value={'clothing Girlz'}
              className=" text-[12px] sm:text-[16px]"
            >
              Clothing Girlz 3
            </option>
          </select>
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="ad-name" className="text-[16px] font-semibold">
            Ad Name <span className="pl-2 text-red-600">*</span>
          </label>
          <input
            type="text"
            className="rounded-lg w-full p-2 border-2 border-[#F2F2F7]"
          />
        </div>
      </form>
      <div className="h-full">
        <h1 className="pb-2 font-semibold text-[16px]">
          {' '}
          Objective <span className="pl-2 text-red-600">*</span>
        </h1>
        <div className="h-full flex justify-center items-center flex-wrap sm:flex-nowrap gap-4">
          <div className="flex flex-col gap-2 sm:basis-1/2">
            <button className="text-[14px] font-semibold w-full flex justify-start items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2 bg-[#f2f2f7c0]">
              <Image src={IMG1} /> Brand awareness and reach{' '}
            </button>
            <button className="text-[14px] flex justify-start items-center  border-2 border-[#747677]  p-1 sm:p-2 rounded-lg gap-2">
              <Image src={IMG1} /> Brand awareness and reach{' '}
            </button>
            <button className="text-[14px] flex justify-start items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2">
              <Image src={IMG1} /> Brand awareness and reach{' '}
            </button>
            <button className="text-[14px] flex justify-start items-center  border-2 border-[#747677]  p-1 sm:p-2 rounded-lg gap-2">
              <Image src={IMG1} /> Brand awareness and reach{' '}
            </button>
            <button className="text-[14px] flex justify-start items-center  border-2 border-[#747677] p-1 sm:p-2 rounded-lg gap-2">
              <Image src={IMG1} /> Brand awareness and reach{' '}
            </button>
          </div>
          <div className="min-h-full sm:basis-1/2 p-3 rounded-md bg-[#F2F2F7] place-self-stretch flex flex-col gap-3">
            <h1 className="font-semibold">Brand awareness and reach</h1>
            <p className="text-[10px] text-[#666666]">
              Increase awareness of your brand or product
            </p>
            <ul className="list-disc list-inside">
              <li className="text-[10px] font-semibold">Pay for CPM</li>
              <li className="text-[10px] font-semibold">
                Optimized towards impressions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SetUpAds;
