import Image from 'next/image';
import React from 'react';
import IMG1 from '../assets/target-img1.png';
import FeatureCard from './FeatureCard';
import IMG4 from '../assets/global.jpg';
import Date from './Date';
import P1 from '../assets/placement-1.png';
import P2 from '../assets/placement-2.png';
import P3 from '../assets/placement-3.png';
const Targetting = () => {
  return (
    <div className="min-h-full  p-2 flex flex-col gap-6">
      {/* <div className='flex flex-col gap-4'>
                <h1 className='font-semibold px-2'>Placements<span className='pl-2 text-red-600'>*</span></h1>
                <div className='border-2 rounded-lg py-4 border-[#c1c2c4] flex flex-wrap w-full justify-around'>
                    <section className='mb-2 bg-[#89bbfc] rounded-lg p-5 flex flex-col justify-around items-center'>
                        <Image src={IMG1} />
                        <h2 className='font-semibold'>In Feed</h2>
                    </section>
                    <section className='p-5 mb-2 bg-[#89bbfc] rounded-lg flex flex-col justify-around items-center'>
                        <Image src={IMG1} />
                        <h2 className='font-semibold'>In Feed</h2>
                    </section>
                    <section className='p-5  bg-[#89bbfc] rounded-lg flex flex-col justify-around items-center'>
                        <Image sr
                        c={IMG1} />
                        <h2 className='font-semibold'>In Feed</h2>
                    </section>
                </div>
            </div> */}
      <div className="flex flex-col gap-4">
        <h1 className="font-semibold px-2">
          Placements<span className="pl-2 text-red-600">*</span>
        </h1>
        <div className="border-2 rounded-lg py-4 border-[#c1c2c4] flex flex-wrap w-full justify-around">
          <section className="mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center">
            <Image src={P1} />
            <h2 className="font-semibold text-[12px]">In Feed</h2>
          </section>
          <section className="mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center">
            <Image src={P2} />
            <h2 className="font-semibold text-[12px]">Video</h2>
          </section>
          <section className="mb-2 bg-[#4C9AFF1A] rounded-lg p-4 flex flex-col gap-5 justify-between items-center">
            <Image src={P3} />
            <h2 className="font-semibold text-[12px]">Banner</h2>
          </section>
        </div>
      </div>
      <div className=" bg-[#F6F8F9] p-2 flex justify-between items-center">
        <section className="flex gap-5 flex-wrap ">
          <div className="flex flex-col items-center">
            <p className="text-[#686B6E] text-[10px]">Est. Impression</p>
            <h1 className="text-[14px] font-semibold">100K - 300K</h1>
          </div>
          <div className="flex flex-col items-center">
            <p className="text-[#686B6E] text-[10px]">Est. Click</p>
            <h1 className="text-[14px] font-semibold">2K - 10K</h1>
          </div>
        </section>
        <section>
          <button className="rounded-lg border-2 text-[#747677] py-2 px-4 text-[12px] border-[#CED3D9]">
            Daily
          </button>
          <button className="rounded-lg border-2 text-[12px] font-semibold p-2 border-[#CED3D9] bg-white">
            Weekly
          </button>
        </section>
      </div>
      <div className="flex gap-5 flex-wrap">
        <section className="rounded-lg bg-[#ebecec] border-2 border-[#747677]">
          <FeatureCard
            img={<Image src={IMG4} alt="image-1" className=" pt-7" />}
            heading="Broad"
            para="Reach Audience across all interests and communities."
            flag="false"
          />
        </section>
        <section className="rounded-lg bg-[#FAFAFA] border-2 border-[#747677]">
          <FeatureCard
            img={<Image src={IMG4} alt="image-1" className=" pt-7" />}
            heading="Broad"
            para="Reach Audience across all interests and communities."
            flag="false"
          />
        </section>
      </div>
      <div>
        <h1 className="text-[16px]">
          Location<span className="pl-2 text-red-600">*</span>
        </h1>
        <input type="text" className="border-2 brder-[#D7D7D7] w-full p-2" />
      </div>
      <div className="flex justify-between gap-2 flex-wrap">
        <section>
          <h1 className="font-semibold">Start Date</h1>
          <Date />
        </section>
        <section>
          <h1 className="font-semibold">End Date</h1>
          <Date />
        </section>
      </div>
    </div>
  );
};

export default Targetting;
